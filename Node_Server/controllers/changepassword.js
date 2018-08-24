const handlePassword = (req,res,auth)=>{
	const{email} = req.body;
		auth.sendPasswordResetEmail(email)
		.then(() => {
			return res.json("Password reset email sent to employee registered email address");
		})
		.catch((error)=>{
			return res.json(error.message);
		});
}

module.exports = {
	handlePassword : handlePassword
};