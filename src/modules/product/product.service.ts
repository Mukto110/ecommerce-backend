import { TProduct } from "./product.interface";
import { ProductModel } from "./product.model";

const createProductIntoDB = async (product: TProduct) => {
  try {
    const result = await ProductModel.create(product);
    return result;
  } catch (error: any) {
    throw new Error(`Failed to create product: ${error.message}`);
  }
};

export const ProductService = {
  createProductIntoDB,
};
