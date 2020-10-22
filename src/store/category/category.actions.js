
import * as types from './categories.types'

export const uploadCategory = (formData) => (dispatch) => {
    dispatch({type: types.LOADING_CATEGORY});
    axios
        .post(API_ROOT + 'categories/', formData)
        .then((res) => {
            dispatch({ type: types.UPLOAD_SUCCESS});
            console.log("postRes-", res)
        })
        .catch((err) => {
            dispatch({ type: types.ERROR, error:err });
            console.log(err)
        });
};











// after recieving categories
const receivedInitialCategories = ( categories) => ({
    type: types.RECEIVED_CATEGORIES,
    categories,
    recievedAt:Date.now()
})

export const getCategories = () => async (dispatch) => {
    try {
        dispatch({ type: types.LOADING_CATEGORY });
        const response =await  ApiGetCategories()
        dispatch(receivedInitialCategories( response))
    }catch (e) {
        dispatch({ type: types.NETWORK_ERRORS, e });
    }
}

async function ApiGetCategories() {

    let query = gConsts.API_ROOT+`categories/`
    // const res = await fetch(query)

    const res = await fetch(query);
    return await res.json()
}