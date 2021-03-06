import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './home/home';
import SignIn from './authentication/login';
import Welcome from './admin/home/welcome';
import Invoices from './admin/bills/invoices';
import CreateOrganization from './admin/organization/organization';

function App() {
  return (
    <>
      <div className="container py-4">
        <header className="pb-3 mb-4 border-bottom">
            <a className="d-flex align-items-center text-dark text-decoration-none" href="/">
              <span className='fs-4'>Financial Calendar</span>
            </a>
            <a className="d-flex align-items-center text-dark text-decoration-none right" href="admin/welcome">
                <span>Enter</span>
            </a>
        </header>
          <div className="container">
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Home />}></Route>
                  <Route path="/signup" element={<SignIn />}></Route>
                  <Route path="/admin/welcome" element={<Welcome />}></Route>
                  <Route path="/admin/invoices" element={<Invoices />}></Route>
                  <Route path="/admin/organization" element={<CreateOrganization />}></Route>
                </Routes>
              </BrowserRouter>
          </div>
      </div>
    </>
  );
}

export default App;
