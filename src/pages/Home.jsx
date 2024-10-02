import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <section>
            <div className='container'>
                <div className="home-content">
                    <h2>User Directory Connect Engage and Network</h2>
                    <p>Browse through our vibrant community and start meaningful conversations</p>
                    <div className="flex-gap">
                    <NavLink to={'/fetchhold'}>View User</NavLink>
                    <NavLink to={'/fetching'}>View Post</NavLink>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home
