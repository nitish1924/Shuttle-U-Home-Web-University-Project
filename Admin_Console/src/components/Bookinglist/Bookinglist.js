import React from 'react';
import './Bookinglist.css';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

const style = {
	backgroundColor:'#BFBFBF',
	border: '1px solid black'
}

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
    }
    endChange=(e)=>{
    	this.setState({trip:0})
    	this.setState({end:e.target.value})
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
		.catch(error=>this.props.errorValidation("Some Technical glitches....Contact Admin!"))
    }
    Student = (props) => {
	  const [key, value] = props.student;
	  return (
	    <tr>
	      <td colSpan="2" style={{border: '1px solid black'}}>{value.Name}</td>
	      <td style={{border: '1px solid black'}}>{key}</td>
	      <td style={{border: '1px solid black'}}>{value.SigninTime}</td>
	      <td style={{border: '1px solid black'}}>{value.Address}</td>
	      <td style={{border: '1px solid black'}}>{value.SupervisorName}</td>
	      <td style={{border: '1px solid black'}}>{value.DropOffTime}</td>
	    </tr>
	  );
	}
	Record=(props)=>{
	  const [key, value] = props.rec;
	  return (
	    <div className="record">
	        <thead>
	          <tr>
	          	<th style={style}>Trip {++this.state.trip}</th>
	            <th style={style}>Date : {value.Date}</th>
	            <th style={style}>Departure Time : {value.DepartureTime}</th>
	            <th style={style}>Return Time : {value.ReturnTime}</th>
	            <th style={style}>No. Of passengers : {value.NumberOfPassengers}</th>
	            <th style={style}>Supervisor : {value.SupervisorName}</th>
	            <th style={style}>Driver : {value.DriverName}</th>
	          </tr>
	          <tr><th colSpan="7" style={style}>Passenger Details</th></tr>
	          <tr>
	            <th colSpan="2" style={style}>Name</th>
	            <th style={style}>SUID</th>
	            <th style={style}>SignInTime</th>
	            <th style={style}>Address</th>
	            <th style={style}>Supervisor</th>
	            <th style={style}>Dropoff Time</th>
	          </tr>
	         </thead>
	         <tbody>
	           {Object.entries(value.Students).map(s => (
	             <this.Student key={s[0]} student={s}/>
	           ))}
	           <tr> <td colSpan="7" style={{border:'None'}}> </td></tr>
	           <tr> <td colSpan="7" style={{border:'None'}}> </td></tr>
	           <br/>
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
        				<input type="date" className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white" id="start" name="trip" onChange={this.startChange}/>
   					</div>

    				<div>
        				&nbsp;&nbsp;<label htmlFor="end">End</label>
        				<input type="date" className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white" id="end" name="trip" onChange={this.endChange}/>
    				</div>
    				<div>
    					<input type="submit" className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" id ="submit" onClick={this.onSubmit}/>
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
