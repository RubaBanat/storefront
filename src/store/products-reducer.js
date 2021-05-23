const initialState = {
    products: [
      { name: 'Iphone 12 Pro Max', category: 'Electronics', price: 800, count: 32, image :'https://assets.swappie.com/swappie-product-iphone-12-pro-max-graphite.png'},
      { name: 'ASUS hero2', category: 'Electronics', price: 1000, count: 16 , image: 'https://www.crownexcel.ae/wp-content/uploads/2019/11/81TKu9guqL._SL1500_.jpg'},
      { name: 'Samsung Smart TV', category: 'Electronics', price: 700, count: 16, image : 'https://images.samsung.com/is/image/samsung/levant-uhd-tu8000-ua50tu8000uxtw-frontblack-229856395?$720_576_PNG$'},
      { name: 'Pizza', category: 'Food', price: 5, count: 15, image:'https://www.glutenfreepalate.com/wp-content/uploads/2018/08/Gluten-Free-Pizza-3.2-480x360.jpg'},
      { name: 'Burger', category: 'Food', price: 3, count: 45, image : 'https://s3.envato.com/files/314492559/Double%20burger%20with%20french%20fries%20on%20white%20background.jpg'},
      { name: 'Ice cream', category: 'Food', price: 2, count: 11, image : 'https://littlefaifo.com/wp-content/uploads/2021/03/ourstory_012-6.jpg'},
    ]
  }
  
  
  // eslint-disable-next-line import/no-anonymous-default-export
  const productsReducer = (state = initialState, action) => {
     let { type, payload } = action;
  switch (type) {
    case 'ACTIVE':
      let product = state.products.filter((product) =>
        product.category === payload ? product.category : null
      );
      return { ...state, product: product };
    default:
      return state;
  }
};
  
  export default productsReducer;

  