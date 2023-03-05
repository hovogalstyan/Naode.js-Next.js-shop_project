import {CartType} from "@/store/action-type";

const initialState ={
    carts:null
}

export const cartReducer = (state = initialState,action)=>{
    switch (action.type) {
        case CartType.SET_CARD_REDUCER:{
            return {
                ...state,
                carts: action.payload
            }
        }
        default:{
            return state
        }
    }
}