"use server";
import { z } from "zod";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export type State = {
  errors?: {
    title?: string[];
  };
  message?: string | null;
};

const CreateBoard = z.object({
  title: z
    .string()
    .min(3, { message: "Minimum length of 3 letters is required" }),
});

export async function create(formData: FormData) {
  //   "use server";
  const { title } = CreateBoard.parse({
    title: formData.get("title"),
  });

  console.log("triggered on server");
  await db.board.create({
    data: {
      title,
    },
  });
  revalidatePath("/organization/org_2YBgxpNANnjQS4dBLGTMhw8vFky");
}
