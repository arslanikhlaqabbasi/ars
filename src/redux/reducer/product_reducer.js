import ActionType from "../constants/action-type";
const initialstate= {product:[
{id:1,
title: "arslan",
catagory:"man"}]};
export const product_reducer=(state=initialstate , {type,payload})=>{

switch(type){
    case ActionType.SET_PRODUCT:
        return state;
    default:
        return state;
}
}