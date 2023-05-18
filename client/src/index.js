import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter , Routes , Route  } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import Sign from './views/Sign';
import Account from './views/Account';
import AdminSign from './views/AdminSign'


const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
     <Routes> 
        <Route path="/" element={<Home/>} />
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Sign' element={<Sign/>}/> 
        <Route path='/Account' element={<Account/>}/>
        <Route path='/AdminSign' element={<AdminSign/>}></Route>
     </Routes>
  </BrowserRouter>

  );
