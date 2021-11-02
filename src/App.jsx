import React from 'react';
import ATM from './ATM'

const App = () => {
  const money = {
    50: 10000,
    100: 8000,
    200: 5000,
    500: 3000,
    1000: 1000,
    2000: 400,
    5000: 100,
  };
  const newATM = new ATM(money);
  console.log(newATM.getAtmBalance());
  console.log(newATM.getMoney(6092000));
  console.log(newATM.getAtmBalance());
  
  return (
    <div>
      здарова
    </div>
  );
}

export default App;
