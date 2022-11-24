import {useState} from 'react';
import Header from './components/Header/Header'
import ItemsList from './components/ItemsList/ItemsList'
import Form from './components/Form/Form'
import Filter from './components/Filter/Filter'

import './App.css';

const App = () => {

  const [data, setData] = useState([
    {id: 0, contact: 'player1', username: 'user1', ewallet: 'skrill', room: 'pokerking', vip: false},
    {id: 1, contact: 'player2', username: 'user2', ewallet: 'neteller', room: 'ggpoker', vip: false},
    {id: 2, contact: 'player3', username: 'user3', ewallet: 'ecopayz', room: 'redstar', vip: false},
  ])

  const [filterParam, setFilterParam] = useState('all')
  const [searchParam, setSearchParam] = useState('')

  const getSearchParam = (searchValue) => {
    setSearchParam(searchValue)
  }

  const getFilterParam = (param) => {
    setFilterParam(param)
  }

  const searchedItems = (arrData, searchParam) => {
    if (searchParam == '') {
      return arrData
    }

    return arrData.filter(item => {
      return item.contact.indexOf(searchParam) > -1
    })
  }

  const filteredItems = (arrData, filterParam) => {
      switch (filterParam) {
        case 'pokerking': return arrData.filter(item => item.room === 'pokerking')
        case 'vip': return arrData.filter(item => item.vip)
        case 'all': return arrData
        default: return arrData
      }
  }

  const searchedData = searchedItems((filteredItems(data, filterParam)), searchParam)

  const onVip = (id) => {
    const newData = data.map(item => {
        if (item.id === id) {
            return {...item, vip: !item.vip}
        }
        return item
    })

    setData(newData)
}

  return (
    <div className="App">
      <Header/>
      <Filter getFilterParam={getFilterParam} filterParam={filterParam} getSearchParam={getSearchParam}/>
      <ItemsList data={searchedData} setData={setData} onVip={onVip} />
      <Form data={searchedData} setData={setData}/>
    </div>
  )
}

export default App;
