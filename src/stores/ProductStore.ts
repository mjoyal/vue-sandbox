import { defineStore } from "pinia";
import { products } from "@/data";

interface IProduct {
  id: number;
  title: string;
  price: number;
  image: string;
  discount: number;
  likeCount: number;
}

export const useProductStore = defineStore({
  id: "product",
  state: () => ({
    products,
  }),
  getters: {
    getProductById: (state) => {
      return (productId: number) =>
        state.products.find((product) => product.id === productId);
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

    removeItem() {},
  },
});
