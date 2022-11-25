import PlayerItem from '../PlayerItem/PlayerItem'

const ItemsList = ({data, setData}) => {

    const onDeleteItem = (id) => {
        setData(data => {
            const newData = data.filter(item => item.id !== id)
            return newData
        })
        // const newData = data.filter(item => item.id != id)
        // setData(newData)
    }

    const onVip = (id) => {
        // const newData = data.map(item => {
        //     if (item.id === id) {
        //         return {...item, vip: !item.vip}
        //     }
        //     return item
        // })
        // setData(newData)

        setData(data => {
            const newData = data.map(item => {
                if (item.id === id) {
                    return {...item, vip: !item.vip}
                }
                return item
            })
            return newData
        })
      }

    const onEditItem = (id, contact, username, ewallet, room) => {
        setData(data => {
            const newData = data.map(item => {
                if (item.id === id) {
                    return {...item, contact: contact, username: username, ewallet: ewallet, room: room }
                }
                return item
            })
            return newData
        })
    }

    const player = data.map(({id, contact, username, ewallet, room, vip}) => {
        return (
            <PlayerItem key={id} 
                        contact={contact} 
                        username={username} 
                        ewallet={ewallet} 
                        room={room}
                        vip={vip} 
                        onDeleteItem ={() => onDeleteItem(id)}
                        onVip={() => onVip(id)} 
                        onEditItem={(contact, username, ewallet, room) => onEditItem(id, contact, username, ewallet, room)}
            />
        )
    })

    return (
        <ul>
            {player}
        </ul>
    )
}

export default ItemsList