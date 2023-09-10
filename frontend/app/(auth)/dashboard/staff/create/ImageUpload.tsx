"use client";

import { Button, Image } from "@nextui-org/react";
import React, { useEffect, useState, ChangeEvent } from "react";
import nextImage from "next/image";
import doctorImage from "../../../../../public/doctor.jpeg";

const imageMimeType = /image\/(png|jpg|jpeg)/i;

function UploadImage() {
  const [file, setFile] = useState<File | null>(null);
  const [fileDataURL, setFileDataURL] = useState<string | null>(null);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.type.match(imageMimeType)) {
      setFile(selectedFile);
    } else {
      alert(
        "Image type is not valid we only support *.png,*.jpg,*.jpeg and *.gif"
      );
    }
  };

  useEffect(() => {
    let fileReader: FileReader | null = null;
    let isCancel = false;

    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target as FileReader;
        if (result && !isCancel) {
          setFileDataURL(result as string);
        }
      };
      fileReader.readAsDataURL(file);
    }

    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file]);

  return (
    <>
      {fileDataURL ? (
        <>
          <div className="border-4 border-emerald-200 shadow-md shadow-slate-400 w-[150px] h-[150px] inset-0 mx-auto overflow-hidden rounded-full mt-10 mb-4">
            <Image
              as={nextImage}
              src={fileDataURL}
              width={200}
              height={200}
              className="rounded-full overflow-clip"
              alt="preview"
            />
          </div>
          <p className="text-slate-400 inset-0 mx-auto text-xs text-center px-6 py-2">
            Allowed *.jpeg, *.jpg, *.png, *.gif max size of 3.1 MB, We recommend
            image size to be 200px width and height
          </p>
        </>
      ) : (
        <>
          <div className="border-4 border-emerald-200 shadow-md shadow-slate-400 w-[200px] h-[ 200px]inset-0 mx-auto overflow-hidden rounded-full mt-10 mb-4">
            <Image
              as={nextImage}
              src="/doctor.jpeg"
              objectFit="cover"
              width={200}
              height={200}
              className="rounded-full overflow-clip w-[200px] h-[ 200px]"
              alt="preview"
            />
          </div>
          <p className="text-slate-400 inset-0 mx-auto text-xs text-center px-6 py-2">
            Allowed *.jpeg, *.jpg, *.png, *.gif max size of 3.1 MB, We recommend
            image size to be 200px width and height
          </p>
        </>
      )}
      <form>
        <p>
          <label htmlFor="image">
            <span className="bg-slate-200 block text-center text-slate-700 rounded px-4 py-2 cursor-pointer">
              Choose Image
            </span>
            <input
              type="file"
              id="image"
              accept=".png, .jpg, .jpeg, .gif"
              className="hidden"
              onChange={changeHandler}
            />

            <Button className="bg-slate-900 block text-white my-3 w-full">
              Upload
            </Button>
          </label>
        </p>
      </form>
    </>
  );
}

export default UploadImage;
