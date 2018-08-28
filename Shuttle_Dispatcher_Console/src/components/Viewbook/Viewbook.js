import React from 'react';
import ReactTable from "react-table";
import './Viewbook.css';
import '../../../node_modules/react-table/react-table.css';
import db from '../../firebase';

import Select from 'react-virtualized-select';
import createFilterOptions from 'react-select-fast-filter-options';
import 'react-select/dist/react-select.css';
import 'react-virtualized/styles.css';
import 'react-virtualized-select/styles.css'



const options = [

    
    { value: 'Ackerman Ave', label: 'Ackerman Ave' },

    
    { value: 'Acorn Path', label: 'Acorn Path' },
    
    { value: 'Alden Street', label: 'Alden Street'},
    
    { value: 'Allen St', label: 'Allen St' },
    
    { value: 'Andover Rd', label: 'Andover Rd' },
    
    { value: 'Avondale Pl', label: 'Avondale Pl' },
    
    { value: 'Bassett St', label: 'Bassett St' },
    
    { value: 'Berkeley Dr', label: 'Berkeley Dr' },
    
    { value: 'Boise Dr', label: 'Boise Dr' },
    
    { value: 'Broad St ', label: 'Broad St ' },
    
    { value: 'Bristol St.', label: 'Bristol St.' },
    
    { value: 'Buckingham Ave', label: 'Buckingham Ave' },
    
    { value: 'Burten St.', label: 'Burten St.' },
    
    { value: 'Butler St', label: 'Butler St' },  
    
    { value: 'Cambridge St', label: 'Cambridge St' },  
    
    { value: 'Cherry Street', label: 'Cherry Street' },  
    
    { value: 'Circle Rd', label: 'Circle Rd' },  
    
    { value: 'Clarendon St', label: 'Clarendon St' },  
    
    { value: 'Concord Pl', label: 'Concord Pl' },  
    
    { value: 'Clarke St', label: 'Clarke St' },  
    
    { value: 'Columbus Ave', label: 'Columbus Ave' },  
    
    { value: 'Comstock Ave', label: 'Comstock Ave' },
    
    { value: 'Comstock Pl', label: 'Comstock Pl' },  
    
    { value: 'Diana Ave', label: 'Diana Ave' },  
    
    { value: 'Dell St', label: 'Dell St' },  
    
    { value: 'Dorset Rd', label: 'Dorset Rd' },  
    
    { value: 'E. Adams St', label: 'E. Adams St' },  
    
    { value: 'E. Colvin St', label: 'E. Colvin St' }, 

    
    { value: 'E. Genesee St', label: 'E. Genesee St' },
    
    { value: 'Euclid Ave', label: 'Euclid Ave' },
    
    { value: 'Greenwood Pl', label: 'Greenwood Pl' },
    
    { value: 'Hariette Ave', label: 'Hariette Ave' },
    
    { value: 'Harrison St ', label: 'Harrison St ' },
    
    { value: 'Harvard Pl', label: 'Harvard Pl' },
    
    { value: 'Hawthorne St', label: 'Hawthorne St' },
    
    { value: 'Hertford St', label: 'Hertford St' },
    
    { value: 'Ivy Ridge Rd', label: 'Ivy Ridge Rd' },
    
    { value: 'Jamesville Ave', label: 'Jamesville Ave' },
    
    { value: 'Jean St', label: 'Jean St' },
    
    { value: 'Judson St', label: 'Judson St' },
    
    { value: 'Julian Pl', label: 'Julian Pl' },
    
    { value: 'Kensington Pl', label: 'Kensington Pl' },
    
    { value: 'Kensington Rd', label: 'Kensington Rd' },
    
    { value: 'Lancaster Ave', label: 'Lancaster Ave' },
    
    { value: 'Lexington ave.', label: 'Lexington ave.' },
    
    { value: 'Livingston Ave', label: 'Livingston Ave' },
    
    { value: 'Lorraine Ave', label: 'Lorraine Ave' },
    
    { value: 'Madison St', label: 'Madison St' },
    
    { value: 'Maple St', label: 'Maple St' },
    
    { value: 'Marshall St', label: 'Marshall St' },
    
    { value: 'Maryland Ave', label: 'Maryland Ave' },
    
    { value: 'Meadowbrook Drive', label: 'Meadowbrook Drive' },
    
    { value: 'Moore Ave', label: 'Moore Ave' },
    
    { value: 'N. Hughes Pl', label: 'N. Hughes Pl' },
    
    { value: 'N. Lorraine Ave', label: 'N. Lorraine Ave' },

    
    { value: 'Newbury Hollow Ln', label: 'Newbury Hollow Ln' },
    
    { value: 'Ostrom Ave', label: 'Ostrom Ave' },
    
    { value: 'Redfield Pl', label: 'Redfield Pl' },
    
    { value: 'Remington Ave', label: 'Remington Ave' },
    
    { value: 'Robert Dr', label: 'Robert Dr' },
    
    { value: 'Roney Ln', label: 'Roney Ln' },
    
    { value: 'Ruth Ave', label: 'Ruth Ave' },
    
    { value: 'S. Beech St', label: 'S. Beech St' },
    
    { value: 'S. Crouse', label: 'S. Crouse' },
    
    { value: 'S. Townsend St', label: 'S. Townsend St' },
    
    { value: 'Smith Ln', label: 'Smith Ln' },
    
    { value: 'Somerset Rd', label: 'Somerset Rd' },
    
    { value: 'Stevens Pl', label: 'Stevens Pl' },
    
    { value: 'Stratford St', label: 'Stratford St' },
    
    { value: 'Strong Ave', label: 'Strong Ave' },
    
    { value: 'Sumner Ave', label: 'Sumner Ave' },
    
    { value: 'Terrace Rd', label: 'Terrace Rd' },
    
    { value: 'Thurber St', label: 'Thurber St' },
    
    { value: 'Trinity Pl', label: 'Trinity Pl' },
    
    { value: 'University Ave', label: 'University Ave' },
    
    { value: 'Victoria Pl', label: 'Victoria Pl' },
    
    { value: 'Vincent St', label: 'Vincent St' },
    
    { value: 'Walnut Ave', label: 'Walnut Ave' },
    
    { value: 'Walnut Pl', label: 'Walnut Pl' },
    
    { value: 'Westcott St', label: 'Westcott St' },
    
    { value: 'Westminster Ave', label: 'Westminster Ave' },
    
    { value: 'Windsor Pl', label: 'Windsor Pl' }
   
];

const filterOptions = createFilterOptions({options });
const initialState = {
  waitList: '',
  snapshot:'',
  waitingCount:0
}

var count = 0;

class Viewbook extends React.Component {
	constructor(){
		super();
		this.state = initialState;
	}
	componentDidMount(){
		//const w = db.ref('Booking').orderByChild('Status').equalTo('waiting');
		const w = db.ref('Booking');
  		w.on('value',(snapshot) => {
  			count = 0;
	  		if(snapshot.numChildren()>0){
				snapshot.forEach((childSnapshot) => {
	    			if(childSnapshot.child('Status').val()==="waiting"){
	    				count++;
	    			}
	    		})
	    		this.setState({waitingCount:count});
				this.setState({waitList:''});
		  		this.setState({waitList:snapshot.val()});
		  		this.setState({snapshot:snapshot});
	  		}
	  		else{
	  			this.setState({waitList:''});
	  		}
  		})
	}


cancelBooking = (SUID) =>{
	const w = db.ref('Booking');

	w.once("value")
	.then((snapshot) => {
	    snapshot.forEach((childSnapshot) => {
	    	if(childSnapshot.child('SUID').val()===SUID){
		     	db.ref('Booking/'+childSnapshot.key).remove();
	     	}
	  	});
	});
}

onNameChange = (param,name, e) =>{
	if(name==="enter" && e.keyCode===13){
	  	fetch('http://localhost:3000/editbooking',{
				method: 'put',
				headers: {'Content-Type':'application/json'},
				body: JSON.stringify({  //stringify javascript object
					value: e.target.value,
					field: 'Name',
					time: param
				})
		})
		.then(response=>response.json())
		.then(data=>{
			window.alert(data);
			const waitlist = this.state.waitList;
			this.setState({waitList:''})
			this.setState({waitList:waitlist})
		})
		.catch(console.log("unable to update"))
	}
	else if(name==="blur"){
		fetch('http://localhost:3000/editbooking',{
				method: 'put',
				headers: {'Content-Type':'application/json'},
				body: JSON.stringify({  //stringify javascript object
					value: e.target.value,
					field: 'Name',
					time: param
				})
		})
		.then(response=>response.json())
		.then(data=>{
			window.alert(data);
			const waitlist = this.state.waitList;
			this.setState({waitList:''})
			this.setState({waitList:waitlist})
		})
		.catch(console.log("unable to update"))
	}
} 
onSUIDChange = (param,name,e) =>{
	var status = 0;
	if(name==="enter" && e.keyCode===13){
		const suidVal=e.target.value;
		db.ref('Booking').once("value")
		.then((snapshot)=>{
			snapshot.forEach((childSnapshot) => {
		    	if(childSnapshot.child('SUID').val()===suidVal){
					status=1;
		    		
		    	}
			})
		})
		.then(data=>{
			if(status===1){
				window.alert("SUID cannot be edited as this SUID already exists in Booking");
				const waitlist = this.state.waitList;
				this.setState({waitList:''})
				this.setState({waitList:waitlist})
			}
			else{
				fetch('http://localhost:3000/editbooking',{
					method: 'put',
					headers: {'Content-Type':'application/json'},
					body: JSON.stringify({  //stringify javascript object
						value: suidVal,
						field: 'SUID',
						time: param
					})
				})
				.then(response=>response.json())
				.then(data=>{
					window.alert(data);
					const waitlist = this.state.waitList;
					this.setState({waitList:''})
					this.setState({waitList:waitlist})
				})
				.catch(console.log("unable to update"))
			}
		})
	}
	else if(name==="blur"){
		const suidVal=e.target.value;
		db.ref('Booking').once("value")
		.then((snapshot)=>{
			snapshot.forEach((childSnapshot) => {
		    	if(childSnapshot.child('SUID').val()===suidVal){
					status=1;
		    		
		    	}
			})
		})
		.then(data=>{
			if(status===1){
				window.alert("SUID cannot be edited as this SUID already exists in Booking");
				const waitlist = this.state.waitList;
				this.setState({waitList:''})
				this.setState({waitList:waitlist})
			}
			else{
				fetch('http://localhost:3000/editbooking',{
					method: 'put',
					headers: {'Content-Type':'application/json'},
					body: JSON.stringify({  //stringify javascript object
						value: suidVal,
						field: 'SUID',
						time: param
					})
				})
				.then(response=>response.json())
				.then(data=>{
					window.alert(data);
					const waitlist = this.state.waitList;
					this.setState({waitList:''})
					this.setState({waitList:waitlist})
				})
				.catch(console.log("unable to update"))
			}
		})
	}
	
} 
onHouseChange = (param,name, e) =>{
	if(name==="enter" && e.keyCode===13){
		fetch('http://localhost:3000/editbooking',{
			method: 'put',
			headers: {'Content-Type':'application/json'},
			body: JSON.stringify({  //stringify javascript object
				value: e.target.value,
				field: 'HouseNo',
				time: param
			})

	})
	.then(response=>response.json())
	.then(data=>{
		window.alert(data);
		const waitlist = this.state.waitList;
		this.setState({waitList:''})
		this.setState({waitList:waitlist})
	})
	.catch(console.log("unable to update"))
	}
	else if(name==="blur"){
		fetch('http://localhost:3000/editbooking',{
			method: 'put',
			headers: {'Content-Type':'application/json'},
			body: JSON.stringify({  //stringify javascript object
				value: e.target.value,
				field: 'HouseNo',
				time: param
			})

	})
	.then(response=>response.json())
	.then(data=>{
		window.alert(data);
		const waitlist = this.state.waitList;
		this.setState({waitList:''})
		this.setState({waitList:waitlist})
	})
	.catch(console.log("unable to update"))
		
	}
  	
} 
onStreetChange = (value, time) =>{
	var val=""
	try{
		val=value.value
	}
	catch(err){
		val=""
	}
  	fetch('http://localhost:3000/editbooking',{
			method: 'put',
			headers: {'Content-Type':'application/json'},
			body: JSON.stringify({  //stringify javascript object
				value: val,
				field: 'StreetAddress',
				time: time
			})
	})
	.then(response=>response.json())
	.then(data=>{
		window.alert(data);
	})
	.catch(console.log("unable to update"))
} 
columns = [
  {
    Header: 'Name',
    sortable:false,
    filterable:false,	
    accessor: 'Name',
    Cell: row => (row.row.Status==='waiting'
    				?	<input 
		    				type='tex' 
		    				className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white" 
		    				defaultValue={row.row.Name} 
		    				style={{width:150}}
		    				onKeyUp={this.onNameChange.bind(this, row.row.Time,"enter")}
		    				onBlur={this.onNameChange.bind(this, row.row.Time,"blur")} 
	    				/>
    				:<input 
		    				type='tex' 
		    				className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white" 
		    				value={row.row.Name}
		    				style={{width:150}}
		    				readOnly	
	    			/>
    )				
  },
  {
	Header: 'SUID',
	sortable:false,
	filterable:false,
    accessor: 'SUID',
    Cell: row => (row.row.Status==='waiting'
    				?	<input 
		    				type='tex' 
		    				className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white" 
		    				defaultValue={row.row.SUID} 
		    				style={{width:150}}
		    				onKeyUp={this.onSUIDChange.bind(this, row.row.Time,"enter")}
		    				onBlur={this.onSUIDChange.bind(this, row.row.Time,"blur")} 
	    				/>
    				:<input 
		    				type='tex'  
		    				className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white"
		    				value={row.row.SUID}
		    				style={{width:150}}
		    				readOnly	
	    			/>
    )				
  },
  {
  	Header: 'Address',
  	sortable:false,
  	filterable:false,
  	columns: [
                {
                  Header: "House No.",
                  accessor: "HouseNo",
                  sortable:false,
                  filterable:false,
                   Cell: row => (row.row.Status==='waiting'
    				?	<input 
		    				type='tex'  
		    				className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white"
		    				defaultValue={row.row.HouseNo} 
		    				onKeyUp={this.onHouseChange.bind(this, row.row.Time,"enter")}
		    				onBlur={this.onHouseChange.bind(this, row.row.Time,"blur")} 
		    				style={{width:150}}
	    				/>
    				:<input 
		    				type='tex'  
		    				className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white"
		    				value={row.row.HouseNo}
		    				style={{width:150}}
		    				readOnly	
	    				/>
    )	
                },
                {
                  Header: "Street Address",
                  accessor: "StreetAddress",
                  sortable:false,
                  filterable:false,
                  Cell: row => (row.row.Status==='waiting'
    				?<Select
    					className="b pa2 input-reset ba bg-transparent hover-bg-black"
				        options={options}
				        filterOptions={filterOptions}
				        value={row.row.StreetAddress}
				        style={{width:150}}
				        onChange={(val)=>this.onStreetChange(val, row.row.Time)}
    				/>	
    				:<input 
		    				type='tex'  
		    				value={row.row.StreetAddress}
		    				className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white"
		    				style={{width:150}}
		    				readOnly	
	    				/>
    )	
                }
             ]
  },
  {
	Header: 'Date',
    accessor: 'Date',
    sortable:false,
    filterable:false,
  },
  {
	Header: 'SignIn Time',
	sortable:false,
	filterable:false,
    accessor: 'Time'
  },
  {
	Header: 'Status',
	sortable:false,
	filterable:false,
    accessor: 'Status'
  },
  {
  		id: 'button',
  		sortable:false,
  		filterable:false,
		accessor: 'SUID',
		Cell: row => (row.row.Status==='waiting'
				? <a onClick={()=>this.cancelBooking(row.row.SUID)} className='f3 link dim black underline pa3 pointer'>Delete</a>
				: null
		)
  }
]



	render(){
		return(
			<div>
				<h1>Waiting List</h1>
				<h2>No. Of Student Waiting : {this.state.waitingCount}</h2>
				<ReactTable
				    columns={this.columns}
				    data={Array.from(Object.values(this.state.waitList))}
				    className='-striped -highlight'
				/>
			</div>
		);
	
	}
}

export default Viewbook;