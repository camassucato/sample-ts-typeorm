import { Router } from 'express';
import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionRoutes = Router();

sessionRoutes.post('/', async (request, response) => {
  const { email, password } = request.body;

  const authenticateService = new AuthenticateUserService();
  const { user, token } = await authenticateService.execute({
    email,
    password,
  });

  delete user.password;

  return response.json({ user, token });
});

export default sessionRoutes;
