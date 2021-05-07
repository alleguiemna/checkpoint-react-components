// eslint-disable-next-line
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faAddressBook, faCamera } from '@fortawesome/free-solid-svg-icons';
import "./App.css";
import Address from "./components/Profile/address/Address";
import FullName from "./components/Profile/fullname/FullName";
import ProfilePhoto from "./components/Profile/profilephoto/ProfilePhoto";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Navbar className="header" bg="dark" variant="dark">
          <Navbar.Brand href="#home"><FontAwesomeIcon icon={faHome}/>Profile</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home"><a href="#ProfilePhoto.js"><FontAwesomeIcon icon={faCamera}/>Profile photo</a></Nav.Link>
            <Nav.Link href="#features"><a href="#FullName.js"><FontAwesomeIcon icon={faUser}/>Full name</a></Nav.Link>
            <Nav.Link href="#pricing"><a href="Address.js"><FontAwesomeIcon icon={faAddressBook }/>Address</a></Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          </Form>
        </Navbar>
      </div>
      <div className="main">
        <div id="Profile photo">
        <ProfilePhoto />
        </div>
        <div id="Full Name">
        <FullName />
        </div>
        <div id="Address">
        <Address />
        </div>
        
        
        </div>
      <div className="container">  
        <Navbar className="footer" bg="dark" variant="dark">
          <Navbar.Brand>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="https://www.mdbootstrap.com"> Components React.com </a>
          </Navbar.Brand>
        </Navbar>
      </div>
    </div>
  );
}

export default App;
