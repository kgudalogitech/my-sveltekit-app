import { readonly, writable } from "svelte/store"
import { cartOpen } from "./cartOpen";

let items = writable({});

export function addToCart(title, variant) {
    const productData = {title, ...variant};
    const sku = variant.sku;
    items.update((state) => {
       state[sku] = productData;
       console.log(state);
       return state;
    });
    cartOpen.set(true);
};

export function removeFromCart(sku) {
    items.update((state) => {
       delete state[sku];
       return state;
    });
};

export const cartItems = readonly(items);