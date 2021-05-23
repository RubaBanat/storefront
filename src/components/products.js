import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';



function Products(props) {
  console.log(props.active)
  return (
    <Grid item sm={5}>
    {props.products.map((product) => {
        if (props.active === product.category) {
          return (
            <div key={product.name}>
              <Typography variant="h4">
                {product.name}
              </Typography>
              <img alt={product.name} src={product.image} width="50" height="50"></img>
              <Typography>Price : {product.price} JD</Typography>
            </div>
          )
        }
      })}
    </Grid>
  )
}

const mapStateToProps = (state) => {
    console.log(state);
  return { active: state.categories.active, products: state.products.products};
};


export default connect(mapStateToProps)(Products);