import { IPost } from "../interfaces/Post/Post";
import PostModel from "../model/Post.model";

export default class PostService {
  constructor(private postModel: PostModel) {}

  async getAll() {
    const posts = await this.postModel.getAll();

    return posts;
  }

  async getById(id: string) {
    const post = await this.postModel.getById(id);

    return post;
  }

  async create({ title, author, category, publicationDate }: IPost) {
    
    const created= await this.postModel.create({ title, author, category, publicationDate });

    return { status: 201, data : created };
  }

  async update(id: string,  { title, author, category, publicationDate }: IPost) {
    const updated = await this.postModel.update(id, { title, author, category, publicationDate });

    if (updated === 0) return { status: 422, data : { message: 'Failed to update'} };

    return { status: 200, data : { message: 'Post updated successfully'} };
  }

  async exclude (id: string) {
    const deleteStatus = await this.postModel.exclude(id);

    if (deleteStatus === 0) return { status: 422, data: { message: 'Failed to delete user' } };

    return { status: 200, data: { message: 'Post deleted successfully '} };
  };
}