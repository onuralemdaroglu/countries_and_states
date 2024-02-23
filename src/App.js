import React from 'react';
import './App.css';
import CountriesStates from './components/CountriesStates';
import AddCountry from './components/AddCountry';
import AddState from './components/AddState';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span style={{fontSize:'2.5rem', paddingBottom:'1rem'}}>Countries and States</span>
      </header>
        <div>
          <nav className='navbar'>
          <BrowserRouter>
          <div>
            <ul className='menu_list'>
              <li><Link to="/" style={{marginRight: 30}}>Home</Link></li>
              <li><Link to="/AddCountry" style={{marginRight: 30}}>Add Country</Link></li>
              <li><Link to="/AddState" style={{marginRight: 100}}>Add State</Link></li>
            </ul>
            </div>
            <div>
              <Routes>
                <Route path="/" element={<CountriesStates />} />
                <Route path="/AddCountry" element={<AddCountry />} />
                <Route path="/AddState" element={<AddState />} />
              </Routes>
            </div>
          </BrowserRouter>
          </nav>
        </div>
      <br />
      <br />
        <div>
          <iframe src="https://giphy.com/embed/3o7WIB00yXujVt4WEo" width="480" height="480" frameBorder="0"></iframe><p><a href="https://giphy.com/gifs/3o7WIB00yXujVt4WEo"></a></p>
        </div>
      
    </div>
  );
}

export default App;