import {descriptionType, productType} from "@/store/action-type";

const initialState ={
    products:[],
    descriptions:undefined,
    loading:false,
    error:null
}

export const productReducer =(state = initialState,action)=>{
    switch (action.type){
        case productType.FETCH_RECIPE_START:{
            return {
                ...state,
                loading: true
            }
        }
        case productType.FETCH_RECIPE_SUCCESS:{
            return {
                ...state,
                loading: false,
                products: action.payload
            }
        }
        case productType.FETCH_RECIPE_FAIL:{
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }
        case descriptionType.SET_ITEM_DESCRIPTION_REDUCER:{
            return {
                ...state,
                descriptions: action.payload
            }
        }
        default:{
            return state
        }
    }
}