"use client";
import { unsplash } from "@/lib/api/unsplash";
import { c } from "@/lib/console-log";
import { cn } from "@/lib/utils";
import { IconLoader2 } from "@tabler/icons-react";
import Image from "next/image";

import { useEffect, useState } from "react";
interface FormPickerProps {
  id: string;
  errors?: Record<string, string[] | undefined>;
}

import React from "react";
import { useFormStatus } from "react-dom";

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
        setimages([]);
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
            <Image
              fill
              alt="Unsplash image"
              className="object-cover rounded-sm"
              src={image.urls.thumb}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormPicker;
