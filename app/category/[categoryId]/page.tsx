import CategoryList from "@/app/category/[categoryId]/CategoryList/CategoryList";
import { getCategory } from "@/app/lib/genres";

const Category = async ({ params }: { params: { categoryId: string } }) => {
  const books = await getCategory(params?.categoryId);

  return <CategoryList books={books} />;
};

export default Category;
