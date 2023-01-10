import { faker } from "@faker-js/faker";

const getProducts = () => {
  const productData = [];
  for (let i = 0; i < 25; i++) {
    const productItem = {
      id: faker.datatype.uuid(),
      image: faker.image.imageUrl(250, 350, "accessories", true),
      title: faker.commerce.productName(),
      price: faker.commerce.price(),
      likeCount: faker.finance.amount(0, 1000, 0),
    };

    console.log(productItem)

    productData.push(productItem);
  }

  return productData;
};

const products = getProducts();

export { products };
