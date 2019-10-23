import React, { useState } from 'react';

const Personal = ({
    setController,
    user,
    setUser
}) => {
    return (
        <div>
            <form>
                <label forhtml="random">random</label>
                <input
                    name="name"
                    value={user.name}
                    onChange={({ target }) => setUser(target.value)}
                />

                <label forhtml="random">random</label>
                <input
                    name="name"
                    value={user.name}
                    onChange={({ target }) => setUser(target.value)}
                />

                <label forhtml="random">random</label>
                <input
                    name="name"
                    value={user.name}
                    onChange={({ target }) => setUser(target.value)}
                />

                <label forhtml="random">random</label>
                <input
                    name="name"
                    value={user.name}
                    onChange={({ target }) => setUser(target.value)}
                />

                <label forhtml="random">random</label>
                <input
                    name="name"
                    value={user.name}
                    onChange={({ target }) => setUser(target.value)}
                />

                <button onSubmit={() => { setController({ step: 2 }) }}>Submit</button>
            </form>
        </div>
    )
}

export default Personal