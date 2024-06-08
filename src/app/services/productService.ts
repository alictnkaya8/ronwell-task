import { Product } from "../../entities";
import { FindOneOptions, ILike } from "typeorm";

const DEFAULT_LIMIT = 10;

type CreateProductParams = {
  name: string;
  description: string;
  price: number;
  inventory: number;
};

type ListProductParams = {
  page?: number;
  limit?: number;
} & Partial<Product>;

export default {
  async findOne(id: number) {
    return await Product.findOne({
      where: { id },
    });
  },
  async findMany(params: ListProductParams) {
    let limit = params.limit || DEFAULT_LIMIT;
    let page = params.page || 1;
    return await Product.find({
      skip: (page - 1) * limit,
      take: limit,
      where: params.name
        ? {
            name: ILike(`%${params.name}%`),
          }
        : {},
    });
  },
  async create(params: CreateProductParams): Promise<Product> {
    let product = Product.create({ ...params });
    await product.save();
    return product;
  },
  async update(id: number, params: Partial<CreateProductParams>) {
    let product = await Product.findOne({ where: { id } });
    if (!product) {
      return {
        status: "404",
        message: "Product not found",
      };
    }
    await Product.update({ id }, params);
    return {
      status: "200",
      message: "Product updated",
    };
  },
  async remove(id: number) {
    let product = await Product.findOne({ where: { id } });
    if (!product) {
      return {
        status: "404",
        message: "Product not found",
      };
    }
    await product.remove();
    return {
      status: "200",
      message: "Product removed",
    };
  },
};
