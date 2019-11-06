import React, { useState, useEffect } from 'react';
import axios from 'axios'


const Profile = (props) => {
    const [checked, setChecked] = useState(false);
    const [edit, setEdit] = useState(false)
    // const [user, setUser] = useState({})
    const handleCheck = event => {
        setChecked(event.target.checked)
        console.log(event.target.checked)
    };
    const handleEdit = event => {
    };
    useEffect(() => {
        // Grab the current user from cookies and feed it into the axios call
        axios
            .get(`https://projectfirefly.herokuapp.com/users/{id}`)
            .then(response => {
                // setUser(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);
    const user = {
        email: 'email@email.com',
        password: '123456789',
        name: 'John Doe',
        phone_number: '101 101 1234',
        academic_research: true,
        parent_age: 20,
        marital_status: 'Married',
        relation_to_child: 'Parent',
        education: 'College',
        address: '1234 East Westington',
        city: 'Nowhere',
        state: 'NA',
        country: 'United Nowhere',
        zip: '12345'
    }
    const stripeInfo = {
        subscription: 'Monthly',
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
                                <div><p>Email:</p><p className="edit-field"><input className="green-input" value="user.email"></input></p></div>
                                <div><p>Name:</p><p className="edit-field"><input className="green-input" value="user.name"></input></p></div>
                                <div><p>Password:</p> <p className="edit-field"><input className="green-input" value={user.password}></input></p></div>
                            </div>
                        </div>
                        {/**=============== Payment Information  ======================= */}
                        <div className="span payment-information">
                            <h2>Payment Information</h2>
                            <div><p>Subscription:</p><p className="edit-field">{stripeInfo.subscription}</p></div>
                            <div><p>Credit Card:</p><p className="edit-field">{stripeInfo.subscription}</p></div>
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
                        <div className="flex-button"><button className="off-button" onClick={() => setEdit(false)}>BACK</button><button onClick={() => setEdit(false)}>SAVE</button></div>
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
                                    <div><p>Password:</p> <p className="edit-field">{user.password}</p></div>
                                </div>
                            </div>
                            {/**=============== Payment Information  ======================= */}
                            <div className="span payment-information">
                                <h2>Payment Information</h2>
                                <div><p>Subscription:</p><p className="edit-field">{stripeInfo.subscription}</p></div>
                                <div><p>Credit Card:</p><p className="edit-field">{stripeInfo.subscription}</p></div>
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