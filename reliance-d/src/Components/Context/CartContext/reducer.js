const reducer = (state,action) =>{
    switch (action.type){
        case "ADD_TO_CART":{
            return [...state, action.payload]
        }
        case "REMOVE_FROM_CART":{
            const cartAfterItemRemoval = state.filter(
                (item)=> item.id!==action.payload
            );
            return cartAfterItemRemoval;
        }

        case "CHECKOUT":{
            return [];
        }

        default:{
            return state;
        }
    }
}

export default reducer