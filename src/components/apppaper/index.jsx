import React from 'react';
import Paper from 'material-ui/Paper';

import AppInput from '../appinput'

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