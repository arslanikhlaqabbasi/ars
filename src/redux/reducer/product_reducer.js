import ActionType from "../constants/action-type";
const initialstate= {products:[]};
export const product_reducer=(state=initialstate , {type,payload})=>{

switch(type){
    case ActionType.SET_PRODUCT:
        return {...state, products:payload};
    default:
        return state;
}
};

export const selectedProductReducer=(state={} , {type,payload})=>{

    switch(type){
        case ActionType.SELECTED_PRODUCT:
            return {...state, ...payload};
            case ActionType.REMOVE_SELECTED_PRODUCT:
                return {};
        default:
            return state;
    }
    };