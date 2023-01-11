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

export const useProductStore = defineStore({
  id: "product",
  state: () => ({
    products: [...products] as IProduct[],
    cart: [] as IProduct[],
  }),
  getters: {
    getProductById: (state) => {
      return (productId: number) =>
        state.products.find((product) => product.id === productId);
    },

    cartItemCount(state) {
      return state.cart.length;
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

      this.cart.push(product);
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
