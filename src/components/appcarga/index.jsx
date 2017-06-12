import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';

const appCarga = () => (
  <LinearProgress mode="indeterminate" />
);
export default appCarga;
/*import CircularProgress from 'material-ui/CircularProgress';

const appCarga = () => (
  <div>
    <CircularProgress />
  </div>
);

export default appCarga;

    <CircularProgress size={60} thickness={7} />
    <CircularProgress size={80} thickness={5} />
*/