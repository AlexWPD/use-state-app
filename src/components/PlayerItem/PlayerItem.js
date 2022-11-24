import './playerItem.scss';
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
        <li className='playerItem'>
                {edit ? 
                    <>
                        <ul className='editBox'>
                            <li>
                                <input 
                                    type="text" 
                                    placeholder="some"
                                    value={newContact}
                                    onChange={(e) => setNewContact(e.target.value)}
                                />
                            </li>
                            <li>
                                <input 
                                    type="text" 
                                    placeholder="some"
                                    value={newUsername}
                                    onChange={(e) => setNewUsername(e.target.value)}
                                />
                            </li>
                            <li>
                                <input 
                                    type="text" 
                                    placeholder="some"
                                    value={newEwallet}
                                    onChange={(e) => setNewEwallet(e.target.value)}
                                />
                            </li>
                            <li>
                                <input 
                                    type="text" 
                                    placeholder="some"
                                    value={newRoom}
                                    onChange={(e) => setNewRoom(e.target.value)}
                                />
                            </li>
                        </ul>
                        <div className='button-set'>
                            <button onClick={onSave} >Save</button>
                            <button type='button' onClick={onClose} >Отменить</button>
                        </div>
                    </>
                : 
                    <>
                        <ul className='listItems'>
                            <li className='listItem' >{contact} {emoji}</li>
                            <li className='listItem' >{username}</li>
                            <li className='listItem' >{ewallet}</li>
                            <li className='listItem' >{room}</li>
                        </ul>
                        <div className='button-set'>
                            <button className='btn' type='button' onClick={onVip}>Add VIP</button>
                            <button className='btn' type='button' onClick={onEdit} >Edit</button>
                            <button className='btn' type='button' onClick={onDeleteItem} >Delete</button>
                        </div>
                    </>
                }

        </li>
    )
}

export default PlayerItem