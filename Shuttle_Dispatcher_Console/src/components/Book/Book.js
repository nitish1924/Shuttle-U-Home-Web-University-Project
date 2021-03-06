import React from 'react';

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

class Book extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name : '',
			suid : '',
			houseNo:'',
			address : ''
		}
	}

	onSuidChange = (event) => {
		this.setState({suid: event.target.value})
	}

	onNameChange = (event) => {
		this.setState({name: event.target.value})
	}
	
	onHouseChange = (event) => {
		this.setState({houseNo: event.target.value})
	}

	onAddressChange = (value) => {
		if(value!=null){
			this.setState({address: value.value})
		}
		else{
			this.setState({address: ''})
		}
		
	}

	onSubmitBook = () => {
		fetch('http://localhost:3000/book',{
			method: 'post',
			headers: {'Content-Type':'application/json'},
			body: JSON.stringify({  //stringify javascript object
				name: this.state.name,
				suid: this.state.suid,
				houseNo:this.state.houseNo,
				streetAddress: this.state.address
			})
		})
		.then(response=>response.json())
		.then(data=>{
			this.props.errorValidation(data);
			if(data==="Booked Successfuly!"){
				this.setState({name:''})
				this.setState({suid:''})
				this.setState({houseNo:''})
				this.setState({address:''})

			}
		})
		
	}

	

	render(){
		return(
			<div>
				<table>
				<caption><h1>Book</h1></caption>
				<tbody>
				<tr>
					<td>
					<input 
				        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white" 
				        type="tex" 
				        name="sname"  
				        id="sname" 
				        placeholder="Name"
				        value={this.state.name}
				        onChange = {this.onNameChange}
					/>
					</td>
					<td>
					<input 
				        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white"
				        type="tex" 
				        name="suid"  
				        id="suid" 
				        placeholder="SUID"
				        value={this.state.suid}
				        onChange = {this.onSuidChange}
				    />
					</td>
					<td>
					<input 
				        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white"
				        type="tex" 
				        name="houseNo"  
				        id="houseNo" 
				        placeholder="House No."
				        value={this.state.houseNo}
				        onChange = {this.onHouseChange}
				    />
					<Select
						className="b pa2 input-reset ba bg-transparent hover-bg-black"				        options={options}
				        filterOptions={filterOptions}
				        value={this.state.address}
				        onChange={val => this.onAddressChange(val)}
    				/>
					</td>
					<td>
					<input
				      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
				      type="submit" 
				      value="Book"
				      onClick={this.onSubmitBook}
				    />
					</td>
				</tr>
				</tbody>
				</table>
			</div>
		)
	}
}

export default Book;