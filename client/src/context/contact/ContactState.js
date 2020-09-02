import React, { useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'
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
                type: 'professional'
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
        ],
        current: null,
        filtered: null
    }

    const [state, dispatch] = useReducer(contactReducer, initialState)

    // Add Contact
    const addContact = contact => {
        contact.id = uuidv4()
        dispatch({ type: ADD_CONTACT, payload: contact })
    }

    // Delete Contact
    const deleteContact = id => {
        dispatch({ type: DELETE_CONTACT, payload: id })
    }

    // Set Current Contact
    const setCurrent = contact => {
        dispatch({ type: SET_CURRENT, payload: contact })
    }

    // Clear Current Contact
    const clearCurrent = () => {
        dispatch({ type: CLEAR_CURRENT })
    }

    // Update Contact
    const updateContact = contact => {
        dispatch({ type: UPDATE_CONTACT, payload: contact })
    }

    // Filter Contact
    const filterContacts = text => {
        dispatch({ type: FILTER_CONTACTS, payload: text })
    }

    // Clear Filter
    const clearFilter = () => {
        dispatch({ type: CLEAR_FILTER })
    }

    return (
        <ContactContext.Provider value={{
            contacts: state.contacts,
            current: state.current,
            filtered: state.filtered,
            addContact,
            deleteContact,
            setCurrent,
            clearCurrent,
            updateContact,
            filterContacts,
            clearFilter
        }}>
            {props.children}
        </ContactContext.Provider>
    )
}

export default ContactState
