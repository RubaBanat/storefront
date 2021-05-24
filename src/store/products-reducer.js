const initialState = {
  products: [
    { name: 'Iphone 12 Pro Max', category: 'Electronics', price: 800, count: 32, image: 'https://assets.swappie.com/swappie-product-iphone-12-pro-max-graphite.png' },
    { name: 'ASUS Hero 2', category: 'Electronics', price: 1000, count: 16, image: 'https://www.crownexcel.ae/wp-content/uploads/2019/11/81TKu9guqL._SL1500_.jpg' },
    { name: 'Samsung Smart TV', category: 'Electronics', price: 700, count: 16, image: 'https://images.samsung.com/is/image/samsung/levant-uhd-tu8000-ua50tu8000uxtw-frontblack-229856395?$720_576_PNG$' },
    { name: 'Pizza', category: 'Food', price: 6, count: 15, image: 'https://lh3.googleusercontent.com/proxy/5UulawJ1fMPviHA_aoCKxxlgv4cc9tFlGHDH0CQKe6BtomVH2yYPhgBac3EN8LIsP9DM-QF9rSe9ldv42HL9-iFnycfgynFY7ezZOKMcE8pR5ozYwHo1U6yv3NNSWW4' },
    { name: 'Burger', category: 'Food', price: 4, count: 45, image: 'https://pngimage.net/wp-content/uploads/2018/05/amburguesa-png.png' },
    { name: 'Ice cream', category: 'Food', price: 3, count: 11, image: 'https://www.freeiconspng.com/thumbs/ice-cream-png/fruits-ice-cream-png-1.png' },
  ]
}



// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case 'ACTIVE':
      const productsActive = initialState.products.filter((product) => {
        return product.category === payload;
      })
      return { products: productsActive };
    case 'ADD':
      // Copy state, reduce in stock of the product, if the product reach to 0 filter the products and return without finshed product
      let newProducts = { ...state }
      let index = payload.index;
      let inStock = newProducts.products[index].inStock;
      newProducts.products[index].inStock = inStock - 1

      if (inStock === 1) {
        newProducts.products = newProducts.products.filter((product) => {
          return product.inStock > 0;
        })
        return newProducts
      }
      return newProducts

    case 'DELETE':
      // reset the stock of the product and the count, if it was remove from products then add it again to the page
      let stock = payload.product.inStock
      payload.product.inStock = payload.product.inStock + payload.product.count;
      payload.product.count = 0;
      if (payload.active === payload.product.category && stock === 0) {
        return { products: [...state.products, payload.product] };
      }
      return state;

    default:
      return state;
  }
};