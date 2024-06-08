import { User } from "../../entities";
import { FindOneOptions } from "typeorm";

type CreateUserParams = {
  name: string;
  email: string;
  password: string;
};

export default {
  async find(params: FindOneOptions<User>) {
    return await User.findOne(params);
  },
  async create(params: CreateUserParams): Promise<User> {
    let user = User.create({ ...params });
    await user.save();
    return user;
  },
};
