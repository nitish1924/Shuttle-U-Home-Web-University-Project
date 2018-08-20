const handleBook = (req,res,db,dateFormat)=>{
	const{name,suid,houseNo,streetAddress} = req.body; //destructuring
	if(!name||!suid||!houseNo||!streetAddress){ // checking blank fields
		return res.status(400).json('All fields are Mandatory!');
	}
	else{
		const letters = /^[a-zA-Z\s]*$/; 
		if(!name.match(letters)){
			return res.status(400).json('Name should only have letters');
		}
		const digits = /^[0-9]+$/;
		if(!suid.match(digits)){
			return res.status(400).json('SUID should only contains Numbers');
		}
		if(suid.length!=9){
			return res.status(400).json('SUID should be of only nine digits');
		}
		if(!houseNo.match(digits)){
			return res.status(400).json('House No should only contains Numbers');
		}
	}

	const now = new Date();
    const currentDate = dateFormat(now , "mm-dd-yyyy");
    const currentTime = dateFormat(now , "HH:MM:ss");
    const w = db.ref('Booking'); 
    var status = 0;
	w.once("value")
	.then((snapshot) => {
	    snapshot.forEach((childSnapshot) => {
	    	if(childSnapshot.child('SUID').val()===suid){
	    		status = 1;
	    		return status;
	    	}
	    	
	    })
	})
	.then(flag=>{
		if(status===1){
			return res.status(400).json('The Student with SUID : '+suid+' is already in waiting or travelling');
		}
		else{
			db.ref('SupervisorName').once("value")
			.then((snapshot) => {
				console.log(snapshot.child('Name').val())
	    		return snapshot.child('Name').val();
			})
			.then((supervisor) => {
				console.log(supervisor)
				db.ref('Booking').push({ // set can be used instead of push
				    Name: name,
				    SUID: suid,
				    HouseNo : houseNo,
				    StreetAddress:streetAddress,
				    Status : 'waiting',
				    Date : currentDate,
				    Time : currentTime,
				    SupervisorName:supervisor
		  		})
	  			.then(data=>{
	  				res.json("Booked Successfuly!");
	  			})
			})	
		}
	})
	.catch(err => res.status(400).json('Unable to book due to some technical glitches!')); 
}

module.exports = {
	handleBook : handleBook
};