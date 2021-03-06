import { createSlice } from '@reduxjs/toolkit'

const navItems = [
    {
        id: 1,
        name: 'Home'
    },
    {
        id: 2,
        name: 'Meet Reiko'
    },
    {
        id: 3,
        name: 'Priorities'
    },
    {
        id: 4,
        name: 'Endorsements'
    },
    {
        id: 5,
        name: 'Events'
    }
]

const navSlice  = createSlice({
    name: 'nav',
    initialState: navItems
})
