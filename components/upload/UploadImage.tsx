"use client";
import React from "react";
import { useDropzone } from "react-dropzone";

type Props = {};

const UploadImage = (props: Props) => {
  const {} = useDropzone({
    maxFiles: 1,
    accept: {
      "image/png": [".png"],
      "image/jpg": [".jpg"],
      "image/jpeg": [".jpeg"],
      "image/webp": [".webp"],
    },
    onDrop: async (acceptFiles, fileRejections) => {
      if (acceptFiles.length) {
        const formData = new FormData();
        formData.append("image", acceptFiles[0]);
        const objectUrl = URL.createObjectURL(acceptFiles[0]);
      }
    },
  });
  return (
    <div>
      <h1>UploadImage</h1>
    </div>
  );
};

export default UploadImage;
