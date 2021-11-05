import React, { useState } from 'react';
import { Form} from 'react-bootstrap';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import Numpad from './Numpad/Numpad';
import ATM from '../AtmHandlers/AtmFunctionHandler';
import Navigation from './Navigation/Navigation';
import classes from './InputWindow.module.css';
import CenterModal from './UI/CenterModal/CenterModal';

const Inputwindow = () => {
  const [input, setInput] = useState('');
  const [modalShow, setModalShow] = useState(false);
  const [error, setError] = useState('');
  const [remainMoney, setRemainMoney] = useState({});
  const [newMoney, setNewMoney] = useState({});
  const params = useParams();
  const dispatch = useDispatch();
  const currentAllMoney = useSelector((state) => state.moneyArray);

  const getMoney = (allMoney) => {
    dispatch({ type: 'GET_MONEY', payload: allMoney });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    try {
      const [remainMoney, newMoney] = ATM(input, currentAllMoney[params.id]);
      setRemainMoney(remainMoney);
      setNewMoney(newMoney)
    } catch (e) {
      setError(e.message);
    }
    getMoney(currentAllMoney);
    setModalShow(true);
    setInput('')
  };
  const onNumpadClick = (e) => {
    if (e.target.textContent === '<') {
      setInput((lastInput) => {
        return lastInput.slice(0, lastInput.length - 1);
      });
    } else {
      setInput((lastInput) => {
        return lastInput + e.target.textContent;
      });
    }
  };
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group type='submit'>
        <Form.Control
          type="number"
          className={classes.MainInput}
          onChange={(e) => setInput(e.target.value)}
          value={input}
        ></Form.Control>
        <Numpad onNumpadClick={onNumpadClick} />
        <Navigation></Navigation>
      </Form.Group>
      <CenterModal
        show={modalShow}
        onHide={() => {
          setModalShow(false);
          setError('')
        }}
        error={error}
        remainMoney={remainMoney}
        newMoney={newMoney}
      />
    </Form>
  );
};

export default Inputwindow;
