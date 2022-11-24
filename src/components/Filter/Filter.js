import './filter.scss';


const Filter = ({getFilterParam, filterParam, getSearchParam}) => {

    const buttonsData = [
        {label: 'All', name: 'all'},
        {label: 'Pokerking', name: 'pokerking'},
        {label: 'vip', name: 'vip'},
    ]

    const button = buttonsData.map(item => {
        let clazz = null

        if (filterParam === item.name) {
            clazz = 'active'
        }
        return (
            <button type='button' 
                    className={`btn ${clazz}`}
                    key={item.name} 
                    onClick={() => getFilterParam(item.name)}>
                    {item.label}
            </button>
        )
    })

    return (
        <div className='filter-box'>
            <div>
                <span>Search: </span>
                <input type='text' 
                       placeholder='search by contact only' 
                       onChange={(e) => getSearchParam(e.target.value)} /> 
            </div>
            <div className='button-set'>
                <span>Filter by: </span>
                {button}
            </div>
        </div>
    )
}

export default Filter