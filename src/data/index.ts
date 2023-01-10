import { faker } from "@faker-js/faker";
import backpack from "../assets/images/backpack.jpeg";
import candle from "../assets/images/candle.jpeg";

import cloth from "../assets/images/cloth.jpeg";
import curology from "../assets/images/curology.jpeg";
import foundation from "../assets/images/foundation.jpeg";
import hempOil from "../assets/images/hemp-oil.jpeg";
import lamp from "../assets/images/lamp.jpeg";
import  nike from "../assets/images/nike.jpeg";
import poetry from "../assets/images/poetry.jpeg";
import record from "../assets/images/record.jpeg";

const getProducts = () => {
  const productData = [];
  for (let i = 0; i < 25; i++) {
    const productItem = {
      id: faker.datatype.uuid(),
      image: faker.image.imageUrl(250, 350, "product", true),
      title: faker.commerce.productName(),
      price: faker.commerce.price(),
      likeCount: faker.finance.amount(0, 1000, 0),
    };

    productData.push(productItem);
  }

  return productData;
};

const products = [
  {
    id: 1,
    title: "Organic Sponge Cloths",
    price: 30,
    image: cloth,
    discount: 20,
    likeCount: 401,
    isLikedByCurrentUser: false,
  },
  {
    id: 2,
    title: "Retro Record Player",
    price: 379,
    image: record,
    discount: 0,
    likeCount: 430,
    isLikedByCurrentUser: true,
  },
  {
    id: 3,
    title: "Milk & Honey Poetry",
    price: 27,
    image: poetry,
    discount: 0,
    likeCount: 244,
    isLikedByCurrentUser: true,
  },
  {
    id: 4,
    title: "Pastel Nike",
    price: 289,
    image: nike,
    discount: 0,
    likeCount: 102,
    isLikedByCurrentUser: false,

  },
  {
    id: 5,
    title: "Wavy Globe Lamp",
    price: 359,
    image: lamp,
    discount: 15,
    likeCount: 145,
    isLikedByCurrentUser: false,

  },
  {
    id: 6,
    title: "Biglow Foundation",
    price: 35,
    image: foundation,
    discount: 10,
    likeCount: 59,
    isLikedByCurrentUser: true,
  },
  {
    id: 7,
    title: "Curology Duo",
    price: 79,
    image: curology,
    discount: 0,
    likeCount: 87,
    isLikedByCurrentUser: false,

  },
  {
    id: 8,
    title: "Leather Napsack",
    price: 189,
    image: backpack,
    discount: 0,
    likeCount: 126,
    isLikedByCurrentUser: false,

  },
  {
    id: 9,
    title: "Organic Lavender Candle",
    price: 30,
    image: candle,
    discount: 0,
    likeCount: 346,
    isLikedByCurrentUser: false,

  },
  {
    id: 10,
    title: "Organic Hemp Seed Oil",
    price: 30,
    image: hempOil,
    discount: 10,
    likeCount: 419,
    isLikedByCurrentUser: true,

  },
];


export { products };
