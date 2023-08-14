import CategoryList from "@/app/category/[categoryId]/CategoryList/CategoryList";
import { getCategory } from "@/app/lib/books";

const Category = async ({ params }: { params: { categoryId: string } }) => {
  const books = (await getCategory(params?.categoryId)) || [];

  return <CategoryList categoryId={params?.categoryId} />;
};

export default Category;
