"use client";

import { useRouter, usePathname } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationControlsProps {
  className?: string;
  currentPage: number;
  totalPages: number;
}

export default function PaginationControls({
  className,
  currentPage,
  totalPages,
}: PaginationControlsProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handlePageChange = (page: number) => {
    router.push(`${pathname}?page=${page}`);
  };

  // Function to render page links with ellipsis for large page counts
  const renderPageLinks = () => {
    const pageLinks = [];
    const maxVisiblePages = 5; // Maximum number of page links to show

    // Calculate the range of pages to display
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(totalPages, startPage + maxVisiblePages + 1);

    // Adjust start page if end of range is reached
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    // Add ellipsis at the start if necessary
    if (startPage > 1) {
      pageLinks.push(
        <PaginationItem key="start-ellipsis">
          <PaginationEllipsis />
        </PaginationItem>
      );
    }

    // Add page links
    for (let i = startPage; i <= endPage; i++) {
      pageLinks.push(
        <PaginationItem key={i}>
          <PaginationLink
            onClick={() => handlePageChange(i)}
            className={
              currentPage === i
                ? "pointer-events-none bg-muted"
                : "cursor-pointer text-muted-foreground"
            }
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }

    // add ellipsis at the end if necessary
    if (endPage < totalPages) {
      pageLinks.push(
        <PaginationItem key="end-ellipsis">
          <PaginationEllipsis />
        </PaginationItem>
      );
    }
    return pageLinks;
  };

  return (
    <Pagination className={className}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => handlePageChange(currentPage - 1)}
            className={
              currentPage <= 1
                ? "pointer-events-none opacity-50"
                : "cursor-pointer"
            }
          />
        </PaginationItem>
        {renderPageLinks()}
        <PaginationItem>
          <PaginationNext
            onClick={() => handlePageChange(currentPage + 1)}
            className={
              currentPage >= totalPages
                ? "pointer-events-none opacity-50"
                : "cursor-pointer"
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
