import {takeEvery, put} from 'redux-saga/effects';
import { ActionTypes } from './actions';
import request from '../../../network/request.js';
import {endpoints} from '../../../network/endpoints.js';

const { FETCH_PRODUCTS, FETCH_REQUEST_STARTED, FETCHED_DATA, FETCH_ERROR, FETCHED_MORE_DATA } = ActionTypes;

export default function* homePageSaga() {

    yield takeEvery(FETCH_PRODUCTS, fetchProducts);
}


function* fetchProducts(action) {
    
    // signify that api call has begun, and change the state to loading
    const {payload} = action;
    yield put( { type: FETCH_REQUEST_STARTED } );

    
    // construct the http config
    const {products : productsUrl } = endpoints;
    console.log(endpoints)

    const httpConfig = {
        url : productsUrl,
        method: 'GET',
        params : {
            q: payload.query,
            ...(payload.limit ? {limit: payload.limit} : {limit: 30}),
            ...(payload.skip && {skip: payload.skip}),
        }
    }

    // make the network call
    const {data, error} = yield request(httpConfig);

    // if the request was successful
    if (data) {

        if (payload.skip) {
            yield put( {type: FETCHED_MORE_DATA, payload: data.products});
        }
        else {
            yield put({ type: FETCHED_DATA, payload: data.products});
        }
        
    }
    // otherwise
    else if (error) {
        yield put( {type: FETCH_ERROR, payload: error});
    }
        
}