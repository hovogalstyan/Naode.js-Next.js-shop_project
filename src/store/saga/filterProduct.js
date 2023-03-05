import {put,takeEvery,select} from 'redux-saga/effects'
import {productType} from "@/store/action-type";
import {getProducts} from "@/api/api";
function* searchTextValue(text){
    const data = yield getProducts()
    const result = data.filter((item)=>item.name.toLowerCase().includes(text.payload.toLowerCase()))
    yield put({
        type:productType.FETCH_RECIPE_SUCCESS,
        payload:result
    })
}
export function* filterProduct(){
  yield takeEvery(productType.GET_SEARCH_TEXT,searchTextValue)
}