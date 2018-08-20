const moment = require('moment');
const handleViewBookAdmin = (req,res,db)=>{
	var data=[];
	const{start,end} = req.body; //destructuring
	if(!start||!end){ // checking blank fields
		return res.status(400).json('All fields are Mandatory!');
	}
	const startMoment = moment(start,"YYYY-MM-DD");
	const endMoment = moment(end,"YYYY-MM-DD");
	 const w = db.ref('Database');
  		w.once('value',(snapshot) => {
	  		if(snapshot.numChildren()>0){
	  			snapshot.forEach((childSnapshot) => {

	    			if(startMoment <= (moment(childSnapshot.key,"MM-DD-YYYY")) 
	    				&& (moment(childSnapshot.key,"MM-DD-YYYY")) <= endMoment){
		    				console.log(childSnapshot.key)
		    				data.push(childSnapshot);
	    			}

	    		})	
	  		}
	  		else{
	  			return res.status(400).json("No bookings Available");
	  		}
	  		return res.json(data);
  		})
  		.catch(err => res.status(400).json('Technical Glitches...Try after sometime or contact Admin'))
}

module.exports = {
	handleViewBookAdmin : handleViewBookAdmin
};