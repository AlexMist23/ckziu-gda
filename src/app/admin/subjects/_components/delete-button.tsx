"use client";

import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Subject } from "@/lib/kysely";
import { Loader2, Trash } from "lucide-react";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface DeleteSubjectButtonParams {
  subject: Subject;
}

export default function DeleteSubjectButton({
  subject,
}: DeleteSubjectButtonParams) {
  const router = useRouter();
  const [isfetching, setIsFetching] = useState(false);

  async function onClick() {
    try {
      setIsFetching(true);
      const response = await fetch(`/api/admin/subjects/${subject.id}`, {
        method: "DELETE",
        body: JSON.stringify(subject),
      });

      if (!response.ok) {
        throw new Error("Failed to delete subject");
      }
      router.refresh();
      toast({
        title: "Success",
        description: `Deleted subject: ${subject.name}`,
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to delete subject",
        variant: "destructive",
      });
    } finally {
      setIsFetching(false);
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button variant={"destructive"} size={"icon"} disabled={isfetching}>
          {isfetching ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Trash className="w-4 h-4" />
          )}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete: {subject.name}?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the
            subject and remove from servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="bg-destructive text-destructive-foreground hover:bg-destructive/80"
            onClick={onClick}
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
