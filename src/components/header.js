import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
    },
}));
function DenseAppBar(props) {
    const style = useStyles();
    return (
        <AppBar color='inherit' position="static" style={{ marginBottom: '20px' ,background:'#3f51b5'}} >
            <Toolbar>
                <Typography variant="h5" className={style.title}>
                    OUR STORE
    </Typography>
    <Typography>
        CART ({props.cart.length}) 
        </Typography>
            </Toolbar>
        </AppBar>
    )
}


const mapStateToProps = (state) => {
    return {
      cart: state.cart.cart,
    };
  };


export default connect(mapStateToProps)(DenseAppBar);

