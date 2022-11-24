
const Filter = ({getFilterParam, filterParam, getSearchParam}) => {

    const buttonsData = [
        {label: 'All', name: 'all'},
        {label: 'Pokerking', name: 'pokerking'},
        {label: 'vip', name: 'vip'},
    ]

    const button = buttonsData.map(item => {
        let clazz = {
            outline: 'none'
        }

        if (filterParam === item.name) {
            clazz = {
                outline: '2px solid red'
            }
        }
        return (
            <button type='button' 
                    style={clazz}
                    key={item.name} 
                    onClick={() => getFilterParam(item.name)}>
                    {item.label}
            </button>
        )
    })

    return (
        <div>
            <input type='text' placeholder='search by contact only' onChange={(e) => getSearchParam(e.target.value)} />
            {button}
        </div>
    )
}

export default Filter