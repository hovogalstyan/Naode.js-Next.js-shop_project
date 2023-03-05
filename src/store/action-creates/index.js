import {CartType, descriptionType, productType} from "@/store/action-type";

export const startFetchProducts = () =>{
    return{
        type:productType.FETCH_RECIPE_START,
    }
}
export const productDescriptionItem = (item) =>{
    return{
        type:descriptionType.GET_ITEM_PRODUCT_DESCRIPTION_PAGE,
        payload:item
    }
}
export const getIdDescription=(id)=>{
    return{
        type:descriptionType.GET_ITEM_ID_DESCRIPTION_FILTER,
        payload:id
    }
}

export const startFetchCart = ()=>{
    return{
        type:CartType.START_FETCH_CARD
    }
}
export const getSearchValue =(text)=>{
    return{
        type:productType.GET_SEARCH_TEXT,
        payload:text
    }
}