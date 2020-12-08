import React , {Component} from 'react';
import Button from 'react-bootstrap/Button';
import styles from './Button.style'

class GridButton extends Component {

    render(){
        return(

            <div>
                <Button variant={this.props.variant} style={{...styles.button,width : this.props.width,
                height : this.props.height,color:this.props.color}} block 
                onClick={this.props.onclick}>{this.props.text}</Button>
            </div>
        )
    }
}

export default GridButton