import React from 'react';
import { connect } from 'react-redux';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useSelector, useDispatch } from 'react-redux';
import { showCart } from '../store/cart-reducer'


const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
        background: ' #962d2d',

    },
}))(Badge);
const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
    },
    header: {
        backgroundColor: '#000',

    },
}));
function DenseAppBar(props) {
    const style = useStyles();
    // eslint-disable-next-line no-unused-vars
    const state = useSelector((state) => {
        return {
            show: state.cart.show,
        };
    });
    const dispatch = useDispatch();
    return (
        <AppBar className={style.header} position="static" style={{ marginBottom: '20px' }} >
            <Toolbar>
                <Typography  variant="h5" className={style.title}>
                    OUR STORE 
                </Typography>
                <Typography>
                    {/* CART ({props.cart.length})  */}
                    <IconButton aria-label="cart" style={{ background: '#fff' }} onClick={() => dispatch(showCart(true))}>
                        <StyledBadge badgeContent={props.cart.length} color="secondary">
                            <ShoppingCartIcon />
                        </StyledBadge>
                    </IconButton>
                </Typography>
            </Toolbar>
        </AppBar >
    )
}


const mapStateToProps = (state) => {
    return {
        cart: state.cart.cart,
    };
};


export default connect(mapStateToProps)(DenseAppBar);

