import { defineStore } from "pinia";
import { products } from "@/data";

interface IProduct {
  id: number;
  title: string;
  price: number;
  image: string;
  discount: number;
  likeCount: number;
  isLikedByCurrentUser: boolean;
}

interface ICartItem extends IProduct {
  count: number;
}

export const useProductStore = defineStore({
  id: "product",
  state: () => ({
    products: [...products] as IProduct[],
    cart: [] as ICartItem[],
  }),
  getters: {
    getProductById: (state) => {
      return (productId: number) =>
        state.products.find((product) => product.id === productId);
    },

    cartItemCount(state) {
      console.log("CALLING cartItemCount");
      return state.cart.reduce((acc, cartItem) => {
        console.log(cartItem.count);

        acc += cartItem.count;

        return acc;
      }, 0);
    },

    getCartItemById: (state) => {
      return (cartItemId: number) =>
        state.cart.find((cartItem) => cartItem.id === cartItemId);
    },
  },
  actions: {
    toggleLike(id: number) {
      const product = this.getProductById(id);

      if (!product) {
        return;
      }

      product.isLikedByCurrentUser = !product?.isLikedByCurrentUser;
    },

    addToCart(id: number) {
      const product = this.getProductById(id);

      if (!product) {
        return;
      }

      const cartItemIndex = this.cart.findIndex(
        (cartItem) => cartItem.id === id
      );

      if (cartItemIndex === -1) {
        this.cart.push({
          ...product,
          count: 1,
        });

        return;
      }

      this.cart[cartItemIndex].count++;
    },

    removeFromCart(id: number) {
      const product = this.getProductById(id);

      if (!product) {
        return;
      }

      this.cart = this.cart.filter((product) => product.id !== id);
    },
  },
});

/* 

    cartItems(state) {
      interface ICartItemAccumulator {
        [key: number]: IProduct;
      }

      const cartItems = state.cart.reduce((acc, product) => {
        const shouldAddNewItem = !acc[product.id];

        console.log(shouldAddNewItem);
        if (shouldAddNewItem) {
          const newCartItem = {
            ...product,
            count: 1,
          };

          acc[product.id] = newCartItem;
        } else {
          acc[product.id].count++;
        }

        return acc;
      }, {} as ICartItemAccumulator);

      console.log("from cart items -->", cartItems);
      return cartItems;
    },

    */
