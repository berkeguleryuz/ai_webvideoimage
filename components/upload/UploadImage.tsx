"use client";
import { uploadImage } from "@/server/upload-image";
import React from "react";
import { useDropzone } from "react-dropzone";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "../ui/input";

type Props = {};

const UploadImage = (props: Props) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
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

        const res = await uploadImage({ image: formData });
        console.log(res);
      }
    },
  });
  return (
    <Card {...getRootProps()}>
      <CardContent>
        <Input type="text" {...getInputProps()} />
        <div className="">
          <h1>animation</h1>
          <p>
            {isDragActive
              ? "Drop your image here"
              : "Start by uploading an image"}
          </p>
          <p>Supported formats: png, jpg, jpeg, webp</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default UploadImage;
