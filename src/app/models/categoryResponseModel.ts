import { Category } from "./category";
import { ResponseModel } from "./responseModel";

export interface CategoryResonseModel extends ResponseModel{
    data:Category[]
}