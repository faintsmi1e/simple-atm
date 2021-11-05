import React from 'react';
import { Button } from 'react-bootstrap';
import classes from './Numpad.module.css';
const Numpad = ({ onNumpadClick }) => {
  const addNumpad = () => {
    const numpad = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    return numpad.map((num) => {
      return (
        <Button className={classes.NumpadButton}type='button' onClick={onNumpadClick}>
          {num}
        </Button>
      );
    });
  };
  return <div className={classes.Numpad}>{addNumpad()}</div>;
};

export default Numpad;
