import React , {Component} from  'react' ;
import { Link } from 'react-router-dom';
import {Navbar,Nav,NavDropdown,Container,Button} from 'react-bootstrap';
import {connect} from 'react-redux' ;
import Navi from '../navigation';
import styles from './Layout.style';
import Login from '../../pages/login/Login';
import {logout} from '../../redux/action/login'


class Layout extends  Component {
    constructor(props){
       super(props)
       this.state = {

    }
    }

    logout = () =>{
        localStorage.clear()
        this.props.logout()
       // this.props.history.push('/cart')
       
    }

    render(){
        console.log(this.props.login)
        return(
            <div>
            {
                this.props.login ? 
                <Container>
                <Navbar collapseOnSelect expand="lg"  style={styles.container}  variant="light">
                    <Navbar.Brand as={Link} to="/"  style={styles.white}>SmartGridSystem</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="mr-auto" style={styles.white}>
                        <NavDropdown   title="Grid Navigation" id="collasible-nav-dropdown" >
                            <NavDropdown.Item as={Link} to="/topology" >Topology</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/energy">Energy Balance</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.3" >Voltage</NavDropdown.Item>
                           
                        </NavDropdown>
                        <NavDropdown title="Device Details" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Load Profile</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.2">Events</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.3">Instantaneous Data</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.1">Billing </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.2">Polling</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.3">Meter Locations</NavDropdown.Item>
                            
                        </NavDropdown>
                        </Nav>
                        <Nav>
                        <NavDropdown title="My Account" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Edit </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick = {this.logout}>Log out</NavDropdown.Item>
                           
                           
                        </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>
                    <Navi/> 
                    </Container>  : <Login />
            } 
                
            </div>
        )
    }
}

function mapStateToProps(state) {
	return {
       // courseData:state
        login : state.loginReducer.login,   
	};
}
function mapDispatchToProps(dispatch) {
	return {
        logout : () =>{
            dispatch(logout())
        }
	};
}
export default connect(mapStateToProps, mapDispatchToProps)(Layout) ;