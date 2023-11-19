import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";
import { db } from "@/lib/db";
import { ActivityItem } from "@/components/activity-item";
import { Skeleton } from "@/components/ui/skeleton";
const ActivityList = async () => {
  const { orgId } = auth();
  if (!orgId) {
    redirect("/select-org");
  }
  const auditLogs = await db.auditLog.findMany({
    where: {
      orgId,
    },
  });
  return (
    <ol className="space-y-4 mt-4">
      <p className="hidden last:block text-xs text-center text-muted-foreground">
        No activity found for this organization
      </p>
      {auditLogs.map((log) => (
        <ActivityItem key={log.id} data={log} />
      ))}
    </ol>
  );
};

export default ActivityList;
