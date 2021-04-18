import React from 'react'
import routes from './routes'
import { Link } from 'react-router-dom'
import { render } from 'react-dom'

const Header = () => {
    return(
        <div className="navigation">
            <ul className="nav">
                {routes.map((route, i) => (
                    <li key={i}>
                        <Link to={route.path}>{route.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Header