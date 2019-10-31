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
                {/**=============== Account Information  ======================= */}
                <div>
                    <h2>Account Information</h2>
                    <p>Email: {user.email}</p>
                    <p>Password: {user.password}</p>
                </div>
                {/**=============== Payment Information  ======================= */}
                <div>
                    <h2>Payment Information</h2>
                    <p>Subscription:{stripeInfo.subscription}</p>
                </div>

                {/**=============== Educational Research Participation Toggle  ======================= */}
                <div>
                    <h2>Educational Research Information</h2>
                    <input
                        type='checkbox'
                        name='Educational-Research'
                        checked={checked}
                        onChange={handleChange}
                    />
                    <p>I would like to participate in the Educational Research</p>

                </div>

                {/**=============== Educational Research Information  ======================= */}
                {checked ? <div>
                    <div>
                        <p>Phone Number: {user.phone_number}</p>
                        <p>Academic Research:{user.academic_research}</p>
                        <p>Parent Age: {user.parent_age}</p>
                        <p>Marital Status: {user.marital_status}</p>
                        <p>Relation to Child: {user.relation_to_child}</p>
                        <p>Education: {user.education}</p>
                        <p>Address: {user.address}</p>
                        <p>City: {user.city}</p>
                        <p>State: {user.state}</p>
                        <p>country: {user.country}</p>
                        <p>Zip: {user.zip}</p>
                    </div>
                </div> : <p></p>}
            </div>
        </div>
    )
}

export default Profile;