import styleSheet from '../../component/style';

const  styles = {

    container : {
        marginTop : 0,
        width : '100%',
        backgroundColor :  styleSheet.color.blue,
        height : '100vh',
       // margin : 'auto',
        display : 'flex',
        justifyContent  : 'center',
        alignItems : 'center' ,
       // flexDirection : 'column',
        
    },

    coverid : {
         display : 'flex',
        alignItems : 'center',
        flexDirection : 'column',
        backgroundColor : styleSheet.color.white, //,'#8bb7f0',
        height : 400,
        width : 300,
        border: '0px solid white',
        borderTopRightRadius : 10 ,
        borderTopLeftRadius : 10 ,
        borderBottomRightRadius : 10 ,
        borderBottomLeftRadius : 10 ,
        borderRightColor: styleSheet.color.loginborder,
        borderBottomColor  : styleSheet.color.loginborder,
        borderTopColor : '#28a74587',
        borderLeftColor : '#28a74587'
    },
  
    content :  {
         width : '70%',
         marginBottom  : 10 ,
},
   
    text : {
        color : styleSheet.color.red,
        fontFamily : styleSheet.font.roboto,
        fontSize : 11 
    },
    

}

export default styles 