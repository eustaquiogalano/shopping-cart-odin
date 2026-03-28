export default function addToCart(productID, productList) {
  // Returns a new list of products from
  // mapping this array
  return productList.map((product) => {
    if (product.id === productID) {
      return { ...product, addedToCart: true, quantity: 1 };
    }
    return product;
  });
}
