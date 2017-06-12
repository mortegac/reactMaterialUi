import React from 'react';
// import Paper from 'material-ui/Paper';
// import PropTypes from 'prop-types';
// import { withStyles, createStyleSheet } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
// import Typography from 'material-ui/styles';

import AppInput from '../appinput'




// function PaperSheet(props) {
//   const classes = props.classes;
//   return (
//     <div>
//       <Paper className={classes.root} elevation={4}>
//         <Typography type="headline" component="h3">
//           This is a sheet of paper.
//         </Typography>
//         <Typography type="body1" component="p">
//           Paper can be used to build surface or other elements for your application.
//         </Typography>
//       </Paper>
//     </div>
//   );
// }





const style = {
  width: 500,
  paddingTop: 16,
  paddingBottom: 16,
  paddingLeft: 16,
  paddingRigth: 16,
  margin: 6,
  textAlign: 'left',
  display: 'inline-block',
};

const AppPaper = () => (
  <div>
    <Paper style={style} zDepth={2}>
        <AppInput/>
    </Paper>
  </div>
);

/*
    <Paper style={style} zDepth={1} />
    <Paper style={style} zDepth={2} />
    <Paper style={style} zDepth={3} />
    <Paper style={style} zDepth={4} />
    <Paper style={style} zDepth={5} />
*/
export default AppPaper;