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
  getters: {},
  actions: {
    toggleLike() {},

    removeItem() {},
  },
});
