import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainSite from './components/frontScreen/MainSite';
import NavBar from './components/navBar/NavBar';

function App() {
  return (
    <BrowserRouter>
      <div className="screen">
        <NavBar />
        <Routes>
          <Route path="/" element={<MainSite />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
