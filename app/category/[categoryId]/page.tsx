import BookList from "@/app/components/BookList/BookList";
import styles from "./styles.module.scss";
import { getCategory } from "@/app/lib/genres";

import { getServerSession } from "next-auth/next";
import { authOptions } from "../../api/auth/[...nextauth]/route";

const Category = async ({ params }: { params: { categoryId: string } }) => {
  const books = await getCategory(params?.categoryId);
  const session = await getServerSession(authOptions);

  return (
    <div className={styles.category}>
      <BookList books={books} session={session} />
    </div>
  );
};

export default Category;
