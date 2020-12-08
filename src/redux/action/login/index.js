import actionType from '../../constant/login'

export function login(data){
    console.log("action")
    return{
        type : actionType.lOG_IN,
        payload : data 
    }
}

export function logout(){
    return{
        type : actionType.LOG_OUT
    }
}

export function meterLogin(data){
    return{
        type : actionType.LOG_IN_METER_INFO,
        payload : data 
    }
}
