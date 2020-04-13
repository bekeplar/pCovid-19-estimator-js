import React from 'react';
import Header from './component/Header';
// import Footer from './component/Footer';
import Form from './component/Form';
import './App.css';

// Display components in the app.
function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
