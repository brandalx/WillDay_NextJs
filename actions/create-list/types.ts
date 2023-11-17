import { z } from "zod";

import { Board } from "@prisma/client";
import { ActionState } from "@/lib/create-safe-action";
import { CreateList } from "./schema";
import { List } from "@prisma/client";
export type InputType = z.infer<typeof CreateList>;
export type ReturnType = ActionState<InputType, List>;
