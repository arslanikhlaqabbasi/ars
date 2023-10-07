import ActionType from "../constants/action-type"
export const setproduct=(products)=>{
   return{ 
    type:ActionType.SET_PRODUCT,
    payload:products,
   };

};
export const selectedproduct=(products)=>{
    return{ 
     type:ActionType.SELECTED_PRODUCT,
     payload:products,
    };
 
 };
 export const removeselectedproduct=(products)=>{
   return{ 
    type:ActionType.REMOVE_SELECTED_PRODUCT,
   };

};