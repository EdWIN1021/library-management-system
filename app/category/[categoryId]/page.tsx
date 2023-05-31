import BookList from "@/app/components/BookList/BookList";
import styles from "./styles.module.scss";
import { getCategory } from "@/app/lib/genres";

const Category = async ({ params }: { params: { categoryId: string } }) => {
  const books = await getCategory(params?.categoryId);
  return (
    <div className={styles.category}>
      <BookList books={books} />
    </div>
  );
};

export default Category;
