"use client";
import { unsplash } from "@/lib/api/unsplash";
import { c } from "@/lib/console-log";
import { useEffect, useState } from "react";
interface FormPickerProps {
  id: string;
  errors?: Record<string, string[] | undefined>;
}

import React from "react";

const FormPicker = ({ id, errors }: FormPickerProps) => {
  const [images, setimages] = useState<Array<Record<string, any>>>([]);

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
      }
    };
  }, []);
  return <div>FormPicker</div>;
};

export default FormPicker;
