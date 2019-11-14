import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../contexts/UserContext'

import jwtDecode from 'jwt-decode'
import axios from 'axios'

const Profile = (props) => {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext)
    const [edit, setEdit] = useState(false)
    const [user, setUser] = useState({
        email: loggedInUser.email || '',
        password: loggedInUser.password || '',
        first_name: loggedInUser.first_name || '',
        last_name: loggedInUser.last_name || '',
    });

    useEffect(() => {
        if (localStorage.getItem('token')) {
            const decode = jwtDecode(localStorage.getItem('token'))

            setUser(loggedInUser)
            axios.get(`https://infinite-meadow-87721.herokuapp.com/users/${decode.subject}`)
                .then(res => {
                    setUser(res.data)
                })
                .catch(err => alert('There was an error reading the token information.'))
        }    
    }, [])

    const onSumbit = (event) => {
        event.preventDefault()
        //delete unneed properties to actually allow updating?
        delete user._id
        delete user.__v
        axios.put(`https://infinite-meadow-87721.herokuapp.com/users/${loggedInUser._id}`, user)
            .then(res => {
                setLoggedInUser(res.data)
                setUser(res.data)
            })
            .catch(err => alert('There was an error updating the user information.'))
    };

    function handleChange(event) {
        event.preventDefault()
        const updatedUser = { ...user, [event.target.name]: event.target.value }
        setUser(updatedUser)
    }

    return (
        <div>
            <h1 className="my-account">My Account</h1>
            <div className='container-profile'>
                {/**=============== Left Side  ======================= */}
                {edit ? <div className="flex">
                    <div className="flex-one">
                        {/**=============== Account Information  ======================= */}
                        <div className="account-information">
                            <div className="flex-header">
                                <h2>Account Information</h2>
                                <button className="circle-edit" onClick={() => setEdit(false)}>Edit</button>
                            </div>
                            <div className="span">
                                <div><p>Email:</p><p className="edit-field">
                                    <input
                                        className="green-input"
                                        type="text"
                                        name="email"
                                        defaultValue={user.email}
                                        onChange={handleChange}
                                    />
                                </p>
                                </div>
                                <div><p>First Name:</p><p className="edit-field">
                                    <input
                                        className="green-input"
                                        type="text"
                                        name="first_name"
                                        defaultValue={user.first_name}
                                        onChange={handleChange}
                                    />
                                </p></div>
                                <div><p>Last Name:</p><p className="edit-field">
                                    <input
                                        className="green-input"
                                        type="text"
                                        name="last_name"
                                        defaultValue={user.last_name}
                                        onChange={handleChange}
                                    />
                                </p></div>
                                <div><p>Password:</p> <p className="edit-field">
                                    <input
                                        className="green-input"
                                        name="password"
                                        defaultValue={user.password}
                                        onChange={handleChange}
                                    />
                                </p></div>
                            </div>
                        </div>
                        {/**=============== Payment Information  ======================= */}
                        <div className="span payment-information">
                            <h2>Payment Information</h2>
                            <div><p>Subscription:</p><p className="edit-field">Monthly</p></div>
                            <div><p>Price:</p><p className="edit-field">$4.99</p></div>
                        </div>
                        {/**=============== Educational Research Participation Toggle  ======================= */}
                        <div>
                            <h2 className="ed-h2">Educational Research Information</h2>
                        </div>
                        {/**=============== Educational Research Information  ======================= */}
                        <div className="span">
                            <div>
                                <div className="checkbox-persist">
                                    <label className="checkbox-label">
                                        <input type="checkbox" name="persistence" />
                                        <span className="checkmark" />
                                    </label>
                                </div>
                                <p className="check-box">I would like to participate in the Educational Research</p></div>
                        </div>
                    </div>
                    {/**=============== Manage Profile  ======================= */}
                    <div className="flex-two">
                        <h2>Manage Profile</h2>
                        <div className="flex-button">
                            <button className="off-button" onClick={() => setEdit(false)}>BACK</button>
                            <button onClick={(event) => {
                                setEdit(false)
                                onSumbit(event)
                            }}>SAVE</button>
                        </div>
                    </div>
                </div> : <div className="flex">
                        <div className="flex-one">
                            {/**=============== Account Information  ======================= */}
                            <div className="account-information">
                                <div className="flex-header">
                                    <h2>Account Information</h2>
                                    <button className="circle-edit" onClick={() => setEdit(true)}>Edit</button>
                                </div>
                                <div className="span">
                                    <div><p>Email:</p><p className="edit-field">{user.email}</p></div>
                                    <div><p>Name:</p><p className="edit-field">{user.first_name}{" "}{user.last_name}</p></div>
                                    <div><p>Password:</p><p className="edit-field">********</p></div>
                                </div>
                            </div>
                            {/**=============== Payment Information  ======================= */}
                            <div className="span payment-information">
                                <h2>Payment Information</h2>
                                <div><p>Subscription:</p><p className="edit-field">Monthly</p></div>
                                <div><p>Price:</p><p className="edit-field">$4.99</p></div>
                            </div>
                            {/**=============== Educational Research Participation Toggle  ======================= */}
                            <div>
                                <h2 className="ed-h2">Educational Research Information</h2>
                            </div>
                            {/**=============== Educational Research Information  ======================= */}
                            <div className="span">
                                <div>
                                    <div className="checkbox-persist">
                                        <label className="checkbox-label">
                                            <input type="checkbox" name="persistence" />
                                            <span className="checkmark" />
                                        </label>
                                    </div>
                                    <p className="check-box">I would like to participate in the Educational Research</p></div>
                            </div>
                        </div>
                        {/**=============== Manage Profile  ======================= */}
                        <div className="flex-two">
                            <h2>Manage Profile</h2>
                            <a href="https://projectfirefly-production.netlify.com/"><button>BACK TO GAME</button></a>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Profile;