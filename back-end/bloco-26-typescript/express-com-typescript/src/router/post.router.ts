import Connection from "../model/Connection";
import { Router } from 'express';
import postSchema from "../schema/post.schema";
import validatePost from "../middleware/validatePost.middleware";
import PostModel from "../model/Post.model";
import PostService from "../service/Post.service";
import PostController from "../controller/Post.controller";

const postModel = new PostModel(new Connection);
const postService = new PostService(postModel);
const postController = new PostController(postService);

const postRouter = Router();

postRouter.get('/', postController.getAll);
postRouter.get('/:id', postController.getById);
postRouter.post('/', validatePost(postSchema),postController.create);
postRouter.put('/:id', validatePost(postSchema), postController.update);
postRouter.delete('/:id', postController.exclude);

export default postRouter;