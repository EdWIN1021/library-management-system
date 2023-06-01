export const getCategory = async (categoryId: string) => {
  const res = await fetch(
    `https://example-data.draftbit.com/books?q=${categoryId}&_page=1&_limit=20`,
    {
      next: { revalidate: 60 },
    }
  );
  return res.json();
};

export const getBook = async (bookId: string) => {
  const res = await fetch(`https://example-data.draftbit.com/books/${bookId}`, {
    next: { revalidate: 60 },
  });

  return res.json();
};
