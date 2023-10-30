
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import AboutUs from './AboutUs';
import Registration from './Registration';

import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div >
    
                <Link to = "/Home">Home</Link>&nbsp;&nbsp;
                <Link to = "/AboutUs">About Us</Link>&nbsp;&nbsp;
                <Link to = "/Contact">Contact</Link>&nbsp;&nbsp;
                <Link to = "/Registration">Registration</Link>&nbsp;&nbsp;
                
      </div>
          <Routes>
            
                <Route path="/Home" element = {<Home />} />
                <Route path="contact" element = {<Contact />} />
                <Route path="aboutUs" element = {<AboutUs />} />
                <Route path="registration" element = {< Registration/>} />

          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
