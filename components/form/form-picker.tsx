"use client";
import { unsplash } from "@/lib/api/unsplash";
import { c } from "@/lib/console-log";
import { cn } from "@/lib/utils";
import { IconCheck, IconLoader2 } from "@tabler/icons-react";
import Image from "next/image";
import { defaultImages } from "@/constants/images";
import { useEffect, useState } from "react";
interface FormPickerProps {
  id: string;
  errors?: Record<string, string[] | undefined>;
}

import React from "react";
import { useFormStatus } from "react-dom";
import { FormErrors } from "./form-errors";

const FormPicker = ({ id, errors }: FormPickerProps) => {
  const [images, setimages] = useState<Array<Record<string, any>>>([]);
  const { pending } = useFormStatus();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImageId, setselectedImageId] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const result = await unsplash.photos.getRandom({
          collectionIds: ["317099"],
          count: 9,
        });

        if (result && result.response) {
          const resultImages = result.response as Array<Record<string, any>>;
          setimages(resultImages);
        } else {
          c("Failed to get images from Unsplash");
        }
      } catch (error) {
        c(error);
        setimages(defaultImages);
      } finally {
        setIsLoading(false);
      }
    };
    fetchImages();
  }, []);

  if (isLoading) {
    return (
      <div className="p-6 flex items-center justify-center">
        <IconLoader2 className="h-6 w-6 text-sky-700 animate-spin  " />
      </div>
    );
  }
  return (
    <div className="relative">
      <div className="grid grid-cols-3 gap-2 mb-2">
        {images.map((image) => (
          <div
            key={image.id}
            className={cn(
              "cursor-pointer relative aspect-video group hover:opacity-75 transition-all bg-muted",
              pending && "opacity-50 hover:opacity-40 cursor-auto"
            )}
            onClick={() => {
              if (pending) return null;
              setselectedImageId(image.id);
            }}
          >
            <input
              type="radio"
              id={id}
              name={id}
              className="hidden"
              checked={selectedImageId === image.id}
              disabled={pending}
              defaultValue={`${image.id}|${image.urls.thumb}|${image.urls.full}|${image.links.html}|${image.user.name}" `}
              onChange={() => {}}
            />
            <Image
              fill
              alt="Unsplash image"
              className="object-cover rounded-sm"
              src={image.urls.thumb}
            />
            {selectedImageId === image.id && (
              <div className="absolute inset-y-0 h-full w-full bg-black/50 flex items-center justify-center">
                <IconCheck className="h-4 w-4 text-white" />
              </div>
            )}
          </div>
        ))}
      </div>
      <FormErrors id="image" errors={errors} />
    </div>
  );
};

export default FormPicker;
