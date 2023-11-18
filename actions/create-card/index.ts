"use server";

import { auth } from "@clerk/nextjs";
import { InputType } from "./types";
import { c } from "@/lib/console-log";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/create-safe-action";
import { CreateCard } from "./schema";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId, orgId } = auth();
  if (!userId || !orgId) {
    return {
      error: "Unauthorized",
    };
  }
  const { title, boardId, listId } = data;
  let card;

  try {
    const list = await db.list.findUnique({
      where: {
        id: listId,
        board: {
          orgId,
        },
      },
    });
    if (!list) return { error: "List not found" };

    const lastCard = await db.card.findFirst({
      where: {
        listId,
      },
      orderBy: { order: "desc" },
      select: { order: true },
    });
  } catch (error) {
    c(error);
    return {
      error: "failed to create",
    };
  }
  revalidatePath(`/board/${boardId}`);
  return { data: list };
};

export const createCard = createSafeAction(CreateCard, handler);
