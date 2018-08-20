import React from 'react';
import ReactTable from "react-table";
import '../../../node_modules/react-table/react-table.css';
import db from '../../firebase';

const initialState = {
  supervisors: '',
  drivers:''
}


class Employees extends React.Component {
	constructor(){
		super();
		this.state = initialState;
	}
	componentDidMount(){

		db.ref('Users/Supervisors').on('value',(snapshot) => {
	  		if(snapshot.numChildren()>0){
				this.setState({supervisors:''});
		  		this.setState({supervisors:snapshot.val()});
	  		}
	  		else{
	  			this.setState({supervisors:''});
	  		}
  		})
  		db.ref('Users/Drivers').on('value',(snapshot) => {
	  		if(snapshot.numChildren()>0){
				this.setState({drivers:''});
		  		this.setState({drivers:snapshot.val()});
	  		}
	  		else{
	  			this.setState({drivers:''});
	  		}
  		})
	}

passwordReset = (Email) => {
	fetch('http://localhost:3000/changepassword',{
			method: 'put',
			headers: {'Content-Type':'application/json'},
			body: JSON.stringify({  //stringify javascript object
				email: Email
			})
	})
	.then(response=>response.json())
	.then(data=>{
		window.alert(data);
	})
	.catch(()=>window.alert("unable to send password reset link"))
}

deleteUser = (uid,role) => {
	fetch('http://localhost:3000/deleteuser',{
			method: 'delete',
			headers: {'Content-Type':'application/json'},
			body: JSON.stringify({  //stringify javascript object
				uid: uid,
				role:role
			})
	})
	.then(response=>response.json())
	.then(data=>{
		window.alert(data);
	})
	.catch(()=>window.alert("unable to sdelete user"))
}


scolumns = [
 
  {
	Header: 'Name',
    accessor: 'Name'
  },
  {
	Header: 'Email',
    accessor: 'Email'
  },
  {
	Header: 'Id',
    accessor: 'UserId'
  },
  {
  		Header: 'Password Reset',
  		id: 'button',
		accessor: 'Email',
		Cell: row => (
			<a onClick={()=>this.passwordReset(row.row.Email)} className='f3 link dim black underline pa3 pointer'>Password Reset</a>	
		)
  },
  {
  		Header: 'Delete User',
  		id: 'button',
		accessor: 'UserId',
		Cell: row => (
				<a onClick={()=>this.deleteUser(row.row.UserId,"Supervisors")} className='f3 link dim black underline pa3 pointer'>Delete</a>
		)
  }
]

dcolumns = [
 
  {
	Header: 'Name',
    accessor: 'Name'
  },
  {
	Header: 'Email',
    accessor: 'Email'
  },
  {
	Header: 'Id',
    accessor: 'UserId'
  },
  {
  		Header: 'Password Reset',
  		id: 'button',
		accessor: 'Email',
		Cell: row => (
			<a onClick={()=>this.passwordReset(row.row.Email)} className='f3 link dim black underline pa3 pointer'>Password Reset</a>	
		)
  },
  {
  		Header: 'Delete User',
  		id: 'button',
		accessor: 'UserId',
		Cell: row => (
				<a onClick={()=>this.deleteUser(row.row.UserId,"Drivers")} className='f3 link dim black underline pa3 pointer'>Delete</a>
		)
  }
]



	render(){
		return(
			<div>
				<h1>Dispatchers</h1>
				<ReactTable
				    columns={this.scolumns}
				    data={Array.from(Object.values(this.state.supervisors))}
				    className='-striped -highlight'
				    defaultPageSize = {5}
				/>
				<h1>Drivers</h1>
				<ReactTable
				    columns={this.dcolumns}
				    data={Array.from(Object.values(this.state.drivers))}
				    className='-striped -highlight'
				    defaultPageSize = {5}
				/>
			</div>
		);
	
	}
}

export default Employees;