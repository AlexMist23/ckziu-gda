"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookList } from "@/types/book-list";

export default function BookListPage() {
  const [books, setBooks] = useState<BookList>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch("/api/books-list");
      const data = await response.json();
      setBooks(data);
    };
    fetchBooks();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {books.map((book) => (
        <Card key={book.title}>
          <CardHeader>
            <CardTitle>{book.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <img
              src={book.img_src}
              alt={book.title}
              className="w-full h-48 object-cover"
            />
            <p>Subject: {book.subject}</p>
            <p>Class: {book.classNr}</p>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <a href={book.pdfSrc} download>
                Download PDF
              </a>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
