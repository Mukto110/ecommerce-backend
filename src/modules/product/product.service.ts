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

const getAllProductFromDB = async () => {
  try {
    const result = await ProductModel.find();
    return result;
  } catch (error: any) {
    throw new Error(`Failed to get all products: ${error.message}`);
  }
};

const getSingleProductById = async (id: string) => {
  try {
    const result = await ProductModel.findById(id);
    return result;
  } catch (error: any) {
    throw new Error(`Failed to get product by id: ${error.message}`);
  }
};

export const ProductService = {
  createProductIntoDB,
  getAllProductFromDB,
  getSingleProductById,
};
