import {put, takeEvery} from 'redux-saga/effects'
import {getCart} from "@/api/api";
import {CartType} from "@/store/action-type";

function* getCardFetch() {
    const data = yield getCart()
    yield put({
        type:CartType.SET_CARD_REDUCER,
        payload:data
    })
}

export default function* addToCartSaga() {
    yield takeEvery(CartType.START_FETCH_CARD, getCardFetch)
}