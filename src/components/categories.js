import React from 'react';
import { connect } from 'react-redux';
import { activeCategory } from '../store/categories-reducer';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import './categoreis.scss';


const mapStateToProps = (state) => {
    return {
        categories: state.categories.categories,
        active: state.categories.active
    };
};

const mapDispatchToProps = { activeCategory };


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    
    imgPath:
      'https://format-com-cld-res.cloudinary.com/image/private/s--3lZKmA3v--/c_crop,h_579,w_1500,x_0,y_421/c_fill,g_center,h_440,w_1140/fl_keep_iptc.progressive,q_95/v1/3166de8c85cdf32962078bab48f68692/ramen-1.jpg',
  },
  {
    
    imgPath:
      'https://image.freepik.com/free-photo/top-view-dark-modern-workspace-with-tablet-office-supplies-black-leather-desk_67155-3950.jpg',
  },

];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    flexGrow: 1,
    marginTop:'-20px',
    
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: '500px',
    display: 'block',
    width: '100%',
    overflow: 'hidden',
  },
}));

function SwipeableTextMobileStepper(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
     

      
    <div className={classes.root} style ={{ zIndex:'1'}}>
        
           
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
          
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
   <div style={{display:'flex' , justifyContent:'center' }}>
               
               <p style={{  fontSize: '35px', marginTop:'-32%' ,zIndex:'5',color :'#fff',textShadow:'4px 4px  #000'}}> Browse our Categories</p>
               </div>
               <div style={{display:'flex' , justifyContent:'space-around' , marginTop:'-24%' }}>
               {props.categories.map(category => {
                   return (
                       <ButtonBase  key={category.name} onClick={() => props.activeCategory(category.name)} style={{ marginBottom:'30%'}}>
                           <Typography
                           >
                            <button className='draw'>
                                {category.displayName}
                                </button> 
                               </Typography>
                       </ButtonBase>
                   )
               })}
               </div>
    </div>
  );
}


export default connect(mapStateToProps, mapDispatchToProps )( SwipeableTextMobileStepper);
