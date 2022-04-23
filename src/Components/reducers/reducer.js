
import Types from "../actions/action-types";

const initialState = {
   isLoading: false,
   items: [],
   hasError: false,
   geteditUser: { userName: '', firstName: '', lastName: '', userType: '', email: '', phoneNo: '' },
   addUserStatus: '',
   addUserMsg: ''
};
const reducers = (state = initialState, action) => { //es6 arrow function
   switch (action.type) {
      case 'LOGIN_SUCCESS':
         //  console.log(action.payload)
         //  if(action.payload.status=='success'){
         sessionStorage.userName = 'hhh'
         window.location.href = '/users'
         //  } 
         return {
            ...state
         }
      case Types.GET_USERS_LIST:
         console.log(action.payload)
         return {
            ...state,
            getUsersDetails: action.payload.users
         }
      case Types.ADD_AND_UPDATE_FLOOR_LIST:
         console.log(action)
         return {
            ...state,
            addUserStatus: action.payload.status,
            addUserMsg: action.payload.message
         }
      case Types.ADD_AND_UPDATE_USER:
         console.log(action);
         return {
            ...state,
            addUserStatus: action.payload.status,
            addUserMsg: action.payload.message
         }
      case Types.EDIT_USER:
         let user = action.res.user;
         user.phno = Number(user.phno)
         return {
            ...state,
            geteditUserDetails: user
         }
      case Types.DELETE_USER:
         return {
            ...state,
            addUserStatus: action.payload.status,
            addUserMsg: action.payload.message
         }
      case Types.CREATE_USER:
         console.log(action.payload)
         return {
            ...state,
            geteditUserDetails: state.geteditUser,
            deleteUserStatus: action.payload.status,
            deleteUserMsg: action.payload.message
         }
      case Types.NULLIFY_SERVICE:
         return {
            ...state,
            addUserStatus: '',
            addUserMsg: '',
            deleteUserStatus: '',
            deleteUserMsg: ''
         }
      case Types.GET_FLOORS_LIST:
         console.log(action.payload.data.floorsList)
         return {
            ...state,
            getfloorDetails: action.payload.data.floorsList
         }
      case Types.DELETE_FLOOR:
         return {
            ...state,

         }
      case Types.START_LOADING:
         return {
            ...state,
            isLoading: true
         }
      case Types.STOP_LOADING:
         return {
            ...state,
            isLoading: false
         }
      default:
         return state;
   }
}
export default reducers;