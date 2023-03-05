import {put,takeEvery} from 'redux-saga/effects'
import {descriptionType} from "@/store/action-type";
import {getProducts} from "@/api/api";
function* fetchFilterIdDescription(id){
    const data = yield getProducts()
    const filterResult = yield data.find(t=> t.id === Number(id.payload))
    yield put({
        type:descriptionType.SET_ITEM_DESCRIPTION_REDUCER,
        payload:filterResult
    })
}
function* getItemProduct(item){
    yield put({
        type:descriptionType.SET_ITEM_DESCRIPTION_REDUCER,
        payload:item.payload
    })
}

function*   itemDescriptionClick (){
    yield takeEvery(descriptionType.GET_ITEM_PRODUCT_DESCRIPTION_PAGE,getItemProduct)
    yield takeEvery(descriptionType.GET_ITEM_ID_DESCRIPTION_FILTER,fetchFilterIdDescription)
}
export default function* descriptionSaga(){
    yield itemDescriptionClick()
}