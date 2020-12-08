import React, { Component } from 'react';
import {Container,InputGroup,FormControl} from 'react-bootstrap';
import styles from './Textfield.style'

class TextField extends Component{

    clecked = () =>{
        alert('')
    }

    render(){

        return(
            <div>
                <InputGroup size="sm" style={{width : this.props.width}}>
                    <FormControl
                    style={{
                        borderRadius :10, 
                       backgroundColor : this.props.backcolor ,
                       height : this.props.height ,
                   
                    }}
                    placeholder={this.props.placeholder}
                    onChange = {this.props.onchange}
                    type={this.props.type}
                    value = {this.props.value}
                    disabled ={this.props.disabled}
                    />
                    
                </InputGroup>
            </div>
        ) 
    }
}

export default TextField