const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const firebase = require('firebase');
const admin = require('firebase-admin');
const dateFormat = require('dateformat');

const register = require('./controllers/register');
const book = require('./controllers/book');
const edit = require('./controllers/edit');
const signin = require('./controllers/signin');
const adminsignin = require('./controllers/adminsignin');
const viewbookadmin = require('./controllers/viewbookadmin');
const changepassword = require('./controllers/changepassword');
const deleteuser = require('./controllers/deleteuser');



const config = {
  apiKey: "AIzaSyCuZTDGuZnmh5VrzgEc3E8gs8EdhW-PHAo",
  authDomain: "shuttle-u-home.firebaseapp.com",
  databaseURL: "https://shuttle-u-home.firebaseio.com",
  storageBucket: "gs://shuttle-u-home.appspot.com",
};

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: 'shuttle-u-home',
    clientEmail: "firebase-adminsdk-glk3n@shuttle-u-home.iam.gserviceaccount.com",
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCxQSgTWmT8FHnA\nc1DnFsyzcqTcFfbEakQfsHnbqkN0EmF9hZFQeaS80x0ryT6Fwd1wBjO+5iEJ7eu0\nD9GWd0SoUkGkg9GshaHf4Wy494ME6oL2hDmgKlqOEbxp1xkaEBhUFmypkQbAbTFc\nnS0R1Djtlis3MlFE4kna/qDXFNjLGcV7ebFcohHVNw+xlXg+04uTEaT7PfcteSr5\n3sd6bzFRRc+E/cFcaDfHMn2Y3VN+BXbyXq9j2fI8k85AceCSBbyQNmX9t87wyjTI\n3NMvu3APcPmCJyAaBsb9Pp7ntEwz1xjOCW0JDUuEdka7/pw0Bfk/2+z7JCF+Rmm+\ngyzAJQWBAgMBAAECggEAPGKkmvc8GO6GzcvbP2ayhN2lET9ASoijPaJ62R1Hjobm\nhIMYzrAqMZPAR9buwFWbsRrDzSCMF9xgZH7RGW/3SVqAd2Ha7+m0jFc5GUhk76tO\nw1mnYgubvvOG2w3GxOy/xQHAsgGwqaRpYRJAtOa2ICZ9AXhYXF206HC/bZZyBrpm\nsr/Su6uJzSKofpCjt+B8rLmVUJJcKLNvwJBb0cjwhBIfOxVoVI4F5Am8WhJi1V/+\nGcDLi2AD3qEQHhIEEhEXXhh/kpKQREhQWOBE4WCAWv61GRdqfLGS0iP2u+JjPx2q\nRdaWDNNABAt1EDoAnOS4VbagV0ngGsJnTr7cYEH22wKBgQDoEJ/Pu/3wzjOYMImP\nPGRvNNcT8f6zwrVHDcUtWCW9vZGMVTvRkWOcqHDTU0Phmv4vp2vdUKuxAwIeEYCH\n/msJJHsq/FDlxhNG6oqkvIPaCgwvIAxChnhiD999MTaRPl0chYop4djtkKV5YJMT\n8L8wiRJiI3al30PEqwIKegPQjwKBgQDDiVVvf7IVbWbBwDlF38CN+ns8RT9qXfTU\nHbl0IiEQZ94HxDENA9uLzmxCq9ixiF4CUh8vhcAOXWs+tl5TKGklDHXVzF0RpPAD\nG33pG0jD9GZsZao/2J3N/VFcuymG3LjVPaJvp4rP/eaElbUrhoE1GVb0TcVxVxO6\ni4CAeR2w7wKBgQCWxlZOzcGLty1mcAKwAXjvl9E1sEDf4l2NMLEvaNn8kTIDj00y\nN9gUbIwBgVPVPLJxm8FFJaindWDm0FBGC1LXudAceZrF7w+PP8uchK7V9zk7VQMi\nJeQJMm7uFA90BqTQZyMBWy9qClS4q7pjdkOB8Uz0Xj40Pv70xHaq/+OCmQKBgHkG\nIGYRgDS48NfM1OYFllWKCgqExbpdCvLarvVNRm+0Cf1+lel7UMCYc/NUD5vaTm1b\nTMgKHZQGiCFZmMoZgfKXYruAcL5B+vfBZU4JQCFgvKAs0JIRzaI4PsqJYSuCo7gA\nHPDEnysa+Dlpu6eD6abm1yYAmMsM3T4hp9hcnl7rAoGBAKwci/HS4RKT4vUAjEiX\nDUZ8bhPQ2XOXjYKmdIHcDAvGdw/djbAhl9C/K4o37YGn/g3iqDoNe/sN5+Y/gTfP\n90eMF1nKN4MU5ylAkO0R4ce8ouftpcrdAjwNH9C6NOLs/cQCI/gwclzkjmPKHV/B\nVjPCSOjOsq9SO7gZZkZYWUfx\n-----END PRIVATE KEY-----\n"
  }),
  databaseURL: "https://shuttle-u-home.firebaseio.com"
});

const dbAdmin=admin.auth();


firebase.initializeApp(config);
const db = firebase.database();
const auth =firebase.auth();

const app = express();
app.use(cors());
app.use(bodyParser.json()); // since body-parser is a middleware

const insert = ()=>{
	db.ref('demo').push({ // set can be used instead of push
    username: "name",
    email: "email",
    profile_picture : "imageUrl"
  });
}

app.post('/register',(req,res)=>{register.handleRegister(req,res,db,auth)});
app.post('/book',(req,res)=>{book.handleBook(req,res,db,dateFormat)});
app.put('/editbooking',(req,res)=>{edit.handleEdit(req,res,db)});
app.post('/signin',(req,res)=>{signin.handleSignin(req,res,auth,db)});
app.post('/adminsignin',(req,res)=>{adminsignin.handleAdminSignin(req,res,auth)});
app.post('/viewbookadmin',(req,res)=>{viewbookadmin.handleViewBookAdmin(req,res,db)});
app.put('/changepassword',(req,res)=>{changepassword.handlePassword(req,res,auth)});
app.delete('/deleteuser',(req,res)=>{deleteuser.handleUser(req,res,db,dbAdmin)});

app.listen(3000,()=>{console.log('running at port 3000')})
