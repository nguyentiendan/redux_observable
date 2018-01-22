export function getAllCoffee() {
    return  "http://localhost:3000/api/CoffeeShops";
}

/*
const { ajax } = Rx.Observable;

const FETCH_USER = 'FETCH_USER';
const FETCH_USER_FULFILLED = 'FETCH_USER_FULFILLED';

const fetchUser = username => ({ type: FETCH_USER, payload: username });
const fetchUserFulfilled = payload => ({ type: FETCH_USER_FULFILLED, payload });

const fetchUserEpic = action$ =>
  action$.ofType(FETCH_USER)
    .mergeMap(action =>
      ajax.getJSON(`https://api.github.com/users/${action.payload}`)
        .map(response => fetchUserFulfilled(response))
    );

const users = (state = {}, action) => {
  switch (action.type) {
    case FETCH_USER_FULFILLED:
      return {
        ...state,
        // `login` is the username
        [action.payload.login]: action.payload
      };

    default:
      return state;
  }
};
*/