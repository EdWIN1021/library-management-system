export const getCategory = async (categoryId: string) => {
  const res = await fetch(
    `https://example-data.draftbit.com/books?q=${categoryId}&_page=1&_limit=20`
  );

  return res.json();
};
