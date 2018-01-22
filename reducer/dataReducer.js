import {FETCH_DATA,FETCH_DATA_SUCCESS,FETCH_DATA_FAIL} from '../action/constant';

const initialState = {
    isFetching:false,
    data: [],
    error:false,
}

export default function dataReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_DATA:
            return {
                ...state,
                isFetching:true,
                data:[],
            }
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                isFetching:false,
                data: action.data,
            }   
        case FETCH_DATA_FAIL:
            return {
                ...state,
                isFetching:false,
                error:true
            }
        default:
            return state
    }        
}
