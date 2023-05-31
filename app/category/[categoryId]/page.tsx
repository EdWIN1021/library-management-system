import BookList from "@/app/components/BookList/BookList";
import styles from "./styles.module.scss";

const Category = async ({ params }: { params: { categoryId: string } }) => {
  return (
    <div className={styles.category}>
      <BookList categoryId={params?.categoryId} />
    </div>
  );
};

export default Category;
