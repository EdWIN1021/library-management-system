import { Session } from "next-auth";

export interface User {
  id?: string | null | undefined;
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
  provider?: string | null | undefined;
}

export interface Auth extends Session {
  id?: string | null | undefined;
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
  provider?: string | null | undefined;
}

export interface Book {
  id: number;
  title: string;
  authors: string;
  description: string;
  edition: string;
  format: string;
  num_pages: number;
  rating: number;
  rating_count: number;
  review_count: number;
  genres: string;
  genre_list: string;
  image_url: string;
  Quote1: string;
  Quote2: string;
  Quote3: string;
}
