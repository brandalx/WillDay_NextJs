"use server";

import { auth } from "@clerk/nextjs";
import { InputType, ReturnType } from "./types";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/create-safe-action";
import { CreateBoard } from "./schema";
import { c } from "@/lib/console-log";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId, orgId } = auth();
  if (!userId || !orgId) {
    return {
      error: "Unauthorized",
    };
  }

  const { title, image } = data;

  const [imageId, imageThumbUrl, imageFullUrl, imageLinkHTML, imageUserName] =
    image.split("|");
  c({ imageId, imageThumbUrl, imageFullUrl, imageLinkHTML, imageUserName });
  var board;
  if (
    !imageId ||
    !imageFullUrl ||
    !imageUserName ||
    !imageLinkHTML ||
    !imageThumbUrl
  )
    try {
      board = await db.board.create({
        data: {
          title,
          orgId,
          imageId,
          imageFullUrl,
          imageLinkHTML,
          imageThumbUrl,
          imageUserName,
        },
      });
    } catch (error) {
      return {
        error: "Failed to create board",
      };
    }
  revalidatePath(`/board/${board?.id}`);
  return { data: board };
};

export const createBoard = createSafeAction(CreateBoard, handler);
