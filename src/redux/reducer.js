const initialState = {
    username: '',
    profile: '',
    userId: 0
}

const GET_USER = 'GET_USER';

export function getUser(username, profile, userId){
    return {
        type: GET_USER,
        payload: {username, profile, userId}
    }
}

export default function reducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case GET_USER:
            return {...state, username: payload.username, profile: payload.profile, userId: payload.userId}

        default:
            return state;
    }
}