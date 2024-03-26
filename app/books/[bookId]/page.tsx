import { getBook } from "@/lib/books";

import BookImage from "../../../components/BookImage";
import BookDetail from "../../../components/BookDetail";
import { Grid } from "@mui/material";
import BookDescription from "@/components/BookDescription";

const Book = async ({ params }: { params: { bookId: string } }) => {
  const book = await getBook(params.bookId);

  return (
    <>
      <Grid
        container
        columns={{ xs: 12, sm: 12, md: 12 }}
        className="bg-[white] p-5"
      >
        <Grid item xs={12} sm={4} md={3}>
          <BookImage book={book} />
        </Grid>

        <Grid item xs={12} sm={4} md={6}>
          <BookDetail book={book} />
        </Grid>

        <Grid item xs={12} sm={4} md={3}>
          <BookDescription description={book?.description} />
        </Grid>
      </Grid>
    </>
  );
};

export default Book;
