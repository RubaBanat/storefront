const initialState = {
  products: [
    { name: 'Iphone 12 Pro Max', category: 'Electronics', price: 800, inStock: 32, image: 'https://assets.swappie.com/swappie-product-iphone-12-pro-max-graphite.png' },
    { name: 'ASUS Hero 2', category: 'Electronics', price: 1000, inStock: 5, image: 'https://www.crownexcel.ae/wp-content/uploads/2019/11/81TKu9guqL._SL1500_.jpg' },
    { name: 'Samsung Smart TV', category: 'Electronics', price: 700, inStock: 14, image: 'https://images.samsung.com/is/image/samsung/levant-uhd-tu8000-ua50tu8000uxtw-frontblack-229856395?$720_576_PNG$' },
    { name: 'Samsung Microwave', category: 'Electronics', price: 200, inStock: 20, image: 'https://images.samsung.com/is/image/samsung/levant-mwf300g-k3050-ms23f300eek-sg-frontblack-209973489?$720_576_PNG$' },
    { name: 'MacBook Pro', category: 'Electronics', price: 1500, inStock: 16, image: 'https://www.pngarts.com/files/4/Apple-Macbook-Pro-Download-Transparent-PNG-Image.png' },
    { name: 'Toaster', category: 'Electronics', price: 100, inStock: 25, image: 'https://pngimg.com/uploads/toaster/toaster_PNG47.png' },
  
    { name: 'Pizza', category: 'Food', price: 9, inStock: 15, image: 'https://lh3.googleusercontent.com/proxy/wqsz4TcS-SYk-l-JF7wG0A1zB5IieYLrzDuLPa7UWQ0ClioMJ8xMKuxX-bZGrGZ7sWjDJPdOeb4--XNHTysUiB_Xx6UD8Ek5W70ByAvjy191vFYguAmc2CaV7-KlOEVdsqVMHoXVxborCEt0gpomFg' },
    { name: 'Burger', category: 'Food', price: 7, inStock: 45, image: 'https://pngimage.net/wp-content/uploads/2018/05/amburguesa-png.png' },
    { name: 'Sushi', category: 'Food', price: 20, inStock: 11, image: 'https://freepngimg.com/thumb/sushi/6-2-sushi-png-image.png' },
    { name: 'Pasta', category: 'Food', price: 8, inStock: 20, image: 'https://www.panetteriamacarronada.com.br/images/linguine-transparent-png.png?crc=59074361' },
    { name: 'Ice cream', category: 'Food', price: 5, inStock: 15, image: 'https://www.freeiconspng.com/thumbs/ice-cream-png/fruits-ice-cream-png-1.png' },
    { name: 'Cookies', category: 'Food', price: 4, inStock: 17, image: 'https://assets.stickpng.com/thumbs/580b57fbd9996e24bc43c103.png' },
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

      state.products = state.products.map((product) => {
        if (product.name === payload.name) {
          if (product.inStock > 0) {
          
            product.inStock--;
          }
          return product;
        } else {
          return product;
        }
      });
      return { ...state };

      case 'DELETE':
        payload.product.inStock = payload.product.inStock + payload.product.count;
        payload.product.count = 0;
        if (payload.active === payload.product.category && payload.product.inStock === 0) {
          return { products: [...state.products, payload.product] };
        }
        return state;

        default:
          return state;
      }
    };