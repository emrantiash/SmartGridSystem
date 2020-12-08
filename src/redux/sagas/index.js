import { all } from 'redux-saga/effects';
import { loginSaga } from './login/index' ;


export default function* rootSaga() {
    yield all([
        ...loginSaga ,
        
    ])
}