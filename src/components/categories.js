import React from 'react';
import { connect } from 'react-redux';
import { activeCategory } from '../store/categories-reducer';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';


function Categories(props) {

    return (
        <>
        <div style={{display:'flex' , justifyContent:'center' }}>
            <p style={{  fontSize: '27px' }}> Browse our Categories</p>
            </div>
            <div style={{display:'flex' , justifyContent:'space-around'}}>
            {props.categories.map(category => {
                return (
                    <ButtonBase  key={category.name} onClick={() => props.activeCategory(category.name)} style={{ }}>
                        <Typography style={{ fontSize:'30px'}}>{category.displayName}</Typography>
                        <img src={category.url} alt={category.displayName} width="60" height="60"></img>
                    </ButtonBase>
                )
            })}
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories.categories,
        active: state.categories.active
    };
};

const mapDispatchToProps = { activeCategory };



export default connect(mapStateToProps, mapDispatchToProps)(Categories);


