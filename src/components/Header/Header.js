import './header.scss';

const Header = ({data}) => {

    const usersAmount = data.length
    console.log(usersAmount);
    const vipUsersAmount = data.filter(items => items.vip).length

    return (
        <div className="header">
            <h2>React hook useState app</h2>
            <div className='header-item'>Total users: {usersAmount}</div>
            <div className='header-item'>Total VIP users: {vipUsersAmount}</div>
        </div>
    )
}

export default Header