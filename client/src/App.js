import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Card from './pages/Card';
import Collection from './pages/Collection';
import Pricing from './pages/Pricing'
import Delivery from './pages/Delivery'

import Header from './components/Header';

function App() {
  return (
    <Router>
      <main className="app">
        <Header />
        <Routes>
          <>
            <Route path='/' element={<Home />}/>
            <Route path='/createcard' element={<Card />}/>
            <Route path='/collection' element={<Collection />}/>
            <Route path='/pricing' element={<Pricing />}/>
            <Route path='/delivery' element={<Delivery />}/>
          </>
      </Routes>
    </main>
  </Router>
  );
}

export default App;
