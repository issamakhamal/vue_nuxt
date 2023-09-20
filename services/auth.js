import jwt from 'jsonwebtoken';

export default function ({ store, route, redirect }) {
  const token = localStorage.getItem('token');
  if (route.name !== 'login' && !token) {
    return redirect('/login');
  }
  try {
    jwt.verify(token, 'votre_secret_jwt'); // Remplacez par votre secret JWT
  } catch (error) {
    return redirect('/login');
  }
}
