export const getCategory = async (categoryId: string) => {
  const res = await fetch(
    `${process.env.API_URL}/books?q=${categoryId}&_page=1&_limit=20`,
    {
      next: { revalidate: 60 },
    }
  );
  return res.json();
};

export const getBorrowList = async (userId: string | null | undefined) => {
  const res = await fetch(
    `${process.env.BASE_URL}/api/borrow_list?userId=${userId}`,
    {
      next: { revalidate: 60 },
    }
  );

  return res.json();
};

export const getBook = async (bookId: string) => {
  const res = await fetch(`${process.env.API_URL}/books/${bookId}`, {
    next: { revalidate: 60 },
  });

  return res.json();
};
