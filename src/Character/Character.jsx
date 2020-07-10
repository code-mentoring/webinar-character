import styled from 'styled-components';
import React from 'react';
import * as body from './body';
import * as head from './head';
import * as face from './face';

const StyledCharacter = styled.div`
  position: relative;
  width: 200px;
  padding-bottom: 130%;
  background: #eee;
`;

export const Character = props => {
  return <StyledCharacter>
    <CharacterBody value={props.body} /> {/* Lowest level */}
    <CharacterHead value={props.head} />
    <CharacterFace value={props.face} />
    <CharacterFacialHair value={props.facialHair} />
    <CharacterAccessory value={props.accessory} /> {/* Highest level */}
  </StyledCharacter>
}


const StyledBody = styled.img`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
`;

export const CharacterBody = ({value}) => {
  return <StyledBody src={body[value]} />;
}

const StyledHead = styled.img`
  position: absolute;
  width: 50%;
  left: 56%;
  transform: translateX(-50%);
  bottom: 52%;
`;
export const CharacterHead = ({value}) => {
  return <StyledHead src={head[value]} />
}

const StyledFace = styled.img`
  position: absolute;
  width: 34%;
  left: 60%;
  transform: translateX(-50%);
  bottom: 59%;
`;
export const CharacterFace = ({value}) => {
  return <StyledFace src={face[value]} />
}

export const CharacterAccessory = () => {
  return null;
}

export const CharacterFacialHair = () => {
  return null;
}
