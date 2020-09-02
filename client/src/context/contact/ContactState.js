import React, { useReducer } from 'react'
import uuid from 'uuid'
import ContactContext from './contactContext'
import contactReducer from './contactReducer'
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types'


const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: 'Hari Bhandari',
                email: 'hari@email.com',
                phone: '1212121212',
                type: 'personal'
            },
            {
                id: 2,
                name: 'Laxmi Bhandari',
                email: 'laxmi@email.com',
                phone: '1212121212',
                type: 'personal'
            },
            {
                id: 3,
                name: 'KP Bhandari',
                email: 'kp@email.com',
                phone: '13121521212',
                type: 'personal'
            },
            {
                id: 4,
                name: 'BD Bhandari',
                email: 'bd@email.com',
                phone: '121416612212',
                type: 'personal'
            }
        ]
    }

    const [state, dispatch] = useReducer(contactReducer, initialState)

    // Add Contact

    // Delete Contact

    // Set Current Contact

    // Clear Current Contact

    // Update Contact

    // Filter Contact

    // Clear Filter

    return (
        <ContactContext.Provider value={{ contacts: state.contacts }}>
            {props.children}
        </ContactContext.Provider>
    )
}

export default ContactState
