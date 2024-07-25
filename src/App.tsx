import './App.css'
import Calculator from './Calculator';

function App() {

  return (
    <>
      <header>
        <h1>Tip Calculator</h1>
        <p>Given the bill amount and tip percentage, this app will calculate your total bill</p>
      </header>
      <main>
        <Calculator />
      </main>
    </>
  )
}

export default App
