import { Outlet, Link } from "react-router-dom";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import './index.css';
import BasicExample from "./routes/Navbar";

import HodgeAutoCenter from "./routes/HodgeAutoCenter";
import Aboutus from "./routes/Aboutus";
import Infraserv from "./routes/Infraserv";
import Hse from "./routes/Hse";
import Ourpeople from "./routes/Ourpeople";
import Premier from "./routes/Premier";
import Whocanwork from "./routes/Whocanwork"
import Career from "./routes/Career"
import Temaru from "./routes/Temaru";
import Carousel from "./routes/Carousel";
import Infraservservices from "./routes/Infraservservices";
import Hodgeservices from "./routes/Hodgeservices";
import Premierservices from "./routes/Premierservices";
import Contact from "./routes/Contact";

import UncontrolledExample from "./routes/Carousel";
import Localcontent from "./routes/Localcontent"
import Footer from "./routes/Footer";
import Hodgebusiness from "./routes/Hodgebusiness";
import Infraservbusiness from "./routes/Infraservbusiness";
import Premierbusiness from "./routes/Premierbusiness";
import Container from 'react-bootstrap/Container';
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';





export default function App() {
  return (
    <div>

      <BasicExample />
      <Routes>
        <Route path='/' element={<Carousel/>}/>
        <Route path="HodgeAutoCenter" element={<HodgeAutoCenter />} />
        <Route path="Aboutus" element={<Aboutus />} />
        <Route path="Infraserv" element={<Infraserv />} />
        <Route path="Hse" element={<Hse />} />
        <Route path="Ourpeople" element={<Ourpeople />} />
        <Route path="Premier" element={<Premier />} />
        <Route path="Whocanwork" element={<Whocanwork />} />
        <Route path="Career" element={<Career />} />
        <Route path="Infraservservices" element={<Infraservservices />} />
        <Route path="Hodgeservices" element={<Hodgeservices />} />
        <Route path="Premierservices" element={<Premierservices />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Localcontent" element={<Localcontent />} />
        <Route path="Hodgebusiness" element={<Hodgebusiness />} />
        <Route path="Infraservbusiness" element={<Infraservbusiness />} />
        <Route path="Premierbusiness" element={<Premierbusiness />} />







      </Routes>

        <Footer />
    </div>

  );
}
