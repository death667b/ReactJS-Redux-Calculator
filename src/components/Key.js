import React from 'react';
import { Grid, Button } from 'semantic-ui-react';

const Key = ({value, whenClicked = () => {}}) => {
  const clickEvent = () => whenClicked(value);
  return (
    <Grid.Column>
      <Button onClick={clickEvent}>{value}</Button>
    </Grid.Column>
  )
}

export default Key;