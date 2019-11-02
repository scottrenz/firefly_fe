import React, { useState } from 'react';

import './profile.scss';

const Profile = () => {
    const [checked, setChecked] = useState(false);

    const handleChange = event => {
        setChecked(event.target.checked)
        console.log(event.target.checked)
    };

    const user = {
        email: 'email@email.com',
        password: '123456789',
        first_name: 'John',
        last_name: 'Doe',
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
        <div className='container-profile'>
            {/**=============== Left Side  ======================= */}
            <div>
                <div className="flex">
                    <div>
                        {/**=============== Account Information  ======================= */}
                        <div className="flex-one">
                            <h2>Account Information</h2>
                            <span><p>Email:</p> <p>{user.email}</p></span>
                            <span><p>Password:</p> <p>{user.password}</p></span>
                        </div>
                        {/**=============== Payment Information  ======================= */}
                        <div>
                            <h2>Payment Information</h2>
                            <span><p>Subscription:</p><p>{stripeInfo.subscription}</p></span>
                        </div>
                        {/**=============== Educational Research Participation Toggle  ======================= */}
                        <div>
                            <h2>Educational Research Information</h2>
                        </div>
                        {/**=============== Educational Research Information  ======================= */}
                        {checked ? <div>
                            <div>
                                <span><p>Phone Number:</p><p> {user.phone_number}</p></span>
                                <span><p>Academic Research:</p><p>{user.academic_research}</p></span>
                                <span><p>Parent Age:</p><p> {user.parent_age}</p></span>
                                <span><p>Marital Status:</p><p> {user.marital_status}</p></span>
                                <span><p>Relation to Child:</p><p> {user.relation_to_child}</p></span>
                                <span><p>Education:</p><p>{user.education}</p></span>
                                <span>
                                    <p>Address: {user.address}</p>
                                    <p>City: {user.city}</p>
                                    <p>State: {user.state}</p>
                                    <p>country: {user.country}</p>
                                    <p>Zip: {user.zip}</p>
                                </span>
                            </div>
                        </div> : <span><input
                            type='checkbox'
                            name='Educational-Research'
                            checked={checked}
                            onChange={handleChange}
                        />
                                <p>I would like to participate in the Educational Research</p></span>}
                    </div>

                    <div className="flex-two">
                        {/**=============== Manage Profile  ======================= */}
                        <div>
                            <h2>Manage Profile</h2>
                            <p>Place Holder Info</p>
                        </div>
                    </div>

                </div>



                <div className="right-align">
                    <button>Opt Out</button>
                    <button>Edit</button>
                    <button>Save</button>
                </div>
            </div>
        </div>
    )
}

export default Profile;