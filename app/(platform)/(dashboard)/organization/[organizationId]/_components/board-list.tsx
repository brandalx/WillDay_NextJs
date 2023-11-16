import Hint from "@/components/tooltip/hint";
import { IconHelpCircle, IconUser } from "@tabler/icons-react";
import React from "react";

const BoardList = () => {
  return (
    <div className="space-y-4 ">
      <div className="flex items-center font-semibold text-lg text-neutral-700">
        <IconUser className="h-6 w-6 mr-2" />
        Your boards
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        <div
          role="button"
          className="aspect-video relative h-full w-full bg-muted rounded-sm flex flex-col gap-y-1 items-center justify-center hover:opacity-75 transition-all"
        >
          <p className="text-sm"> Create new board</p>
          <span className="text-xs">5 boards remaining</span>
          <Hint
            sideOffset={40}
            description={`Free workspaces can have up to 5 open boards. For unlimited experience upgrade this workspace.`}
          >
            <IconHelpCircle className="absolute bottom-2 right-2 h-[14px] w-[14px]" />
          </Hint>
        </div>
      </div>
    </div>
  );
};

export default BoardList;