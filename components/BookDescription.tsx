import { Book } from "@/types/types";
import React from "react";

interface BookDescriptionProps {
  description: string;
}

const BookDescription: React.FC<BookDescriptionProps> = ({ description }) => {
  return (
    <div>
      <p>
        <span>About</span> Book
      </p>
      <div>{description}</div>
    </div>
  );
};

export default BookDescription;
