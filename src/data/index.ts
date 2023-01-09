import { faker } from "@faker-js/faker";

const getProducts = () => {
  const productData = [];
  for (let i = 0; i < 10; i++) {
    const productItem = {
      id: faker.datatype.uuid(),
      title: faker.commerce.productName(),
      price: faker.commerce.price(),
      likeCount: faker.finance.amount(0, 1000, 0),
    };

    productData.push(productItem);
  }

  return productData;
};

const products = getProducts();

export { products };
