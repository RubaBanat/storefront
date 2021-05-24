// const initialState = {
//     cart: [
  
//     ]
//   }
  
//   // eslint-disable-next-line import/no-anonymous-default-export
//   export default (state = initialState, action) => {
//     const { payload, type } = action;
//     switch (type) {
//       case 'ADD':
//         let cartAdd = [...state.cart];
//         if (!cartAdd.includes(payload.name)) {
//           cartAdd.push(payload.name);
//         }
//         return {cart : cartAdd};
//       // eslint-disable-next-line no-fallthrough
//       default:
//         return state;
//     }
//   }
export default (state = {cart:[],show:false}, action) => {
    const { type, payload } = action;
  
    switch (type) {
      // get all products names, if it was not added before add it to the cart and put the count to 1, else incress the count by one each time, finally return the new state
      case 'ADD':
        const products = state.cart.map(product => product.name);
        if (!products.includes(payload.name)) {
          payload.count = 1
          return {cart:[...state.cart,payload],show:true}
        }
  
        const newState = state.cart.map((product)=>{
          if(product.name === payload.name){
            product.count++
          }
          return product
        })
        return {cart:newState,show:true}
  //===============================| Extra ===============================
      // case 'CLEAR':
      //   // return {cart:[],show:true}
      //   return state
  //======================================================================
      case 'DELETE':
        // filter all cart based on the deleted product coming from payload then return it
        const newProducts = state.cart.filter(product => product.name !== payload.product.name)
        return {cart:newProducts,show:true};
  
      case 'SHOW':
        // change drawer show false or true
        return {cart:state.cart,show:payload};
  
      default:
        return state;
    }
  };
  //===========================================| Actions |===========================================
  export const addProduct = (product) => {
    return {
      type: 'ADD',
      payload: product,
    };
  };
  
  export const remoteProduct = (product) => {
    return {
      type: 'DELETE',
      payload: product,
    };
  };
  
  export const showCart = (open) => {
    return {
      type: 'SHOW',
      payload: open,
    };
  };