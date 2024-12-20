import { UserController } from '@/controllers/user.controller';
import { checkSuperAdmin, verifyToken } from '@/middleware/token';
import { uploader } from '@/middleware/uploader';
import { Router } from 'express';

export class UserRouter {
  private router: Router;
  private userController: UserController;

  constructor() {
    this.userController = new UserController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/', verifyToken, checkSuperAdmin, this.userController.getUsers);
    this.router.get('/:id', this.userController.getUserById);
    this.router.post('/register', this.userController.registerUser);
    this.router.patch('/data-register/:token', this.userController.verifyUser)
    this.router.post('/login', this.userController.loginUser);
    this.router.get('/generate-dummy', this.userController.createUsersDummy);
    this.router.get('/userAddress/:userId', this.userController.getUserAddressess);
    this.router.patch('/avatar', verifyToken, uploader('memoryStorage', "avatar", "/avatar").single('avatar'), this.userController.editAvatar);
  }

  getRouter(): Router {
    return this.router;
  }
}
