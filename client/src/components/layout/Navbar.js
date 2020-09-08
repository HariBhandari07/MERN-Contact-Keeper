import React, { Fragment, useContext } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/auth/authContext'
import ContactContext from '../../context/contact/contactContext'

const Navbar = ({ title, icon }) => {
    const authContext = useContext(AuthContext)
    const contactContext = useContext(ContactContext)

    const { isAuthenticated, logout, user } = authContext
    const { clearContacts } = contactContext
    const onLogout = () => {
        logout()

        // In SPAs when a user logs out and another user logs in, for a split of second, previous user data is
        // still visible to the now logged in user. So, don't forget to clean up user's state when a user logs out
        clearContacts()
    }

    const authLinks = (
        <Fragment>
            <li>Hello {user && user.name}</li>
            <li>
                <a href="#!" onClick={onLogout}>
                    <i className="fas fa-sign-out-alt"></i><span className="hide-sm">Logout</span>
                </a>
            </li>
        </Fragment>
    )

    const guestLinks = (
        <Fragment>
            <li>
                <Link to='/register'>Register</Link>
            </li>
            <li>
                <Link to='/login'>Login</Link>
            </li>
        </Fragment>
    )

    return (
        <div className="navbar bg-primary">
            <h1>
                <Link to='/'>
                    <i className={icon} /> {title}
                </Link>
            </h1>
            <ul>
                {isAuthenticated ? authLinks : guestLinks}
                {/*<li>*/}
                {/*    <Link to='/'>Home</Link>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <Link to='/about'>About</Link>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <Link to='/register'>Register</Link>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <Link to='/login'>Login</Link>*/}
                {/*</li>*/}
            </ul>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string
}

Navbar.defaultProps = {
    title: 'Contact Keeper',
    icon: 'fas fa-id-card-alt'
}

export default Navbar
