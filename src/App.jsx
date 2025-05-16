import React, { useState } from 'react';
import Signup from './components/signup';
import Login from './components/login';
import ForgotPassword from './components/ForgotPassword';

function App() {
  const [page, setPage] = useState('signup'); // 'signup' | 'login' | 'forgot'

  return (
    <div className='wrapper'>
      <div style={{ textAlign: 'center', marginTop: '1rem', width: '100%', height: 'auto' }}>
        <button onClick={() => setPage('signup')}>Sign Up</button>
        <button onClick={() => setPage('login')} style={{ marginLeft: '1rem' }}>Login</button>
      </div>

      {page === 'signup' && <Signup onClick={() => setPage('signup')} />}
      {page === 'login' && <Login onClick={() => setPage('login')} onForgotPassword={() => setPage('forgot')} />}
      {page === 'forgot' && <ForgotPassword />}
    </div>
  );
}

export default App;
