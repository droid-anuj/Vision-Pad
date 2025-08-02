"use client";

import { useApiMutation } from "@/hooks/use-api-mutation";
import { cn } from "@/lib/utils";
import { api } from "@/convex/_generated/api";
import { Plus } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface NewBoardButtonProps {
  orgId: string;
  disabled?: boolean;
}

const NewBoardButton = ({ orgId, disabled }: NewBoardButtonProps) => {
  const { mutate, pending } = useApiMutation(api.board.create);
  const router = useRouter();

  const onClick = () => {
    mutate({ orgId, title: "Untitled" })
      .then((id) => {
        toast.success("Board created");
        router.push(`/board/${id}`);
      })
      .catch(() => {
        toast.error("Failed to create board");
      });
  };

  return (
    <button
      type="button"
      disabled={pending || disabled}
      onClick={onClick}
      className={cn(
        "col-span-1 aspect-[100/127] bg-amber-200 rounded-lg hover:bg-amber-400 flex flex-col items-center justify-center py-6",
        (pending || disabled) && "opacity-75 hover:bg-amber-200 cursor-not-allowed"
      )}
    >
      <div />
      <Plus className="h-12 w-12 text-black stroke-1" />
      <p className="text-sm font-semibold text-black">New Board</p>
    </button>
  );
};

export default NewBoardButton;
