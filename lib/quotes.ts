export const getQuote = async () => {
  const num = Math.floor(Math.random() * 200) + 2;
  const res = await fetch(`${process.env.API_URL}/books/${num}`);
  return res.json();
};
