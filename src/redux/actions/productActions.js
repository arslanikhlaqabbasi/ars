import ActionType from "../constants/action-type"
export const setproduct=(product)=>{
   return{ 
    type:ActionType.SET_PRODUCT,
    payload:product,
   };

};
export const selectedproduct=(product)=>{
    return{ 
     type:ActionType.SElECTED_PRODUCT,
     payload:product,
    };
 
 };