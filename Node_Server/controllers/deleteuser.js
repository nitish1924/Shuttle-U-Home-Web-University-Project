const handleUser = (req,res,db,dbAdmin)=>{
	const{uid,role} = req.body;
		dbAdmin.deleteUser(uid)
		.then(()=>{
			db.ref('Users/'+role).once("value")
			.then((snapshot) => {
	   			snapshot.forEach((childSnapshot) => {
			    	if(childSnapshot.child('UserId').val()===uid){
				     	db.ref('Users/'+role+'/'+childSnapshot.key).remove();
			     	}
	  			})
			})
		})
		.then(() => {
			return res.json("User Deleted Successfully");
		})
		.catch((error)=>{
			console.log(error.message);
			return res.json(error.message);
		});
}

module.exports = {
	handleUser : handleUser
};