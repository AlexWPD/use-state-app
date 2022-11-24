import { useState } from "react"

const Form = ({setData}) => {

    const [contact, setContact] = useState('')
    const [username, setUsername] = useState('')
    const [ewallet, setEwallet] = useState('')
    const [room, setRoom] = useState('')

    const onAddContact = (e) => {
        setContact(e.target.value)
    }

    const onAddUsername = (e) => {
        setUsername(e.target.value)
    }

    const onAddEwallet = (e) => {
        setEwallet(e.target.value)
    }

    const onAddRoom = (e) => {
        setRoom(e.target.value)
    }

    const onAddNewItem = (contact, username, room, ewallet) => {
        setData(data => {
            let newId = Math.random()
            let newItem = {id: newId, contact: contact, username: username, ewallet: ewallet, room: room, vip: false}
            const newData = [...data, newItem]

            return newData
        })
    }
    
    const onSubmit = (e) => {
        e.preventDefault()

        if (contact != '' || username != '' || room != '' || ewallet != '') {
            onAddNewItem(contact, username, room, ewallet)
        }

        setContact('')
        setUsername('')
        setEwallet('')
        setRoom('')
    }
    
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input 
                    type='text' 
                    placeholder="contact" 
                    onChange={onAddContact} 
                    value={contact}
                    name="contact" >
                </input>
                <input 
                    type='text' 
                    placeholder="username" 
                    onChange={onAddUsername} 
                    value={username}
                    name="username" >
                </input>
                <input 
                    type='text' 
                    placeholder="ewallet" 
                    onChange={onAddEwallet} 
                    value={ewallet}
                    name="ewallet" >
                </input>
                <input 
                    type='text' 
                    placeholder="room" 
                    onChange={onAddRoom} 
                    value={room}
                    name="room" >
                </input>
                <button type='submit'>Добавить</button>
            </form>
    </div>
    )
}

export default Form
