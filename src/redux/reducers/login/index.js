import actionType from '../../constant/login'

const INITIAL_STATE ={
    isloading : false ,
    data : [],
    name : '',
    email : '',
    login :  localStorage.getItem('login') ? true : false ,
    error : false ,
    storage : null 

}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case  actionType.lOG_IN:
        return {
           // ...state ,
            isLoading : true,        
        }
        
        case  actionType.lOG_IN_SUCCESS: 
        return {
            isLoading : false ,
            login : true ,
            name : action.data.firstname + '  ' + action.data.lastname ,
            email : action.data.email ,
            data : action.data.accessToken,
            storage : getLocalStoreData(action.data.accessToken,action.data)
        }
        case  actionType.lOG_IN_FAILURE: 
        return {
            isLoading : false ,
            error : true ,
            errorMsg : "Wrong user name or password "
        }

        case actionType.LOG_OUT : 
        return{
            login : false  ,
        }
        default:
            return state;  
    }

}

function getLocalStoreData(header,user) {

    localStorage.setItem('login',true)
    localStorage.setItem('header-grid-point-smart-meter',header)
    localStorage.setItem('my-user-x',(user.firstname))
    localStorage.setItem('my-user-x-lastname',(user.lastname))

}
