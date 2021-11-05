import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import classes from './Atm.module.css'

const Atm = ({ money, id }) => {
  

  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/atms/${id}`);
      }}
      className={classes.Atm}
    >
      <Card
        bg='success'
        key={id}
        text='light'
        style={{ width: '18rem' }}
        className='mb-2'
      >
        <Card.Header>Банкомат № {id + 1}</Card.Header>
        <Card.Body>
          <Card.Title> Состояние банкомата: </Card.Title>
          <Card.Text className={classes.AtmText}> 
            <p className={classes.AtmBill}>50 ₽:  </p><span>{money['50']} шт.</span>
            <p className={classes.AtmBill}>100 ₽: </p><span>{money['100']} шт.</span>
            <p className={classes.AtmBill}>200 ₽: </p><span>{money['200']} шт.</span>
            <p className={classes.AtmBill}>500 ₽: </p><span>{money['500']} шт.</span>
            <p className={classes.AtmBill}>1000 ₽:</p><span>{money['1000']} шт.</span>
            <p className={classes.AtmBill}>2000 ₽:</p><span>{money['2000']} шт.</span>
            <p className={classes.AtmBill}>5000 ₽:</p><span>{money['5000']} шт.</span>                    
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Atm;
