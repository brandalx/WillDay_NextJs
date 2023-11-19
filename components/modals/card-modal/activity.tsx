"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { AuditLog } from "@prisma/client";
import { IconActivity } from "@tabler/icons-react";
import React from "react";
interface ActivityProps {
  items: AuditLog[];
}
export const Activity = ({ items }: ActivityProps) => {
  return (
    <div className="flex items-start gap-x-3 w-full">
      <IconActivity className="h-5 w-5 mt-0.5 text-neutral-700" />
      <div className="w-full">
        <p className="font-semibold text-neutral-700 mb-2 ">Activity</p>
        <ol className="mt-2 space-y-4">
          {items.map((items) => (
            <p key={items.id} className="">
              {items.entityTitle}
            </p>
          ))}
        </ol>
      </div>
    </div>
  );
};

Activity.Skeleton = function ActivitySkeleton() {
  return (
    <div className="flex items-start gap-x-3 w-full">
      <Skeleton className="bg-neutral-200 h-6 w-6" />
      <div className="w-full">
        <Skeleton className="mb-2 bg-neutral-200 h-6 w-24" />
        <Skeleton className="bg-neutral-200 h-10 w-full" />
      </div>
    </div>
  );
};
