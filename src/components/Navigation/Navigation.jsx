import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import classes from './Navigation.module.css';

const Navigation = ({ onSubmit }) => {
  const navigate = useNavigate();
  const returnToMenu = () => {
    navigate('/');
  };
  return (
    <div className={classes.Navbar}>
      <Button variant="secondary" size='lg' className={classes.NavButton} onClick={returnToMenu}>
        Вернуться в меню
      </Button>
      <Button variant="success" size='lg' className={classes.NavButton} type='submit'>
        Снять наличные
      </Button>
    </div>
  );
};

export default Navigation;
