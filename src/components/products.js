import { connect } from 'react-redux';
import { If } from 'react-if'
import { makeStyles } from '@material-ui/core/styles';
import { addProduct } from '../store/cart-reducer'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const mapStateToProps = (state) => {
  return { products: state.products.products, active: state.categories.active };
};
const mapDispatchToProps = { addProduct };


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    width:'60%',
    margin:'auto',
    borderRadius:'20px',
    boxShadow:' rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;',
    color: theme.palette.text.primary,
  },
  container: {
    marginTop: '50px',
    marginBottom: '30px'
  },
  containerBtn: {
    marginTop: '30px'
  },
  image: {
    position: 'relative',
    height: 160,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', 
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  }
}));

const Products = (props) => {
  const classes = useStyles();
  return (
    <>
    <p style={{marginLeft:'46%',fontSize:'25px'}}>{props.active}</p>
    <Grid className={classes.container} container justify="center" wrap="wrap" spacing={2}>
      {props.products.map((product, index) => {
        product.index = index;
       
        return (
          <Grid key={product.name} item sm={4}>
            <If condition={props.active !== ''}>
              <Paper className={classes.paper} >
                <img alt={product.name} className={classes.image} src={product.image}></img>
                <Typography variant="h5">
                  {product.name}
                </Typography>
                <Typography variant="P">
                Price : {product.price}$
                </Typography> <br/>
                <Typography variant="P">
                In Stock : {product.count}
                </Typography>
                <Grid className={classes.containerBtn} container justify="center" wrap="wrap" spacing={3}>
                  <Button onClick={() => props.addProduct(product)} style={{ marginRight: '10px' }} variant="contained" color="primary">
                    <strong>Add to Cart</strong>
                  </Button>
                  <Button variant="outlined" color="primary">
                    View Details
               </Button>

                </Grid>
              </Paper>
            </If>
          </Grid>
        );
      })}
    </Grid>
      </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
