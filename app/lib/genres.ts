const num = () => Math.floor(Math.random() * 5) + 1;

export const getRomance = async () => {
  const res = await fetch(
    `https://example-data.draftbit.com/books?q=Romance&_page=${num()}&_limit=10`
  );
  return res.json();
};

export const getFiction = async () => {
  const res = await fetch(
    `https://example-data.draftbit.com/books?q=Fiction&_page=${num()}&_limit=10`
  );
  return res.json();
};

export const getChildren = async () => {
  const res = await fetch(
    `https://example-data.draftbit.com/books?q=Children&_page=${num()}&_limit=10`
  );
  return res.json();
};

export const getFantasy = async () => {
  const res = await fetch(
    `https://example-data.draftbit.com/books?q=Fantasy&_page=${num()}&_limit=10`
  );
  return res.json();
};

export const getHistorical = async () => {
  const res = await fetch(
    `https://example-data.draftbit.com/books?q=Historical&_page=${num()}&_limit=10`
  );
  return res.json();
};

export const getSchool = async () => {
  const res = await fetch(
    `https://example-data.draftbit.com/books?q=School&_page=${num()}&_limit=10`
  );
  return res.json();
};

export const getCategory = async (categoryId: string) => {
  const res = await fetch(
    `https://example-data.draftbit.com/books?q=${categoryId}&_page=1&_limit=10`
  );

  return res.json();
};
