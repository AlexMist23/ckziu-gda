"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">Something went wrong!</h1>
      <p className="mb-4">{error.message}</p>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
}
