"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { AuditLog } from "@prisma/client";
import React from "react";
interface ActivityProps {
  items: AuditLog[];
}
export const Activity = ({ items }: ActivityProps) => {
  return <div>activity</div>;
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
