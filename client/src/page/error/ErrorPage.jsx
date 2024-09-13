import React from 'react';
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404</h1>
      <h2>Извините, запрашиваемая страница не найдена.</h2>
      <h3>Вы можете вернуться на <Link to="/">главную страницу</Link>.</h3>
    </div>
  );
}

export default ErrorPage;