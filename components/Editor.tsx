"use client";
import React from "react";
import UploadImage from "@/components/upload/UploadImage";

type Props = {};

const Editor = (props: Props) => {
  return (
    <div>
      <h1>editor</h1>
      <UploadImage />
    </div>
  );
};

export default Editor;
