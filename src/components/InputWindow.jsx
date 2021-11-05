import React, { useState} from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import Numpad from './Numpad/Numpad';
import ATM from '../AtmHandlers/AtmFunctionHandler';

const Inputwindow = () => {
  const [input, setInput] = useState('');

  const params = useParams();
  const dispatch = useDispatch();
  const currentAllMoney = useSelector((state) => state.moneyArray);

  const getMoney = (allMoney) => {
    dispatch({ type: 'GET_MONEY', payload: allMoney });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const remainMoney = ATM(input, currentAllMoney[params.id]);

    getMoney(currentAllMoney);
  };
  const onNumpadClick = (e) => {
    setInput((lastInput) => {
      return lastInput + e.target.textContent;
    });
  };
  return (
    <Form onSubmit={onSubmit} style={{marginTop: 200}}>
      <Form.Group type='submit'>
        <Form.Control
          onChange={(e) => setInput(e.target.value)}
          value={input}
        ></Form.Control>
        <Numpad onNumpadClick={onNumpadClick} />
      </Form.Group>
    </Form>
  );
};

export default Inputwindow;
