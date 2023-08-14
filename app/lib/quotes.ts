export const getQuote = async () => {
  const num = Math.floor(Math.random() * 200) + 2;
  const res = await fetch(`https://example-data.draftbit.com/books/${num}`);
  return res.json();
};
