import {useState} from 'react';
import Header from './components/Header/Header'
import ItemsList from './components/ItemsList/ItemsList'
import Form from './components/Form/Form'
import Filter from './components/Filter/Filter'

import './App.scss';

const App = () => {

  const [data, setData] = useState([
    {id: 0, contact: 'live:54sdcvsd5c', username: 'raging-potato', ewallet: 'skrill', room: 'pokerking', vip: false},
    {id: 1, contact: '@alex_wpd', username: 'ivan777', ewallet: 'neteller', room: 'ggpoker', vip: false},
    {id: 2, contact: 'tinny@cbx.com', username: 'luckyAce', ewallet: 'ecopayz', room: 'redstar', vip: false},
  ])

  const [filterParam, setFilterParam] = useState('all')
  const [searchParam, setSearchParam] = useState('')

  const usersAmount = data.length
  const vipUsersAmount = data.filter(items => items.vip).length

  const searchedItems = (arrData, searchParam) => {
    if (searchParam === '') {
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

  return (
    <div className="app">
      <Header usersAmount={usersAmount} vipUsersAmount={vipUsersAmount}/>
      <Filter setFilterParam={setFilterParam} filterParam={filterParam} setSearchParam={setSearchParam}/>
      <ItemsList data={searchedData} setData={setData} />
      <Form data={searchedData} setData={setData}/>
    </div>
  )
}

export default App;
