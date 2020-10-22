
import * as types from './categories.types'
const initialState={
    categories:[],
    loading:false,
    uploadSuccess:false,
    error:false,
    errorMessage:""

}

const categories = (state= initialState, action) => {
    switch (action.type) {
        case types.RECEIVED_CATEGORIES:
            return  {
                ...state,
                error: false,
                loading: false,
                categories: action.categories
            }
        case types.LOADING_CATEGORY:
            return  {
                ...state,
                error: false,
                loading: true,
                uploadSuccess: false
            }
        case types.UPLOAD_SUCCESS:
            return  {
                ...state,
                error: false,
                loading: false,
                uploadSuccess: true
            }
        case types.ERROR:
            return {
                ...state,
                error: true,
                loading: false,
                uploadSuccess: false,
                errorMessage: action.error
            }
        default:
            return state
    }
};




export default categories