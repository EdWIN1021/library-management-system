import CategoryList from "@/components/CategoryList";
import { getCategory } from "@/lib/books";

const Category = async ({ params }: { params: { categoryId: string } }) => {
  const books = (await getCategory(params?.categoryId)) || [];

  return <CategoryList categoryId={params?.categoryId} />;
};

export default Category;
