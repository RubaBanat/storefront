import superagent from 'superagent'
const API = 'https://api-js401.herokuapp.com/api/v1/products';


const initialState = {
  products: [
    { name: 'Iphone 12 Pro Max', category: 'Electronics', price: 880, inStock: 32, image: 'https://cloudnine.shopping/ict/images/detailed/8/iphone-12-pro-max-blue-hero_67mb-9i.png' },
    { name: 'IPad Pro', category: 'Electronics', price: 1000, inStock: 5, image: 'https://www.theiphonewiki.com/w/images/thumb/9/9d/IPadPro_12.9-inch_4th_generation.png/300px-IPadPro_12.9-inch_4th_generation.png' },
    { name: 'Samsung Smart TV', category: 'Electronics', price: 700, inStock: 14, image: 'https://images.samsung.com/is/image/samsung/levant-uhd-tu8000-ua50tu8000uxtw-frontblack-229856395?$720_576_PNG$' },
    { name: 'Samsung Microwave', category: 'Electronics', price: 200, inStock: 20, image: 'https://images.samsung.com/is/image/samsung/levant-mwf300g-k3050-ms23f300eek-sg-frontblack-209973489?$720_576_PNG$' },
    { name: 'MacBook Pro', category: 'Electronics', price: 1500, inStock: 16, image: 'https://www.pngarts.com/files/4/Apple-Macbook-Pro-Download-Transparent-PNG-Image.png' },
    { name: 'Toaster', category: 'Electronics', price: 100, inStock: 25, image: 'https://pngimg.com/uploads/toaster/toaster_PNG47.png' },
  
    { name: 'Pizza', category: 'Food', price: 9, inStock: 15, image: 'https://www.pngkit.com/png/full/2-20221_pizza-png-image-pizza-seafood-png-top-view.png' },
    { name: 'Burger', category: 'Food', price: 7, inStock: 45, image: 'https://pngimage.net/wp-content/uploads/2018/05/amburguesa-png.png' },
    { name: 'Sushi', category: 'Food', price: 20, inStock: 11, image: 'https://freepngimg.com/thumb/sushi/6-2-sushi-png-image.png' },
    { name: 'Pasta', category: 'Food', price: 8, inStock: 20, image: 'https://www.pngkey.com/png/full/72-724075_italian-pasta-png-penne-pasta-png.png' },
    { name: 'Ice cream', category: 'Food', price: 5, inStock: 15, image: 'https://www.freeiconspng.com/thumbs/ice-cream-png/fruits-ice-cream-png-1.png' },
    { name: 'Cookies', category: 'Food', price: 4, inStock: 17, image: 'https://cdn.picpng.com/cookie/transparency-cookie-26900.png' },
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
        return { products: [...state.products] };
        case 'GET_P':
          initialState = payload;
          return payload;

        default:
          return state;
      }
    };

    export const getRemoteData = () => {
      return (dispatch) => {
        return superagent.get(`${API}/products`).then((response) => {
          dispatch(getProducts({ products: response.body.results }));
        });
      };
    };
    
    export const updateRemoteData = (product) => {
      return (dispatch) => {
        return superagent.put(`${API}/products/${product._id}`).send({ inStock: product.inStock - 1 }).then(() => {
          dispatch(addProduct(product));
        });
      };
    };
    
    const getProducts = (payload) => {
      return {
        type: 'GET_P',
        payload: payload,
      };
    };
    
    export const addProduct = (product) => {
      return {
        type: 'ADD',
        payload: product,
      };
    };
    
    export const resetRemoteData = (payload) => {
      return (dispatch) => {
        return superagent.put(`${API}/products/${payload.product._id}`).send({ inStock: payload.product.inStock + payload.product.count }).then(() => {
          dispatch(resetProduct(payload));
        });
      };
    };
    export const resetProduct = (payload) => {
      return {
        type: 'DELETE',
        payload: payload,
      };
    };