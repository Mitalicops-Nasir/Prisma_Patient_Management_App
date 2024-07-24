"use client";

import { storage } from "@/firebase/clientApp";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import Image from "next/image";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

import { useState } from "react";
import { convertFileToUrl } from "@/lib/utils";

type FileUploaderProps = {
  files: File[] | undefined;
  onChange: (files: File[]) => void;
};

export const Upload = ({ files, onChange }: FileUploaderProps) => {
  const [file, setFile] = useState<any>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState<any>(null);

  const handleFileChange = (event: any) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);
    const storageRef = ref(storage, `images/${file.name}`);

    try {
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      setUploadedUrl(url);
      console.log("file Uploaded");
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="file-upload">
      <input type="file" onChange={handleFileChange} />
      <button
        onClick={() => {
          handleUpload();
        }}
        disabled={uploading}
      >
        {uploading ? "Uploading..." : "Upload Image"}
      </button>
      {uploadedUrl ? (
        <Image
          src={uploadedUrl}
          width={300}
          height={300}
          alt="uploaded image"
          className="max-h-[400px] overflow-hidden object-cover"
        />
      ) : (
        <>
          <Image
            src="/assets/icons/upload.svg"
            width={40}
            height={40}
            alt="upload"
          />
          <div className="file-upload_label">
            <p className="text-14-regular ">
              <span className="text-green-500">Click to upload </span>
              or drag and drop
            </p>
            <p className="text-12-regular">
              SVG, PNG, JPG or GIF (max. 800x400px)
            </p>
          </div>
        </>
      )}

    </div>
  );
};
