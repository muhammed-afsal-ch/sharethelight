"use client"
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Page() {
  const router = useRouter()
  const [Objectimage, setObjectimage] = useState<any>({});
  const [CampImage, setCampImage] = useState(null);
  let finalwidth;
  let finalheight;


  const sizesMaker = async (e) => {

    const data = e.target.files[0];

    const img: any = await new Image();
    const url = URL.createObjectURL(data);

    img.onload = () => {
      setObjectimage({ width: img.width, height: img.height });
    };
    img.src = url;
    setCampImage(img);
    console.log(Objectimage);

  }

  // Calculate aspect ratios
  const imageAspectRatio = Objectimage.width / Objectimage.height;

  const canvasAspectRatio = 1080 / 1350; // Assuming a fixed div with width 600 and height 400

  let newWidth, newHeight;
  if (imageAspectRatio < canvasAspectRatio) {
    // Fit image height to canvas height
    newHeight = 1350;
    newWidth = newHeight * imageAspectRatio;
    finalwidth = newWidth
    finalheight = newHeight
    // console.log(newWidth, "image width from aspect ratio", newHeight, "newHeight");

  } else {
    // Fit image width to canvas width
    newWidth = 1080;
    newHeight = newWidth / imageAspectRatio;
    //setFinalsizes({ width: newWidth, height: newHeight })
    //console.log(newHeight, "image height from aspect ratio", newWidth, "newWidth");
    finalwidth = newWidth
    finalheight = newHeight
  }

  // Calculate offsets to center the image within the canvas (assuming canvas fills the div)
  const xOffset = (1080 - newWidth) / 2;
  const yOffset = (1350 - newHeight) / 2;

  // Draw the image with calculated dimensions and offsets (contained within canvas)


  const fileUpload = async (formData: FormData) => {
  formData.set("width",finalwidth)
  formData.set("height",finalheight)
    try {
      const response = fetch("http://localhost:3000/api/imageupload", {
        method: "POST",
        body: formData

      }).then(async (response) => {
        
        const data = await response.json()
        console.log(data, "dsjfhhdsghjg");
        if (data.hi) {
          
          router.replace(`/editcampaign?id=${data.campaign_id}`)
        }

      })
    } catch (error) {
    }
  }

  return (
    <main className="">
    
      <div className="flex w-full justify-center">
        <div className="self-center  bg-gray-200 p-4 m-4 rounded-lg">
          <form action={fileUpload}>
            <div className="w-72 mt-4">
              <div className="relative w-full min-w-[200px] h-10 ">
                <input name="campaign_name"
                  className="  border-gray-700  peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                  placeholder=" " /><label
                    className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Campaign Name
                </label>

              </div>
            </div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">Upload file</label>
            <input onChange={(e) => { sizesMaker(e) }} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50  focus:outline-none   " aria-describedby="file_input_help" id="file_input" name="file" type="file" />
            <p className="mt-1 text-sm text-gray-500" id="file_input_help">PNG (MAX. 800x400px).</p>
            <button type="submit" className="p-2 my-2 border-2 border-gray-500 bg-blue-600 text-white rounded-lg hover:bg-blue-400">Upload</button>
          </form>
        </div>
      </div>
    </main>
  );
}
