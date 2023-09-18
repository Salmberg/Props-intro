import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




const ChildComponent = ({ onRequest }) => {
  const [currentAmount, setCurrentAmount] = useState(0);
  const [amountNeeded, setAmountNeeded] = useState(200);

  const handleRequest = () => {
    if (currentAmount < amountNeeded) {
      const remainingAmount = amountNeeded - currentAmount;
      onRequest(remainingAmount); // Begär pengar från föräldern med det aktuella beloppet
      setCurrentAmount(currentAmount + remainingAmount); // Uppdatera det aktuella beloppet
      setAmountNeeded(0); // Sätt amountNeeded till 0
    }
  }

  return (
    <div>
      <h2>Barn</h2>
      <p>Aktuellt belopp: {currentAmount} kr</p>
      <p>Behöver: {amountNeeded} kr</p>
      <button onClick={handleRequest}>Begär pengar</button>
    </div>
  )
}

const ParentComponent = () => {
  const [savings, setSavings] = useState(1000);

  const handleChildRequest = (amount) => {
    if (amount <= savings) {
      setSavings(savings - amount);
    }
  }

  return (
    <div>
      <h2>Förälder</h2>
      <p>Sparande: {savings} kr</p>
      <ChildComponent onRequest={handleChildRequest} />
    </div>
  )
}

function App() {
  return (
    <div className='App'>
      <ParentComponent />
    </div>
  )
}

export default App;
