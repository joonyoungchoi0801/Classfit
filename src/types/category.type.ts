export interface PersonalCategoryData {
  id: number;
  name: string;
  color: string;
}

export interface SharedCategoryData {
  id: number;
  name: string;
  color: string;
}

export interface CategoryData {
  personalCategories: PersonalCategoryData[];
  sharedCategories: SharedCategoryData[];
}

export interface CategoryResponse {
  statusCode: number;
  resultType: string;
  data: CategoryData;
  error: { message: string };
  message: string;
}
