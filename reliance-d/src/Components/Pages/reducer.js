const initial=[];

export const reducer=(state=initial,action)=>{
    switch(action.type)
    {
        case "ADD":{state= [...state,action.payload]
            console.log(state)
        return state}
        case "ADDLOVE":{return [...state,action.payload]}
        case "DEL":{return state}
        default:return state
    }
}