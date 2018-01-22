import { FETCH_DATA,FETCH_DATA_SUCCESS } from '../action/constant'
import { fetchDataSuccess, fetchDataFail } from '../action/Coffee'
import getAllCoffee from '../api/Coffee_api'


import 'rxjs'
import { Observable } from 'rxjs/Observable'
import { ajax } from 'rxjs/observable/dom/ajax';


function fetchCoffeeEpic(action$) {
    return action$
      .ofType(FETCH_DATA)
        .mergeMap( action => 
          ajax.getJSON(`http://localhost:3000/api/CoffeeShops`)
            .map( (response) => fetchDataSuccess(response) )
            .catch( error => Observable.of(fetchDataFail()) )     
        );    
}

export default fetchCoffeeEpic

