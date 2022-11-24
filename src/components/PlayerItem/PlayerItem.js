import { useState } from "react"

const PlayerItem = ({contact, username, ewallet, room, vip, onDeleteItem, onVip, onEditItem}) => {

    const [edit, setEdit] = useState(false)

    const [newContact, setNewContact] = useState('')
    const [newUsername, setNewUsername] = useState('')
    const [newEwallet, setNewEwallet] = useState('')
    const [newRoom, setNewRoom] = useState('')

    const onEdit = () => {
        setEdit(true)
        setNewContact(contact)
        setNewUsername(username)
        setNewEwallet(ewallet)
        setNewRoom(room)
    }

    const onSave = () => {
        onEditItem(newContact, newUsername, newEwallet, newRoom)
        setEdit(false)
    }

    const onClose= () => {
        setEdit(false)
    }
    
    let emoji = ""
    if (vip) {
        emoji = "🤪"
    }

    return (
        <li>
                {edit ? 
                    <li>
                        <input 
                            type="text" 
                            placeholder="some"
                            value={newContact}
                            onChange={(e) => setNewContact(e.target.value)}
                        />
                        <input 
                            type="text" 
                            placeholder="some"
                            value={newUsername}
                            onChange={(e) => setNewUsername(e.target.value)}
                        />
                        <input 
                            type="text" 
                            placeholder="some"
                            value={newEwallet}
                            onChange={(e) => setNewEwallet(e.target.value)}
                        />
                        <input 
                            type="text" 
                            placeholder="some"
                            value={newRoom}
                            onChange={(e) => setNewRoom(e.target.value)}
                        />
                        <button onClick={onSave} >Save</button>
                        <button type='button' onClick={onClose} >Отменить</button>
                    </li>  
                : 
                    <ul>
                        <li style={{cursor: 'pointer'}}>{contact} {emoji}</li>
                        <li>{username}</li>
                        <li>{ewallet}</li>
                        <li>{room}</li>
                        <button type='button' onClick={onVip}>Vip</button>
                        <button type='button' onClick={onEdit} >Edit</button>
                        <button type='button' onClick={onDeleteItem} >Delete</button>
                    </ul>
                }

        </li>
    )
}

export default PlayerItem