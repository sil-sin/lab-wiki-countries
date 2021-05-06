import './App.css';
import { Route } from 'react-router';
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'

function App() {
  return (
    <div className="App">

      <div className="navbar"><Navbar /></div>
      <div className='boxes'>
        <div className='container'>
          <CountriesList />
        </div>
        <div className='container'>
          <h2>Country Details</h2>
          <Route exact path={'/country/:id'} component={CountryDetails} />
        </div>
      </div>

    </div>
  );
}

export default App;
