import React from 'react';
import './Bookinglist.css';

import ReactHTMLTableToExcel from 'react-html-table-to-excel';
class Bookinglist extends React.Component {
 
    constructor(props) {
        super(props);
        this.state={
        	start:'',
        	end:'',
        	data:[],
        	trip:0
        }
    }
   	startChange=(e)=>{
   		this.setState({trip:0})
    	this.setState({start:e.target.value})
    	console.log('start',e.target.value)
    }
    endChange=(e)=>{
    	this.setState({trip:0})
    	this.setState({end:e.target.value})
    	console.log('end',e.target.value)
    }
    status='';
    onSubmit=()=>{
    	fetch('http://localhost:3000/viewbookadmin',{
			method: 'post',
			headers: {'Content-Type':'application/json'},
			body: JSON.stringify({  //stringify javascript object
				start: this.state.start,
				end: this.state.end
			})
		})
		.then(response=>{
			try{
				this.status=response.status;
			}
			catch(err){
				console.log(err);
			}
			
			return response.json();
		})
		.then(res=>{
			if(this.status === 400){
				this.props.errorValidation(res);
			}
			else{
				this.props.errorValidation("");
				this.status=0;
				this.setState({data:res});
				this.setState({trip:0})
			}
		})
		.then(()=>{
			console.log(this.state.data);
		})
		.catch(error=>this.props.errorValidation("Some Technical glitches....Contact Admin!"))
    }
    Student = (props) => {
	  const [key, value] = props.student;
	  return (
	    <tr>
	      <td>{value.Name}</td>
	      <td>{key}</td>
	      <td>{value.SigninTime}</td>
	      <td>{value.Address}</td>
	      <td>{value.SupervisorName}</td>
	      <td>{value.DropOffTime}</td>
	    </tr>
	  );
	}
	Record=(props)=>{
	  const [key, value] = props.rec;
	  return (
	    <div className="record">
	        <thead>
	          <tr>
	          	<th>Trip {++this.state.trip}</th>
	            <th>Date</th><td>{value.Date}</td>
	            <th>Departure<br/>Time:</th><td>{value.DepartureTime}</td>
	            <th>Return<br/>Time</th><td>{value.ReturnTime}</td>
	            <th>No. Of<br/>passengers</th><td>{value.NumberOfPassengers}</td>
	            <th>Supervisor</th><td>{value.SupervisorName}</td>
	            <th>Driver</th><td>{value.DriverName}</td>
	          </tr>
	          <tr><th colSpan="6">Passenger Details</th></tr>
	          <tr>
	            <th>Name</th>
	            <th>SUID</th>
	            <th>SignInTime</th>
	            <th>Address</th>
	            <th>Supervisor</th>
	            <th>Dropoff Time</th>
	          </tr>
	         </thead>
	         <tbody>
	           {Object.entries(value.Students).map(s => (
	             <this.Student key={s[0]} student={s}/>
	           ))}
	         </tbody>
	     </div>
	  );
	}

	render(){
		return(
			<div>
				<h2 className='tc'>Booking List</h2>
	            <fieldset>
    				<legend style={{background: '000',padding: '3px 6px'}}>Choose trip dates</legend>
    				<div>
        				<label htmlFor="start">Start</label>
        				<input type="date" id="start" name="trip" onChange={this.startChange}/>
   					</div>

    				<div>
        				&nbsp;&nbsp;<label htmlFor="end">End</label>
        				<input type="date" id="end" name="trip" onChange={this.endChange}/>
    				</div>
    				<div>
    					<input type="submit" id ="submit" onClick={this.onSubmit}/>
    				</div>

				</fieldset>
				{
					this.state.data.length === 0
					?<div>
						<h1 className='tc'>No Trip available for searched dates</h1>
					 </div>
					:<div>
						<ReactHTMLTableToExcel
		                    id="test-table-xls-button"
		                    className="download-table-xls-button"
		                    table="downloadTable"
		                    filename="tablexls"
		                    sheet="tablexls"
		                    buttonText="Download as XLS"
		                />
			            <table id="downloadTable" className="pure-table">
							{
								this.state.data.map(
							       d => Object.entries(d).map(d => <this.Record key={d[0]} rec={d}/>)
							    )
							}
						</table>
					</div>
				}
		    </div>
		);
	}
}
  
export default Bookinglist;
