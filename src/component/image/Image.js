import React , {Component} from 'react' ;

class CaptureImage extends Component{
    render(){
        return(
            <img src={this.props.src} onClick={this.props.onclick}
            style={{width : this.props.width ,height : this.props.height, resizeMode : 'cover'}}>
            </img>
        )
    }
}
export default CaptureImage
