import './App.css'
import CardsList from './components/CardsList'
import CurrencyRatesList from './components/CurrencyRatesList'
import Header from './components/Header'
import MainWidget from './components/MainWidget'
import NewsList from './components/NewsList'

function App() {
	return (
		<>
			<Header />
			<NewsList />
			<CurrencyRatesList />
			<MainWidget />
			<CardsList />
		</>
	)
}

export default App
