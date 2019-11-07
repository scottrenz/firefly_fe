import React, { Component } from 'react'

import axios from 'axios'
import { UserContext } from '../../contexts/UserContext'

export default class AccountInfo extends Component {
    state = {
        userId: '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
    }
    //check for first name
    handleChange = e => {
        if(this.state.firstName.length <= 1){
            let element = document.getElementById("pTag")
            element.classList.remove("hidden")
        }
        if(this.state.firstName.length > 1){
            let element = document.getElementById("pTag")
            element.classList.add("hidden")
        }
        this.setState({ 
                ...this.state,
                [e.target.name]: e.target.value 
        })
        // console.log(this.state)
    }

    //check length for last name
    handleChange2 = e => {
        if(this.state.lastName.length <= 1){
            let element = document.getElementById("pTag2")
            element.classList.remove("hidden2")
        }
        if(this.state.lastName.length > 1){
            let element = document.getElementById("pTag2")
            element.classList.add("hidden2")
        }
        this.setState({ 
                ...this.state,
                [e.target.name]: e.target.value 
        })
    }

    //check length for address
    handleChange3 = e => {
        if(this.state.address.length <= 1){
            let element = document.getElementById("pTag3")
            element.classList.remove("hidden3")
        }
        if(this.state.address.length > 1){
            let element = document.getElementById("pTag3")
            element.classList.add("hidden3")
        }
        this.setState({ 
                ...this.state,
                [e.target.name]: e.target.value 
        })
    }

    //for city
    handleChange4 = e => {
        if(this.state.city.length <= 1){
            let element = document.getElementById("pTag4")
            element.classList.remove("hidden4")
        }
        if(this.state.city.length > 1){
            let element = document.getElementById("pTag4")
            element.classList.add("hidden4")
        }
        this.setState({ 
                ...this.state,
                [e.target.name]: e.target.value 
        })
    }


    //for state of residence
    handleChange5 = e => {
        if(this.state.state.length <= 1){
            let element = document.getElementById("pTag5")
            element.classList.remove("hidden5")
        }
        if(this.state.state.length > 1){
            let element = document.getElementById("pTag5")
            element.classList.add("hidden5")
        }
        this.setState({ 
                ...this.state,
                [e.target.name]: e.target.value 
        })
    }

    //for zipCode
    handleChange6 = e => {
        if(this.state.zipCode.length <= 1){
            let element = document.getElementById("pTag6")
            element.classList.remove("hidden6")
        }
        if(this.state.zipCode.length > 1){
            let element = document.getElementById("pTag6")
            element.classList.add("hidden6")
        }
        this.setState({ 
                ...this.state,
                [e.target.name]: e.target.value 
        })
    }

    onSubmit = (e) => {  
        e.preventDefault()
        const user = this.state
        const userChange = {id: this.props.props.loggedInUser.id, user}
        // const _id = this.props.loggedInUser.id   
        
        console.log('submit', userChange)
        axios.put(`https://infinite-meadow-87721.herokuapp.com/users/${this.props.props.loggedInUser.id}`, userChange)
            .then(res => { 
                this.props.history.push('/stripe');
            })
            .catch(err => console.log(err))        
    }

    textCheck = (e) => {

        if(this.state.firstName.length > 0 && 
            this.state.lastName.length > 0 &&
            this.state.address.length > 0 &&
            this.state.city.length > 0 &&
            this.state.state.length > 0 &&
            this.state.zipCode.length > 0
        ) {
            let element = document.getElementById("form")
            element.classList.add("buttonChange")
        }
    }
    // handleChange2()
    render() {
        return (
        <UserContext.Consumer>
            {props => {
                
                this.props = {...this.props, props}
                console.log(this.props)
                return (
                    <div className='accountInfo' onChange={this.textCheck}>
                    <h1>STEP 1: ACCOUNT INFORMATION</h1>
                    <div>

                    </div>
                    <form className='form' onSubmit={this.onSubmit}>
                        <div className='flexStart'>
                            <div className='inputColumn width2'>
                                <label className='formLabel'>First Name</label>
                                <input 
                                    className='inputStyle width3'
                                    type='text'
                                    name='firstName'
                                    value={this.state.firstName}
                                    onChange={this.handleChange}
                                />
                                <p id='pTag' class='required hidden'>*Required</p>
                            </div>
                            <div className='inputColumn width2'>
                                <label className='formLabel'>Last Name</label>
                                <input 
                                    className='inputStyle width3'
                                    type='text'
                                    name='lastName'
                                    value={this.state.lastName}
                                    onChange={this.handleChange2}
                                />
                                <p id='pTag2' class='required hidden2'>*Required</p>
                            </div>
                        </div>
                        
                        <div className='flexStart width'>
                            <div className='inputColumn width'>
                                <label className='formLabel'>Address</label>
                                <input 
                                    className='inputStyle width'
                                    type='text'
                                    name='address'
                                    value={this.state.address}
                                    onChange={this.handleChange3}
                                />
                                <p id='pTag3' class='required hidden3'>*Required</p>
                            </div>
                        </div>

                        <div className='flexStart width'>
                            <div className='inputColumn width'>
                                <label className='formLabel'>City</label>
                                <input 
                                    className='inputStyle width'
                                    type='text'
                                    name='city'
                                    value={this.state.city}
                                    onChange={this.handleChange4}
                                    
                                />
                                <p id='pTag4' class='required hidden4'>*Required</p>
                            </div>
                        </div>

                        <div className='flexStart'>
                            <div className='inputColumn width2'>
                                <label className='formLabel'>State</label>
                                <input 
                                    className='inputStyle width3'
                                    type='text'
                                    name='state'
                                    value={this.state.state}
                                    onChange={this.handleChange5}
                                />
                                <p id='pTag5' class='required hidden5'>*Required</p>
                            </div>
                            <div className='inputColumn width2'>
                                <label class='formLabel'>Zip Code</label>
                                <input 
                                    className='inputStyle width3'
                                    type='text'
                                    name='zipCode'
                                    value={this.state.zipCode}
                                    onChange={this.handleChange6}
                                />
                                <p id='pTag6' class='required hidden6'>*Required</p>
                            </div>
                        </div>
                        <div className='buttonSpace width'>
                            <button id='form' class='buttonStyle' type='submit'>Next</button>    
                        </div>                    
                    </form>
                </div>
                )
            }}
                    
        </UserContext.Consumer>
    )}
}

