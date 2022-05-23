import * as actionTypes from './actionTypes'

const userRegisterInitialState = {
    loading: false,
    error: null,
    success: false,
}

export const userRegisterReducer = (state = userRegisterInitialState, action) => {
    switch (action.type) {
        case actionTypes.USER_REGISTER_REQUEST:
            return { ...state, loading: true, error: null, success: false }

        case actionTypes.USER_REGISTER_SUCCESS:
            return { ...state, loading: false, error: null, success: true }

        case actionTypes.USER_REGISTER_FAIL:
            return { ...state, loading: false, error: action.payload, success: false }

        default:
            return state
    }
}

const userLoginInitialState = {
    loading: false,
    error: null,
    user: null,
}

export const userLoginReducer = (state = userLoginInitialState, action) => {
    switch (action.type) {
        case actionTypes.USER_LOGIN_REQUEST:
            return { ...state, loading: true, error: null }

        case actionTypes.USER_LOGIN_SUCCESS:
            return { ...state, loading: false, error: null, user: action.payload }

        case actionTypes.USER_LOGIN_FAIL:
            return { ...state, loading: false, error: action.payload }

        case actionTypes.USER_LOGOUT:
            return { ...state, user: null }

        default:
            return state
    }
}
