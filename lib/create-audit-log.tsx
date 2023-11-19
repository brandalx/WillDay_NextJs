import { currentUser, auth } from "@clerk/nextjs";

import { ACTION, ENTITY_TYPE } from "@prisma/client";

import { db } from "./db";

interface Props {
  entityId: string;
  entityType: ENTITY_TYPE;
  entityTitle: string;
  action: ACTION;
}
