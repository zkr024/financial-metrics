import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainSite from './components/frontScreen/MainSite';
import Dates from './components/details/Dates';
import Details from './components/details/Details';
import NavBar from './components/navBar/NavBar';

function App() {
  return (
    <BrowserRouter>
      <div className="screen">
        <NavBar />
        <Routes>
          <Route path="/" element={<MainSite />} />
          <Route path="/dates/:id" element={<Dates />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
