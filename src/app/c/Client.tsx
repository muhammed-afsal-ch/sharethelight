"use client"

import React, { useEffect, useRef, useState } from 'react'
import { useSearchParams } from "next/navigation"
import Cropper, { ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";
import Modal from '../components/Modal';
import Insta from '../components/icon/Insta';





export default function Client({campaign } : {campaign:any}) {
    console.log(campaign);

    const params = useSearchParams()
    const campaign_name: string | null = params.get("campaign");
    const width: string | null = params.get("width");
    const height: string | null = params.get("height");
    const [Objectimage, setObjectimage] = useState<any>({});
    const [ClientImage, setClientImage] = useState(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [croppedClientImage, setcroppedClientImage] = useState(null);
    const [name, setName] = useState("")


    useEffect(() => {
        fetch(`http://localhost:3000/campaigns/${campaign.campaign_name}.png`).then(
            async (data) => {
                const body = await data.blob();
                const img = new Image();
                const url = URL.createObjectURL(body);
                const canvas = document.getElementById("canvas")
                const ctx = canvas.getContext('2d');
                img.src = url;

                img.onload = () => {

                    ctx.drawImage(img, 0, 0, campaign.width, campaign.height);

                }
                img.src = url;

            }
        );
    }, []);


    const cropperRef = useRef<ReactCropperElement>(null);
    const onCrop = () => {
        const cropper = cropperRef.current?.cropper;
        //console.log(cropper.getCroppedCanvas().toDataURL());
        setcroppedClientImage(cropper.getCroppedCanvas().toDataURL())


    };


    const handleFileChange = (event) => {
        console.log(event.target.files[0]);

        // const canvas = document.getElementById("canvas")
        // const ctx = canvas?.getContext('2d');

        // Fetch coordinates and dimensions from localStorage (assuming they are stored as numbers)

        //Clear the existing rectangle (optional)
        // ctx.clearRect(campaign.rectX, campaign.rectY, campaign.rectwidth, campaign.rectheight); // Uncomment if desired

        const img = new Image();
        const blob = new Blob([event.target.files[0]], { type: 'image/png' });
        const url = URL.createObjectURL(blob);
        setClientImage(url);

        //console.log("normal image", url);
        // img.src = url

        // img.onload = () => {
        //     const pattern = ctx.createPattern(img, 'repeat'); // Create a pattern from the image
        //     ctx.fillStyle = pattern;
        //     ctx.fillRect(campaign.rectX, campaign.rectY, campaign.rectwidth, campaign.rectheight);

        // }


    };

    const NewDraw = () => {
        setIsOpen(false);

        const canvas = document.getElementById("canvas")
        const ctx = canvas?.getContext('2d');

        // Fetch coordinates and dimensions from localStorage (assuming they are stored as numbers)

        const img = new Image();

        //console.log("normal image", url);
        img.src = croppedClientImage

        img.onload = () => {
            //const pattern = ctx.createPattern(img, 'repeat'); // Create a pattern from the image
            //ctx.fillStyle = pattern;
            ctx.drawImage(img, campaign.rectX, campaign.rectY, campaign.rectwidth, campaign.rectheight);
            //ctx.fillRect(campaign.rectX, campaign.rectY, campaign.rectwidth, campaign.rectheight);
            ctx.fillStyle = 'black'; // Set text color (can be changed)
            ctx.font = 'bold 52px Roboto'; // Set font style to bold Roboto with desired size

            // Assuming you want the text at the clicked coordinates (addjextX, addjextY):
            ctx.fillText(name, 500, 1050, 500);
        }


    }

    const Download = () => {
        console.log("poda");

        const canvas = document.getElementById("canvas")
        const link = document.createElement("a");
        link.download = `Poster.jpg`; // Set desired filename with .jpg extension

        // Convert canvas content to data URI with JPG format quality adjustment (optional)
        const dataURL = canvas.toDataURL("image/jpeg", 0.8); // Quality between 0 (low) and 1 (high)

        link.href = dataURL;
        link.click();
    }
    const handleOpenModal = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    return (
        <>

            <div className="flex flex-col items-center bg-gray-100 py-10"  >

                <div className="flex items-center justify-center">
                    <button
                        type="button"
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                        onClick={handleOpenModal}
                    >
                        Select Photo
                    </button>
                    <Modal isOpen={isOpen} onClose={handleCloseModal}>

                        <div className="flex  items-center justify-center flex-col">
                            <div className="flex  w-60  items-center justify-center mb-8  mt-10 p-2 bg-gray-100 border-2 hover:cursor-pointer rounded-full ">
                                {/* <label htmlFor="image-input">Choose Image:</label> */}
                                <span className='mx-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                                    </svg>
                                </span>
                                <input type="file" id="image-input" className='file:border-0 file:bg-transparent file:text-foreground file:text-sm file:hidden' ref={fileInputRef} onChange={handleFileChange} />
                            </div>
                            <div className="flex flex-col mb-5 ">
                                <h1 className='text-center mb-3'>Enter your name</h1>
                                <input type="text" className='px-7 py-2 border-2 rounded-full' onChange={(e) => { setName(e.target.value) }} placeholder='Your Name' name="text" id="text" />
                            </div>
                        </div>
                        {ClientImage === null && (
                            " "
                        )}
                        {ClientImage && (
                            <Cropper
                                src={ClientImage}
                                style={{ height: 400, width: "100%" }}
                                // Cropper.js options
                                initialAspectRatio={campaign.rectwidth / campaign.rectheight}
                                guides={false}
                                crop={onCrop}
                                ref={cropperRef}
                            />
                        )}

                        <div className="flex items-center justify-center mt-10">
                            <button
                                type="button"
                                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded disabled:bg-green-300"
                                onClick={NewDraw}
                                disabled={ClientImage === null ? true : false}
                            >Save</button>
                        </div>
                    </Modal>
                </div>
                <div className=' p-3'>
                    <h1 className='text-xl font-bold p-2 text-center uppercase '>
                        Welcome to {" "}
                        <span className='mx-2 bg-black-400 font-mono font p-2 text-yellow-600 '>{`${campaign.campaign_name} 's`} </span>
                    </h1>
                    <h2 className='text-xl font-bold text-center uppercase '>Compaign </h2>
                </div>

                <div>
                    <canvas style={{ height: "300px !important", overflow: 'hidden' }} id='canvas' ref={canvasRef} height={campaign.height} width={campaign.width} className='border-cyan-500 border-2  m-2'></canvas>
                </div>
                <button disabled={ClientImage === null ? true : false} onClick={() => {
                    Download()

                }} className='m-2 p-2 bg-blue-500 disabled:bg-blue-200 text-white font-bold px-10 rounded-full' style={{ width: "200px" }} >Download</button>
            </div>
        </>
    )
}
