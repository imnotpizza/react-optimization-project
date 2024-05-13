import Button from './components/Button';
import React from 'react';
import './index.css';

const App = (props) => {
  console.log('App props:', props);
  return (
    <div>
      <p className='name'>App</p>
      <Button />
    </div>
  );
};

export default App;
