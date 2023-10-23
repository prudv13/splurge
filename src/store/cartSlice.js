import { createSlice } from "@reduxjs/toolkit";

const fetchFromLocalStorage = () => {
    const cart = localStorage.getItem('cart');
    if(cart){
        return JSON.parse(localStorage.getItem('cart'));
    }
    else{
        return [];
    }
};

const storeInLocalStorage = (data) => {
    localStorage.setItem('cart', JSON.stringify(data));
};

const initialState = {
    carts: fetchFromLocalStorage(),
    itemsCount: 0,
    totalAmount: 0,
    isCartMessageOn: false
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const isItemInCart = state.carts.find(item => item.id === action.payload.id);
            if(isItemInCart){
                const tempCart = state.carts.map(item => {
                    if(item.id === action.payload.id){
                        const tempQty = item.quanity + action.payload.quantity;
                        const tempTotalPrice = tempQty*item.price;

                        return{
                            ...item,
                            quantity: tempQty,
                            totalPrice: tempTotalPrice
                        }
                    }
                    else{
                        return item;
                    }
                });

                state.carts = tempCart;
                storeInLocalStorage(state.carts);
            }
            else{
                state.carts.push(action.payload);
                storeInLocalStorage(state.carts);
            }
        },
        setCartMessageOn: (state) => {
            state.isCartMessageOn = true;
        },
        setCartMessageOff: (state) => {
            state.isCartMessageOn = false;
        }
    }
});

export const {addToCart, setCartMessageOff, setCartMessageOn} = cartSlice.actions;
export const getCartMessageStatus = (state) => state.cart.isCartMessageOn;
export default cartSlice.reducer;