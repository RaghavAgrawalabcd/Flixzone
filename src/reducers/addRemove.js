const initialState = {
    basket: [],
    user: null,
    s: false,
}
export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0);

const Basket = (state = initialState, action) => {
    switch ((action.type)) {
        case "add": return { ...state, basket: [...state.basket, action.item], }
        case "remove":
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)
            let newBasket = [...state.basket];
            if (index >= 0) {
                newBasket.splice(index, 1);
            }
            else {
                console.warn(` Can't remove the product (id: ${action.id}) as its not in basket!`)
            }
            return { ...state, basket: newBasket }
        case "Set_User":
            return {
            ...state,
            user: action.user    
            }
        case "LOGIN": return{...state, s: true} ;
        case "LOGOUT": return{...state, s: false};
        default: return state 
    }
}
export default Basket;