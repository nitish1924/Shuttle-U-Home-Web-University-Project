const handleEdit= (req,res,db)=>{
	const{value,field,time} = req.body; //destructuring
	if(!value||!field||!time){ // checking blank fields
		return res.status(400).json('All fields are Mandatory!');
	}
	else{
		const letters = /^[a-zA-Z\s]*$/; 
		if(field==='Name' && !value.match(letters)){
			return res.status(400).json('Name should only have letters');
		}
		const digits = /^[0-9]+$/;
		if(field==='SUID' && !value.match(digits)){
			return res.status(400).json('SUID should only contains Numbers');
		}
		if(field==='SUID' && value.length!=9){
			return res.status(400).json('SUID should be of only nine digits');
		}
		if(field==='HouseNo' && !value.match(digits)){
			return res.status(400).json('House No should only contains Numbers');
		}
	}
	const w = db.ref('Booking');
	w.once("value")
	.then((snapshot) => {
	    snapshot.forEach((childSnapshot) => {
	    	if(childSnapshot.child('Time').val()===time){
	    		if(field==='Name'){
	    			db.ref('Booking/'+childSnapshot.key).update({'Name':value})
	    			.then(data=>{
  						res.json("Name edited Successfuly!");
  					})
  					.catch(err => res.status(400).json('Unable to edit Name due to some technical glitches!'))
	    		}
	    		if(field==='HouseNo'){
	    			db.ref('Booking/'+childSnapshot.key).update({'HouseNo':value})
	    			.then(data=>{
  						res.json("House No. edited Successfuly!");
  					})
  					.catch(err => res.status(400).json('Unable to edit House No. due to some technical glitches!'))
	    		}
	    		if(field==='StreetAddress'){
	    			db.ref('Booking/'+childSnapshot.key).update({'StreetAddress':value})
	    			.then(data=>{
  						res.json("Street Address edited Successfuly!");
  					})
  					.catch(err => res.status(400).json('Unable to edit Street Address due to some technical glitches!'))
	    		}
	    		if(field==='SUID'){
	    			db.ref('Booking/'+childSnapshot.key).update({'SUID':value})
	    			.then(data=>{
  						res.json("SUID edited Successfuly!");
  					})
  					.catch(err => res.status(400).json('Unable to edit SUID due to some technical glitches!'))
	    		}
	     	}
	  	});
	});
}

module.exports = {
	handleEdit : handleEdit
};