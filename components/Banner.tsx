import { Book } from "@/types/types";
const Banner = ({ book }: { book: Book }) => {
  return (
    <div
      className="hidden md:flex flex-col justify-end items-center p-[10vw] text-white gap-3 bg-center bg-cover font-semibold opacity-90"
      style={{ backgroundImage: "url('/images/bg.jpg')" }}
    >
      <p className="text-[2.5vw]">{book?.Quote1}</p>
      <p className="text-[1.5vw]">- {book?.authors}</p>
    </div>
  );
};

export default Banner;
