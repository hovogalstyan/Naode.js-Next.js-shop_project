import {put,takeEvery} from 'redux-saga/effects'
import {productType} from "@/store/action-type";
import {getProducts} from "@/api/api";
function* getDataProductFetch (){
  try {
    const data = yield  getProducts()
    yield put({
      type: productType.FETCH_RECIPE_SUCCESS,
      payload:data
    })
  }catch (error) {
    yield put({
      type:productType.FETCH_RECIPE_FAIL,
      payload:error.payload
    })
  }
}


export default function* fetchProduct(){
  yield takeEvery(productType.FETCH_RECIPE_START,getDataProductFetch)
}