// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {itemDetails} = props
  const {id, currencyLogo, currencyName, euroValue, usdValue} = itemDetails
  return (
    <li className="heading-list-itemm">
      <div className="logo-container">
        <img src={currencyLogo} alt={currencyName} className="logo-image" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <p className="heading4">{usdValue}</p>
      <p className="heading4 heading5">{euroValue}</p>
    </li>
  )
}
export default CryptocurrencyItem
