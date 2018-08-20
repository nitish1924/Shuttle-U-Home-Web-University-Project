const handleSignin = (req,res,auth,db)=>{
	const{email,password} = req.body; //destructuring
	if(!email||!password){ // checking blank fields
		return res.status(400).json('All fields are Mandatory!');
	}

	auth.signInWithEmailAndPassword(email, password)
	.then((user)=>{
		console.log(user.user.uid)
		db.ref('Users/Supervisors').once("value")
		.then((snapshot) => {
		    snapshot.forEach((Snapshot) => {
		    	if(Snapshot.child('UserId').val()===user.user.uid){
		     	db.ref('SupervisorName').update({Name:Snapshot.child('Name').val()});
		     	return res.json(Snapshot.child('Name').val());
		     	}
		     	return res.json("not dispatcher")
		  	});
		  	//return res.status(400).json("Trouble logging in....Contact Admin");
		});
	})
	.catch((error)=>{
		return res.status(400).json(error.message);
	});
}

module.exports = {
	handleSignin : handleSignin
};