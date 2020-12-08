import actionType from "../../constant/login" ;
import Endpoint from '../../../utils/path/Endpoint';
import {getMethodById,post} from '../../../utils/query/Query'

import { takeEvery, call, put, select } from 'redux-saga/effects';

function* login(action) {
    try {
        const header = '';
        let val = action.payload 
        console.log("the value is ==="+val.user)
        const response = yield call(post,Endpoint.login,val,header)
         const data =  yield response.data;
       //  const data = dd;
         console.log(data)
         yield put({ type:  actionType.lOG_IN_SUCCESS, data });
        
    } catch (e) {
        yield put({ type:  actionType.lOG_IN_FAILURE });
       console.log(e)
    }    
}

export const loginSaga = [
      takeEvery(actionType.lOG_IN, login),
];