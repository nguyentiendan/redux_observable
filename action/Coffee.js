import {FETCH_DATA,FETCH_DATA_SUCCESS,FETCH_DATA_FAIL}  from './constant'

export function fetchData() {
    return {
        type:FETCH_DATA
    }
}

export function fetchDataSuccess(data) {
    return {
        type:FETCH_DATA_SUCCESS,
        data,
    }
}

export function fetchDataFail() {
    return {
        type:FETCH_DATA_FAIL,
    }
}