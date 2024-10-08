import { NextResponse } from "next/server";
import { BookList } from "@/types/book-list";

const mockBooks: BookList = [
  {
    title: "Advanced Mathematics",
    img_src: "/images/math-book.jpg",
    pdfSrc: "/pdfs/advanced-mathematics.pdf",
    subject: "Mathematics",
    classNr: 11,
  },
  {
    title: "Physics Fundamentals",
    img_src: "/images/physics-book.jpg",
    pdfSrc: "/pdfs/physics-fundamentals.pdf",
    subject: "Physics",
    classNr: 10,
  },
  // ... more books
];

export async function GET() {
  return NextResponse.json(mockBooks);
}
