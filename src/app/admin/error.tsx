"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Code } from "@/components/ui/code";

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
    <div className="flex flex-col m-auto max-w-[1200px]">
      <h2 className="text-2xl font-bold mb-4 mx-auto text-muted-foreground">
        Error:
      </h2>
      <code>{error.name}</code>
      <Code language="plaintext">{error.message}</Code>
      <Button className="mt-4 mx-auto" onClick={() => reset()}>
        Try again
      </Button>
    </div>
  );
}
