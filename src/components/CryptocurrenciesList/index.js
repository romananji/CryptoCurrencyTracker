// Write your JS code here
import './index.css'

import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  state = {isLoading: true}

  componentDidMount() {
    this.setState({isLoadingg: false})
  }

  render() {
    const {currencyList} = this.props
    const {isLoadingg} = this.state
    return (
      <div className="cryptocurrencieslist-container">
        <h1 className="main-heading">Cryptocurrency Tracker</h1>
        {isLoadingg ? (
          ''
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
            alt="cryptocurrency"
            className="imagee"
          />
        )}
        <ul className="list-container">
          <li className="heading-list-item">
            <p className="heading1">Coin Type</p>
            <p className="heading2">USD</p>
            <p className="heading2 heading3">EURO</p>
          </li>
          {currencyList.map(each => (
            <CryptocurrencyItem key={each.id} itemDetails={each} />
          ))}
        </ul>
      </div>
    )
  }
}
export default CryptocurrenciesList
