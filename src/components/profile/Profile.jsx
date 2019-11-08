import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../contexts/UserContext'

import axios from 'axios'

const Profile = (props) => {
    const [edit, setEdit] = useState(false)
    const [user, setUser] = useState({
        email: 'email@email.com',
        password: '123456789',
        name: 'John Doe',
        phone_number: '101 101 1234',
    });

    const { loggedInUser, setLoggedInUser } = useContext(UserContext)

    const onSumbit = () => {
        console.log(loggedInUser)
        setLoggedInUser(user)
        axios.put(`https://infinite-meadow-87721.herokuapp.com/users/${loggedInUser.id}`, loggedInUser)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    };

    function handleChange(event) {
        const updatedUser = { ...user, [event.target.name]: event.target.value }
        setUser(updatedUser)
    }

    useEffect(() => {
        axios.get(`https://infinite-meadow-87721.herokuapp.com/users/${loggedInUser.id}`)
            .then(res => setLoggedInUser(res))
            .catch(err => console.log(err))
    }, [])

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
                                        value={user.email}
                                        onChange={handleChange}
                                    />
                                </p>
                                </div>
                                <div><p>Name:</p><p className="edit-field">
                                    <input
                                        className="green-input"
                                        type="text"
                                        name="name"
                                        value={user.name}
                                        onChange={handleChange}
                                    />
                                </p></div>
                                <div><p>Password:</p> <p className="edit-field">
                                    <input
                                        className="green-input"
                                        name="password"
                                        value={user.password}
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
                                        <span class="checkmark" />
                                    </label>
                                </div>
                                <p className="check-box">I would like to participate in the Educational Research</p></div>
                        </div>
                    </div>
                    {/**=============== Manage Profile  ======================= */}
                    <div className="flex-two">
                        <h2>Manage Profile</h2>
                        <div className="flex-button"><button className="off-button" onClick={() => setEdit(false)}>BACK</button><button onClick={() => {
                            setEdit(false)
                            onSumbit()
                        }}>SAVE</button></div>
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
                                    <div><p>Name:</p><p className="edit-field">{user.name}</p></div>
                                    <div><p>Password:</p> <p className="edit-field"></p></div>
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
                                            <span class="checkmark" />
                                        </label>
                                    </div>
                                    <p className="check-box">I would like to participate in the Educational Research</p></div>
                            </div>
                        </div>
                        {/**=============== Manage Profile  ======================= */}
                        <div className="flex-two">
                            <h2>Manage Profile</h2>
                            <button onClick={() => props.history.push('/hub')}>BACK TO GAME</button>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Profile;