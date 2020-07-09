import React, { useState, useContext } from 'react';

import { Button1Container, Button1Text } from './styles'

export default function TouchButtonLight(props) {
  return (
    <Button1Container>
      <Button1Text>
          {props.children}
      </Button1Text>
    </Button1Container>
  );
}