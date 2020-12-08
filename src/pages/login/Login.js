import React , {Component} from 'react' ;
import {connect} from 'react-redux' ;
import TextField from '../../component/textfield/Textfield' ;
import GridButton from '../../component/button/Button' ;
import CaptureImage from '../../component/image/Image' ;
import styles from './Login.style';
import {login} from '../../redux/action/login'

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            username : "",
            text : "",
            password : ""
        }
    }

    componentDidMount(){
        localStorage.clear()
    }

    handleEmailChange = (e) =>{
        let value = e.target.value ;
        this.setState({
            text : "",
            username : value 
        })
    }

    password = (e) =>{
        let value = e.target.value ;
        this.setState({
            text : "",
            password : value 
        })
    }

    makeLogin = () =>{
        console.log("come here")
        let user = this.state.username ;
        let pass = this.state.password ;

        let option = {
            email : user ,
            password : pass
        }
        if(this.state.username !== '' && this.state.password !== ''){
            console.log("this")
            this.props.login(option)
        }
        
        else 
        {
            this.setState({
                text :"Fill All the field "
            })
        }
        

    }



    render(){
        console.log(this.state.username)
        return(
            <div>
                <div  style={styles.container}>
                <div style={styles.coverid}>

                <div style={{background : 'transparent',marginBottom : 40 }}>
                <img src="https://img.icons8.com/fluent/140/000000/sign-in-form-password.png"/>
                </div>
                <div style={styles.content}>
                 <div style={styles.text}> {this.state.text} </div>
                </div>
                <div style={styles.content}>
                <TextField 
                placeholder = "Enter User Name"
                width  = {'100%'}
                onchange = {this.handleEmailChange}
                />
                </div>

                <div style={styles.content}>
                <TextField 
                type = "password"
                placeholder = "Enter Password"
                width  = {'100%'}
                onchange = {this.password}
                />
                </div>
                <div style={styles.content}>
                <GridButton
                variant = {"success"}
                text = "Log In"
                height = {35}
                width  = {'100%'}
                onclick = {this.makeLogin}
                />
                
               </div>
                
                
               </div>
            </div>
            </div>

        )
    }
}
function mapStateToProps(state) {
	return {

        flag : state.loginReducer.flag,
        isloading : state.loginReducer.isloading
       
	};
}
function mapDispatchToProps(dispatch) {
	return {
        login : (val) =>{
             dispatch(login(val))
           }
            
	};
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)