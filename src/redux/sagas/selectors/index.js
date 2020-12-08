export const getToken =  state => state.loginReducer.login ? 
'Bearer  ' + localStorage.getItem('header-grid-point-smart-meter') : 'Bearer  ' + state.loginReducer.data