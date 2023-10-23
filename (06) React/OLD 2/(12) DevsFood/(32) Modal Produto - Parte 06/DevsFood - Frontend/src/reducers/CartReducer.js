const initialState = {
   products: [],
   address: [],
   discount: 0,
   delivery: 0
};

export const CartReducer = (state = initialState, action) => {
   /*switch(action.type) {
       case 'SET_TOKEN':
           return { ...state, token: action.payload.token}
         break
       case 'SET_NAME':
           return {...state, name: action.payload.name};
         break;
   }*/

   return state;
}