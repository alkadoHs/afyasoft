import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import nextImage from "next/image";

function UploadPicture() {
  return (
    <div className="px-4">
      <div className="pt-8 pb-4 mt-8 flex justify-center">
        <Image
          as={nextImage}
          src="/doctor.jpeg"
          width={200}
          objectFit="cover"
          height={200}
          alt="Profile"
          className="rounded-full overflow-hidden border-4 border-slate-200"
        />
      </div>
      <div className="my-4">
        <p className="text-slate-400 text-sm text-center">
          Allowed image formats are *.png, *.jpg, *.jpeg and *.gif, max size 6MB
        </p>
      </div>
      <div className="w-full flex justify-center">
        <Button className="bg-slate-900 text-slate-50">Upload</Button>
      </div>
    </div>
  );
}

export default UploadPicture;
