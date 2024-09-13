import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: 'center', marginTop: '120px', marginBottom: '30px' }}>
      <h1>404</h1>
      <h2>Извините, запрашиваемая страница не найдена.</h2>
      <h3>Вы можете вернуться на главную страницу .</h3>
      <img style={{ width: '300px', height: '300px', objectFit: 'cover', objectPosition: 'center' }} src="./Elephant.gif" alt="" />
      <button onClick={ () => navigate('/')} className='btn btn-primary rounded-0 mt-3 w-auto mx-auto text-center d-flex justify-content-center align-items-center btn-center'>Вернуться на главную</button>
    </div>
  );
}

export default ErrorPage;