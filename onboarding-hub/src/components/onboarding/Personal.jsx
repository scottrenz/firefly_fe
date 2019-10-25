import React from 'react';



const Personal = ({
    setController,
    user,
    setUser
}) => {
    return (
        <div className="personal-page">
            <form className="form" onSubmit={(event) => {
                event.preventDefault();
                setController({ steps: 1 })
            }}>
                <ul>

                    {/** First & Last Name */}
                    <li className="flex">
                        <input
                            className="field-style field-split align-left"
                            name="FirstName"
                            placeholder="First Name"
                            value={user.FirstName}
                            onChange={({ target }) => setUser({ FirstName: target.value })}
                        />

                        <input
                            className="field-style field-split align-right"
                            name="LastName"
                            placeholder="Last Name"
                            value={user.LastName}
                            onChange={({ target }) => setUser({ LastName: target.value })}
                        />
                    </li>
                    <li>
                        {/** First & Last Name */}
                        <input
                            className="field-style field-full align-none"
                            name="email"
                            placeholder="Email"
                            type="email"
                            value={user.email}
                            onChange={({ target }) => setUser({ email: target.value })}
                        />
                    </li>
                    <li>

                        <input
                            className="field-style field-full align-none"
                            name="phoneNumber"
                            placeholder="Phone Number"
                            value={user.phoneNumber}
                            onChange={({ target }) => setUser({ phoneNumber: target.value })}
                        />
                    </li>

                    <li>
                        <label>Academic Research</label>
                        <input
                            name="academic_research"
                            type="checkbox"
                            value={user.academic_research}
                            onChange={({ target }) => setUser({ academic_research: target.value })}
                        />
                    </li>
                    <li>
                        <input type="submit" value="Submit" />
                    </li>
                </ul>
            </form>
        </div>
    )
}

export default Personal