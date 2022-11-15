import express from 'express';
import { userControllerCreate } from '../controllers/UserController.js';

export const routes = express.Router();

routes.post('/User',userControllerCreate)