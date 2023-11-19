import { AuditLog } from "@prisma/client";
import { generateLogMessage } from "@/lib/generate-log-message";
import { Avatar, AvatarImage } from "./ui/avatar";
interface ActivityItemProps {
  data: AuditLog;
}
export const ActivityItem = ({ data }: ActivityItemProps) => {};
