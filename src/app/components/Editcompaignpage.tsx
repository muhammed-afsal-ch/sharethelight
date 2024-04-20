"use client"
import React, { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ShareLink from './ShareLink';

const shapes = ['Image Area', 'Round Image', 'text'];

interface Props {
  campaign_id: string | null;
}

const EdiCompaignPage: React.FC<Props> = ({ campaign_id, }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [Objectimage, setObjectimage] = useState<any>({});
  const [CampImage, setCampImage] = useState(null);
  const [addjextX, setAddjextX] = useState(0)
  const [addjextY, setAddjextY] = useState(0)
  const router = useRouter()
  const [compaignDetails, setCompaignDetails] = useState({})
  const [isOpen, setIsOpen] = useState(false);
  const [preset, setpreset] = useState("")


  // const caller = async () => {

  //   const data = new FormData()
  //   data.set("campaign_id", campaign_id);

  //   const res = await fetch(`http://localhost:3001/api/getcompaign`, {
  //     method: "POST",
  //     body: data
  //   })
  //   const compaign = await res.json();
  //   setCompaignDetails(compaign)
  //   //console.log(compaign);


  //   // fetch(`http://localhost:3001/campaigns/${compaign.campaign_name}.png`).then(
  //   //   async (data) => {
  //   //     const body = await data.blob();
  //   //     const img: any = await new Image();
  //   //     const url = URL.createObjectURL(body);
  //   //     img.src = url;
  //   //     img.onload = () => {
  //   //       setObjectimage({ width: img.width, height: img.height });
  //   //     };
  //   //     setCampImage(img);

  //   //   }
  //   // );
  //   const info = await fetch(`http://localhost:3001/campaigns/${compaign.campaign_name}.png`)
  //   const campain = await info.blob()
  //   const img: any = new Image();
  //   const url = await URL.createObjectURL(campain);
  //   img.src = url;
  //   img.onload = () => {
  //     setObjectimage({ width: img.width, height: img.height });
  //   };
  //   setCampImage(img);

  // }

  useEffect(() => {
    const caller = async () => {
      const data = new FormData()
      data.set("campaign_id", campaign_id);
      const res = await fetch(`http://localhost:3000/api/getcompaign`, {
        method: "POST",
        body: data
      })
      const compaign = await res.json();
      setCompaignDetails(compaign)
      //console.log(compaign);


      // fetch(`http://localhost:3001/campaigns/${compaign.campaign_name}.png`).then(
      //   async (data) => {
      //     const body = await data.blob();
      //     const img: any = await new Image();
      //     const url = URL.createObjectURL(body);
      //     img.src = url;
      //     img.onload = () => {
      //       setObjectimage({ width: img.width, height: img.height });
      //     };
      //     setCampImage(img);

      //   }
      // );
      const info = await fetch(`http://localhost:3000/campaigns/${compaign.campaign_name}.png`)
      const campain = await info.blob()
      const img: any = new Image();
      const url = await URL.createObjectURL(campain);
      img.src = url;
      img.onload = () => {
        setObjectimage({ width: img.width, height: img.height });
        const canvas = document.getElementById("myCanvas")
        const ctx = canvas.getContext("2d")
        ctx.drawImage(img, 0, 0, compaign.width, compaign.height)
      };
      setCampImage(img);

    }
    caller()
  }, []);
  useEffect(() => {
    if (CampImage) {
      const canvas = canvasRef.current
      const ctx = canvas?.getContext("2d")
      ctx?.drawImage(CampImage, 0, 0, compaignDetails.width, compaignDetails.height)
    }
  }, [CampImage])



  const [isDrawing, setIsDrawing] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [selectedShape, setSelectedShape] = useState<string>(shapes[0]); // Default shape

  const handleMouseDown = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    setIsDrawing(true);
    const { clientX, clientY } = event.nativeEvent;
    setStartX(clientX - event.currentTarget.offsetLeft);
    setStartY(clientY - event.currentTarget.offsetTop);

    // localStorage.setItem('clientX',JSON.stringify(clientX));
    // localStorage.setItem('clientY',JSON.stringify(clientY));
    console.log({ clientX, clientY });

    ////////////////////////////////////////////////////////////////////

    const canvasRect = canvas.getBoundingClientRect(); // Get canvas position
    const adjustedX = clientX - canvasRect.left; // Adjust X for canvas position
    const adjustedY = clientY - canvasRect.top; // Adjust Y for canvas position
    setAddjextX(adjustedX)
    setAddjextY(adjustedY)
    console.log("olkkaX", adjustedX, "olkkaY", adjustedY);
    localStorage.setItem('clientX', JSON.stringify(adjustedX));
    localStorage.setItem('clientY', JSON.stringify(adjustedY));

    ////////////////////////////////////////////////////////////////////

  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  const drawShape = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!isDrawing) return;

    if (!canvas) return;

    if (!ctx) return;
    const { clientX, clientY } = event.nativeEvent;
    const endX = clientX - event.currentTarget.offsetLeft;
    const endY = clientY - event.currentTarget.offsetTop;

    const rectwidth = endX - startX;
    const rectheight = endY - startY;
    localStorage.setItem('width', JSON.stringify(rectwidth));
    localStorage.setItem('height', JSON.stringify(rectheight));

    // Draw the image with calculated dimensions and offsets (contained within canvas)
    //console.log({CampImage, xOffset, yOffset, newWidth, newHeight});



    switch (selectedShape) {
      case 'Image Area':
        console.log(selectedShape, preset);
        if (selectedShape === 'Image Area' && preset === 'Image Area') {
          ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous shape
          ctx.drawImage(CampImage, 0, 0, compaignDetails.width, compaignDetails.height);
        }
        setpreset('Image Area')
        ctx.fillStyle = 'green';
        ctx.fillRect(addjextX, addjextY, rectwidth, rectheight);
        ctx.strokeRect(addjextX, addjextY, rectwidth, rectheight);
        break;
      case 'text':
        console.log(selectedShape, preset);
        if (selectedShape === "text") {
          ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous shape
          ctx.drawImage(CampImage, 0, 0, compaignDetails.width, compaignDetails.height);
        }
        setpreset('text')
        ctx.fillStyle = 'yellow';
        ctx.fillRect(addjextX, addjextY, rectwidth, rectheight);

        console.log("Text box", { addjextX, addjextY, rectwidth, rectheight });
        localStorage.setItem('textX', JSON.stringify(rectwidth));
        localStorage.setItem('textY', JSON.stringify(rectheight));
        localStorage.setItem('textwidth', JSON.stringify(rectwidth));
        localStorage.setItem('textheight', JSON.stringify(rectheight));


        break;
      case 'Round Image':
        console.log(selectedShape, preset);
        if (selectedShape === "Round Image") {
          ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous shape
          ctx.drawImage(CampImage, 0, 0, compaignDetails.width, compaignDetails.height);
        }
        setpreset('Round Image')
        const radius = Math.min(rectwidth, compaignDetails.height) / 2;
        ctx.beginPath();
        ctx.arc(startX + radius, startY + radius, radius, 0, 2 * Math.PI);
        ctx.stroke();
        break;
    }

  };

  const getData = async () => {

    const rectX = Number(localStorage.getItem('clientX'));
    const rectY = Number(localStorage.getItem('clientY'));
    const rectwidth = Number(localStorage.getItem('width'));
    const rectheight = Number(localStorage.getItem('height'));

    const textX = Number(localStorage.getItem('textX'));
    const textY = Number(localStorage.getItem('textY'));
    const textwidth = Number(localStorage.getItem('textwidth'));
    const textheight = Number(localStorage.getItem('textheight'));


    const rectangleData = new FormData()
    rectangleData.set("rectX", rectX);
    rectangleData.set("rectY", rectY);
    rectangleData.set("rectwidth", rectwidth);
    rectangleData.set("rectheight", rectheight);
    rectangleData.set("campaign_id", compaignDetails._id);
    

    const rect = await fetch(`http://localhost:3000/api/setrect`, {
      method: "POST",
      body: rectangleData
    })
    const resopnse = await rect.json();
    console.log(resopnse);
    if (resopnse.status === "Campaign updated successfully") {
      setIsOpen(true);

    }



    // router.replace(`/c?id=${compaignDetails.campaign_id}&width=${compaignDetails.width}&height=${compaignDetails.height}`)
  }
  const handleClosePopup = () => {
    navigator.clipboard.writeText(`http://localhost:3000/${compaignDetails.campaign_name}`)
    setIsOpen(false);
  };
  return (
    <>
      <div className="flex flex-col">
        <ShareLink isOpen={isOpen} onClose={handleClosePopup} shareLink={`http://localhost:3000/${compaignDetails.campaign_name}`} />
        <h1 className="font-bold text center">Campaign Name : {compaignDetails.campaign_name}</h1>
        <h1 className="font-bold text center">Set your Image and Text Details</h1>
        <div className='max-w-40' >
          <select
            value={selectedShape}

            onChange={(e) => {
              setSelectedShape(e.target.value);
              getData()
            }}
            className="bg-gray-100 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 w-full"
          >
            {shapes.map((shape) => {

              return (
                <option key={shape} value={shape} >
                  {shape.charAt(0).toUpperCase() + shape.slice(1)}
                </option>
              )
            })}
          </select>
          <div className="flex items-center justify-center  mt-2 p-2 bg-gray-100 border-2 hover:cursor-pointer rounded-full ">
            <button className='flex'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg> <span>Reset</span>
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center mr-4">
            <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 5a1 1 0 0 0-1.414 1.414L3.414 10l6.586 6.586a1 1 0 0 0 1.414-1.414L10 5z" clipRule="evenodd" fillRule="evenodd" />
            </svg>
          </div>

        </div>
        {/* width={Objectimage.width} height={Objectimage.height} */}
        <div className='flex flex-col mt-10' >
          <canvas className='bg-cyan-400' id='myCanvas' height={compaignDetails.height} width={compaignDetails.width} ref={canvasRef} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseMove={drawShape} />
          <button className='p-2 my-1 rounded-full font-bold bg-green-500 ' onClick={getData} >Save</button>
        </div>

      </div>
      <br />
      <hr />

    </>
  );
};

export default EdiCompaignPage;