const handleRegister = (req,res,db,auth)=>{
	const{email,name,password,role} = req.body; //destructuring
	if(!email||!name||!password||!role){ // checking blank fields
		return res.status(400).json('All fields are Mandatory!');
	}
	let tableName='';
	role === 'driver' ? tableName ='Users/Drivers' : tableName ='Users/Supervisors';
	const uid='';
	auth.createUserWithEmailAndPassword(email, password)
	.then(user=>user.user.uid)
	.then((uid)=>{
		db.ref(tableName).push({ // set can be used instead of push
			Email:email,
		    UserId: uid,
		    Name: name
  		})
	})
	.then(data=>res.json("Registered Successfuly!"))
	.catch((error) => res.status(400).json(error.message));

}

module.exports = {
	handleRegister : handleRegister
};