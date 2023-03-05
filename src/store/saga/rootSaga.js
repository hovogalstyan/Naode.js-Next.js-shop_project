import {all} from 'redux-saga/effects';
import fetchProduct from "@/store/saga/fetchProduct";
import descriptionSaga from "@/store/saga/descriptionSaga";
import addToCartSaga from "@/store/saga/addToCart";
import {filterProduct} from "@/store/saga/filterProduct";
export default function* rootSaga(){
    yield all([
       fetchProduct(),
       descriptionSaga(),
       addToCartSaga(),
       filterProduct()
    ])
}