import React from 'react';
import Input from './pages/Input';

import 'bootstrap/dist/css/bootstrap.min.css';
import Atms from './pages/Atms';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './layouts/Layout';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Atms />}></Route>
            <Route exact path='atms/:id' element={<Input />} />
            <Route path='*' element={<Atms />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
