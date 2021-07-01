import React from 'react';
import ReactDOM from 'react-dom';


import './index.css';


import App from './App';
import reportWebVitals from './reportWebVitals';
//  ***  LOOK INTO  ***  //


import { BrowserRouter } from 'react-router-dom'
  // import {BrowserRouter as Portal} from 'react-router-dom'
  // import {BrowserRouter as Router} from 'react-router-dom'
//  ***  DISCLAIMER  ***  //
// Router




import Header from './header'




ReactDOM.render(
    <React.StrictMode>
        

    <BrowserRouter>
      <App />
    </BrowserRouter>   




    {/* <ReRouter>
      <App />
    </ReRouter>    */}



    {/* <Portal>
      <App />
    </Portal>    */}

      





      {/* <App /> */}
      { /* App.renderApp() */ }
      

        {/* <Header />
        <Header />
        <Header />
        <Header />  */}


      {/* <App />
      <App />  */}
      
     

    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
