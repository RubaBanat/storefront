import { connect } from 'react-redux';
import { If } from 'react-if'
import { makeStyles } from '@material-ui/core/styles';
import { addProduct } from '../store/cart-reducer'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';

const mapStateToProps = (state) => {
  return { products: state.products.products, active: state.categories.active };

};

const mapDispatchToProps = { addProduct };

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  alert: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    width: '70%',
    margin: 'auto',
    color: theme.palette.text.primary,
    marginBottom: '80px',
    // background: 'rgba( 255, 255, 255, 0.15 )',
    boxShadow: '0 3px 15px 0 rgba( 255, 255, 255, 0.30 )',
    borderRadius: '10px',
    border: '1px solid rgba( 255, 255, 255, 0.18 )',
    backdropFilter: 'blur(3px)',
    backgroundColor: 'rgba(218, 213, 220, 0.2)',

  },
  paper1: {
    padding: theme.spacing(2),
    textAlign: 'center',
    width: '100%',
    margin: 'auto',
    borderRadius: '20px',
    boxShadow: ' rgba(0, 0, 0, 0.24)',
    color: theme.palette.text.primary,
    marginBottom: '100px',
  },
  container: {
    marginTop: '50px',
    marginBottom: '30px',
  },
  containerBtn: {
    marginTop: '30px'
  },
  image: {
    position: 'relative',
    height: 160,
    [theme.breakpoints.down('xs')]: {
      width: '90% !important',
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
      <div style={{ display: 'flex', justifyContent: 'center' }}>

        <p style={{ fontSize: '55px', marginTop: '-10%', color: '#fff' }}>{(props.active).toUpperCase()} </p>
      </div>
      <Grid className={classes.container} container justify="center" wrap="wrap" spacing={1}>
        {props.products.map((product) => {

          return (
            <Grid key={product.name} item sm={3}>
              <If condition={props.active !== ''}>
                <Paper className={classes.paper} >
                  <img alt={product.name} className={classes.image} src={product.image}></img>
                  <Typography variant="h5">
                    {product.name}
                  </Typography>
                  <Typography variant="P">
                    Price : {product.price}$
                </Typography> <br />
                  <Typography variant="P">
                    In Stock : {product.inStock}
                  </Typography>
                  <Grid className={classes.containerBtn} container justify="center" wrap="wrap" spacing={3}>
                    <Button onClick={() => {
                      if (product.inStock) {
                        props.addProduct(product)
                      } else {
                        <div className={classes.alert}>
                          <Alert variant="outlined" severity="error">
                            This is an error alert — check it out!
                       </Alert>
                        </div>
                        // alert('خلص ما ضل عنا ')
                      }
                    }} variant="contained" style={{ background: '#962d2d', width: '100px', fontSize: '9.3px' }}>
                      <strong>Add to Cart</strong>
                    </Button>
                    <Button variant="outlined" color="default" style={{ marginLeft: '20px', width: '100px', fontSize: '9.3px' }}>
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

// import { makeStyles } from '@material-ui/core/styles';
// import Alert from '@material-ui/lab/Alert';

// const useStyles = makeStyles((theme) => ({
//   alert: {
//     width: '100%',
//     '& > * + *': {
//       marginTop: theme.spacing(2),
//     },
//   },
// }));

// export default function SimpleAlerts() {
//   const classes = useStyles();

//   return (
//     <div className={classes.alert}>
//       <Alert variant="outlined" severity="error">
//         This is an error alert — check it out!
//       </Alert>
//     </div>
//   );
// }