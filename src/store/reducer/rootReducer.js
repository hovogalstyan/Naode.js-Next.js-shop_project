import {combineReducers} from "redux";
import {productReducer} from "@/store/reducer/productReducer";
import {cartReducer} from "@/store/reducer/cartReducer";
export const rootReducer = combineReducers({
   productReducer,
   cartReducer
})