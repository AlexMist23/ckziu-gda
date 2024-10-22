import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="container mx-auto py-10">
      <Skeleton className="h-8 w-48 mb-5" />
      <Skeleton className="h-10 w-36 mb-10" />
      <Skeleton className="h-10 w-full mb-8 " />
      <Card className="flex flex-col gap-3 ">
        {Array.from({ length: 6 }).map((_, index) => (
          <Skeleton key={index} className="h-10 w-full" />
        ))}
        <Skeleton className="h-10 w-60 mx-auto mt-4" />
      </Card>
    </div>
  );
}
