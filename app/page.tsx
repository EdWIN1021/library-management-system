import Banner from "@/components/Banner";
import Row from "@/components/Row";
import { getCategories } from "@/lib/books";
import { getQuote } from "@/lib/quotes";
import { CATEGORY } from "@/constants";

export default async function Home() {
  const [fiction, mystery, romance, science, children, historical] =
    await getCategories();
  const quote = await getQuote();

  return (
    <>
      <Banner book={quote} />
      <div className="flex flex-col gap-3">
        <Row books={fiction} title={CATEGORY.Fiction} />
        <Row books={mystery} title={CATEGORY.Mystery} />
        <Row books={romance} title={CATEGORY.Romance} />
        <Row books={science} title={CATEGORY.Science} />
        <Row books={children} title={CATEGORY.Children} />
        <Row books={historical} title={CATEGORY.Historical} />
      </div>
    </>
  );
}
