
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer';
import { Provider } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from './ScrollToTop';

const store = configureStore({
  reducer:rootReducer ,
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store} >
<BrowserRouter>
<ScrollToTop />
  <App />
  <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
  {/* <Toaster/> */}
</BrowserRouter>
</Provider>
);


