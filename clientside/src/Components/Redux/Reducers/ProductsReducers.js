
const Products =[]
export const getProductsReducers = (state={Products},action)=>{
    switch(action.type){
        case "SUCCESS_GET_PRODUCTS" :
        return {Products :action.payload}
        case "FAIL_GET_PRODUCTS":
            return{error:action.payload}
            default : return state
    }

}