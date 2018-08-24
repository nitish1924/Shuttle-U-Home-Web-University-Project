const handleAdminSignin = (req,res,auth,db)=>{
	const{email,password} = req.body; //destructuring
	if(!email||!password){ // checking blank fields
		return res.status(400).json('All fields are Mandatory!');
	}
	if(email != 'admin@admin.com'){
		return res.status(400).json("Not a valid admin email id..try with admin email id!");
	}
	auth.signInWithEmailAndPassword(email, password)
	.then((user)=>{
		return res.json("valid admin");
	})
	.catch((error)=>{
		return res.status(400).json(error.message);
	});
}

module.exports = {
	handleAdminSignin : handleAdminSignin
};