import React from 'react'
import axios from 'axios'

class Forms extends React.Component {
    state = {
        credentials: {
            email: '',
            password: '',
            passwordCheck: ''
        }
    }

    handleChange = e => {

        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
        console.log(this.state.credentials)
    }

    onSubmit = e => {
        e.preventDefault()
        console.log('submit', this.state.credentials)

        axios.post('#', this.state.credentials)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <div className="personal-page">
                <form className="form" onSubmit={this.onSubmit}>
                    <legend>Sign up</legend>
                    <ul>
                        <li>
                            <input
                                className='field-style field-split align-left'
                                type="text"
                                name='email'
                                placeholder='Email'
                                value={this.state.credentials.email}
                                onChange={this.handleChange}
                            />
                        </li>
                        <li>
                            <input
                                className='field-style field-split align-right'
                                type="text"
                                name='password'
                                placeholder='Password'
                                value={this.state.credentials.password}
                                onChange={this.handleChange}
                            />
                        </li>
                        <li>
                            <input
                                className='field-style field-split align-none'
                                type="text"
                                name='passwordCheck'
                                placeholder='Confirm Password'
                                value={this.state.credentials.passwordCheck}
                                onChange={this.handleChange}
                            />
                        </li>
                        <li>
                            <button type='submit'>Submit</button>
                        </li>
                    </ul>
                </form>
            </div>
        )
    }
}

export default Forms