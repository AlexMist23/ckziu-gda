"use client";

import { Input } from "@/components/ui/input";

export function UserTableFilters() {
  return (
    <div className="flex items-center py-4">
      <Input
        placeholder="Filter emails..."
        className="max-w-sm"
        // TODO: Implement filtering logic
      />
    </div>
  );
}
