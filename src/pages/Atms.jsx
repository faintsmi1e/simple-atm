import React, { useState } from 'react';
import moneyState from '../moneyArray';
import Atm from '../components/Atm/Atm';

const Atms = () => {
  return (
    <div className='List'>
      <h2>Выберите банкомат для снятия наличных</h2>
      {moneyState.moneyArray.map((money, id) => {
        return <Atm money={money} id={id}></Atm>;
      })}
    </div>
  );
};

export default Atms;
