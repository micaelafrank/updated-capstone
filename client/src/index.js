import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
// import { loadStripe } from "@stripe/stripe-js"
// import PaymentForm from "./components/CheckoutForm"
// import StripeContainer from './components/StripeContainer';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// const PUBLIC_KEY = "pk_test_51LNkyJFGyqtGlrO1bntRQgEes1YMTphf5qJEVJUcilwscukUrQa3HIhHtFu5dwOOus2UdsjKGRYRjcCahUPdnDDm00254IeMVb"
// const stripeTestPromise = loadStripe(PUBLIC_KEY)

root.render(
  < BrowserRouter >
    <App />
  </BrowserRouter >
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
