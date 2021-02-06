import * as api from '../api';

//Action creators - functions that return actions
export const getPosts = () => async(dispatch) => {

    try {
        const { data, status, statusText } = await api.fetchPosts();

        if(!(status >= 200 && status < 300)) {
            throw new Error(statusText);
        }

        dispatch({type: 'FETCH_ALL', payload: data});
    } catch (err) {
        console.log(err.message);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);

        dispatch({ type: 'CREATE', payload: data});
    } catch (err) {
        console.log(err.message);
    }
}