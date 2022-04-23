import Types from "./action-types"
import axios from 'axios';
import constants from "../Constants/constants";
const exceptionHandler = (res) => ({
    type: Types.EXCEPTION_HANDLER,

})
const createUser = () => ({
    type: Types.CREATE_USER,

});
const nullifyService = () => ({
    type: Types.NULLIFY_SERVICE,
})
const loginRequest = (payload) => {
    return function (dispatch) {
        // axios.post(constants.api.siginin,payload)
        //     .then((response) => 
        dispatch({ type: Types.LOGIN_SUCCESS })
        // )
        // .catch((res) => dispatch(exceptionHandler(res)))
    }
}
const getUsersList = () => {
    return function (dispatch) {
        axios.get(constants.api.getUsersData)
            .then((response) => dispatch({ type: Types.GET_USERS_LIST, payload: response.data }))
            .catch((res) => dispatch(exceptionHandler(res)))
    }
}
//add and update users list
const addAndUpdateUsers = (data, type) => {
    if (type == 'update') {
        return function (dispatch) {
            dispatch({ type: Types.START_LOADING })
            axios.post(constants.api.updateUSer, data, constants.header)
                .then(res => {
                    dispatch({ type: Types.STOP_LOADING })
                    dispatch({ type: Types.ADD_AND_UPDATE_USER, payload: res.data })
                    console.log('res',res)
                    if (res.data.status == 'success') {
                        dispatch(getUsersList())
                    }
                })
                .catch(res => dispatch(exceptionHandler(res)))
        }
    } else {
        return function (dispatch) {
            dispatch({ type: Types.START_LOADING })
            axios.post(constants.api.addUpdateOfUser, data, constants.header)
                .then(res => {
                    dispatch({ type: Types.ADD_AND_UPDATE_USER, payload: res.data })
                    if (res.data.status == 'success') {
                        dispatch({ type: Types.STOP_LOADING })
                        dispatch(getUsersList())
                    }
                })
                .catch(res => dispatch(exceptionHandler(res)))
        }
    }

}
const editUsers = (data) => {
    return function (dispatch) {
        axios.get(constants.api.editUser + `/${data}`)
            .then(res => dispatch({ type: Types.EDIT_USER, res: res.data }))
            .catch(res => dispatch(exceptionHandler(res)))
    }
}
const deleteUsers = (data) => {
    return function (dispatch) {
        axios.get(constants.api.deleteUser + `/${data}`)
            .then(res => {
                dispatch({ type: Types.DELETE_USER, payload: res.data })
                console.log()
                if (res.data.status == 'success') {
                    dispatch(getUsersList())
                }
            })
            .catch(res => dispatch(exceptionHandler(res)))
    }
}

const signUpUsers = (data) => {
    return function (dispatch) {
        axios.post(constants.api.signUp, data)
            .then((response) => {
                console.log(response)
            })
            .catch((err) => console.log(err))
    }
}
const getFloorsList = () => {
    return function (dispatch) {
        axios.get(constants.api.getFloorsList)
            .then((response) => dispatch({ type: Types.GET_FLOORS_LIST, payload: response }))
            .catch((err) => console.log(err))
    }
}
const AddorUpdateFloor = (data) => {
    return function (dispatch) {
        axios.post(constants.api.createFloor, data)
            .then((response) => {
                console.log(response.data.status)
                dispatch({ type: Types.ADD_AND_UPDATE_FLOOR_LIST, payload: response.data })
             
                if (response.data.status == 'success') {
                    getFloorsList()
                }
            })
            .catch((err) => console.log(err))
    }
}
const deleteFloorById = (id) => {
    return function (dispatch) {
        axios.get(constants.api.deleteFloor + `/${id}`)
            .then((response) => {
                dispatch({ type: DELETE_FLOOR, response: response.data })
            })
            .catch((res) => alert("exception"))
    }
}
export {
    loginRequest,
    getUsersList,
    addAndUpdateUsers,
    editUsers,
    deleteUsers,
    createUser,
    nullifyService,
    signUpUsers,
    getFloorsList,
    AddorUpdateFloor,
    deleteFloorById

}