const num = () => Math.floor(Math.random() * 5) + 1;

export const getRomance = async () => {
  const res = await fetch(
    `https://example-data.draftbit.com/books?q=Romance&_page=${num()}&_limit=10`
  );
  return res.json();
};

export const getFiction = async () => {
  //https://example-data.draftbit.com/books?_limit=10&q=Horror
  const res = await fetch(
    `https://example-data.draftbit.com/books?q=Fiction&_page=${num()}&_limit=10`
  );
  return res.json();
};

export const getHorror = async () => {
  const res = await fetch(
    `https://example-data.draftbit.com/books?q=Horror&_page=${num()}&_limit=10`
  );
  return res.json();
};

export const getChildren = async () => {
  const res = await fetch(
    `https://example-data.draftbit.com/books?q=Children&_page=${num()}&_limit=10`
  );
  return res.json();
};

export const getClassic = async () => {
  const res = await fetch(
    `https://example-data.draftbit.com/books?_page=5&_limit=10`
  );
  return res.json();
};

export const getReturned = async () => {
  const res = await fetch(
    `https://example-data.draftbit.com/books?_page=20&_limit=10`
  );
  return res.json();
};

export const getTrending = async () => {
  const res = await fetch(
    `https://example-data.draftbit.com/books?_page=1&_limit=10`
  );
  return res.json();
};
