import FormPopover from "@/components/form/form-popover";
import Hint from "@/components/tooltip/hint";
import { IconHelpCircle, IconPlus, IconUser } from "@tabler/icons-react";
import React from "react";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Link from "next/link";
const BoardList = async () => {
  const { orgId } = auth();
  if (!orgId) {
    return redirect("/select-org");
  }

  const boards = await db.board.findMany({
    where: {
      orgId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <div className="space-y-4 ">
      <div className="flex items-center font-semibold text-lg text-neutral-700">
        <IconUser className="h-6 w-6 mr-2" />
        Your boards
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {boards.map((board) => (
          <Link
            href={`/board/${board.id}`}
            key={board.id}
            style={{ backgroundImage: `url(${board.imageThumbUrl}` }}
            className="group relative aspect-video bg-no-repeat bg-center bg-cover bg-rose-400 w-full p-2 overflow-hidden rounded-sm"
          >
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all" />
            <p className="relative font-semibold text-white">{board.title}</p>
          </Link>
        ))}
        <FormPopover sideOffset={10} side="right">
          <div
            role="button"
            className="aspect-video relative h-full w-full bg-muted rounded-sm flex flex-col gap-y-1 items-center justify-center hover:opacity-75 transition-all"
          >
            <p className="text-sm"> Create new board</p>
            <div>
              <IconPlus className="text-rose-500" />
            </div>
            <span className="text-[10px]">5 boards remaining</span>
            <Hint
              sideOffset={40}
              description={`Free workspaces can have up to 5 open boards. For unlimited experience upgrade this workspace.`}
            >
              <IconHelpCircle className="absolute bottom-2 right-2 h-[14px] w-[14px] text-neutral-400" />
            </Hint>
          </div>
        </FormPopover>
      </div>
    </div>
  );
};

export default BoardList;
