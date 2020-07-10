import React from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import { Character } from './Character/Character';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
`

ReactDOM.render(
  <React.StrictMode>
    <Grid>
      <Character
        head="afro"
        body="macbook"
        face="fear"
      />
      <Character
        head="bangs"
        body="macbook"
        face="calm"
      />
      <Character
        head="afro"
        body="killer"
        face="cute"
      />
      <Character
        head="bangs"
        body="killer"
        face="cyclops"
      />
      <Character
        head="bear"
        body="coffee"
        face="explaining"
      />
      <Character
        head="long"
        body="dress"
      />
    </Grid>
  </React.StrictMode>,
  document.getElementById('root')
);
