import React, { Component } from 'react'

import axios from 'axios'

export default class AccountInfo extends Component {
    state = {
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
    }

    handleChange = e => {
        
        this.setState({ 
                ...this.state,
                [e.target.name]: e.target.value 
        })
        // console.log(this.state)
    }

    onSubmit = (e) => {      
        e.preventDefault()
        console.log('submit', this.state)
        axios.put('#', this.state)
            .then(res=>{ 
                localStorage.setItem('token', res.token)
                this.props.history.push("/stripe");
            })
            .catch(err => console.log(err))        
    }

    render() {
        return (
            <div className='accountInfo'>
                <h1>STEP 1: ACCOUNT INFORMATION</h1>
                <div>

                </div>
                <form className='form' onSubmit={this.onSubmit}>
                    <div className='flexStart'>
                        <div className='inputColumn width2'>
                            <label class='formLabel'>FIRST NAME</label>
                            <input 
                                className='inputStyle width3'
                                type='text'
                                name='firstName'
                                value={this.state.firstName}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className='inputColumn width2'>
                            <label class='formLabel'>LAST NAME</label>
                            <input 
                                className='inputStyle width3'
                                type='text'
                                name='lastName'
                                value={this.state.lastName}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className='flexStart width'>
                        <div className='inputColumn width'>
                            <label class='formLabel'>ADDRESS</label>
                            <input 
                                className='inputStyle width'
                                type='text'
                                name='address'
                                value={this.state.address}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className='flexStart width'>
                        <div className='inputColumn width'>
                            <label class='formLabel'>CITY</label>
                            <input 
                                className='inputStyle width'
                                type='text'
                                name='city'
                                value={this.state.city}
                                onChange={this.handleChange}
                                
                            />
                            <p class='required'>*Required</p>
                        </div>
                    </div>
                    <div className='flexStart'>
                        <div className='inputColumn width2'>
                            <label class='formLabel'>STATE</label>
                            <input 
                                className='inputStyle width3'
                                type='text'
                                name='state'
                                value={this.state.state}
                                onChange={this.handleChange}
                            />
                            <p class='required'>*Required</p>
                        </div>
                        <div className='inputColumn width2'>
                            <label class='formLabel'>ZIPCODE</label>
                            <input 
                                className='inputStyle width3'
                                type='text'
                                name='zipCode'
                                value={this.state.zipCode}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div class='buttonSpace width'>
                        <button class='buttonStyle' type='submit'>Next</button>    
                    </div>                    
                </form>
            </div>
        )
    }
}

