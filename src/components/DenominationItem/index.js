// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationDetails, onUpdate} = props
  const {value} = denominationDetails

  const onDenomination = () => {
    onUpdate(value)
  }
  return (
    <li className="buttons-container">
      <button type="button" className="button" onClick={onDenomination}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
