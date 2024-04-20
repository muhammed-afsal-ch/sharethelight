import Insta from "./icon/Insta";


export default function PricingCard() {


    return (
        <>
            <div className="flex flex-col items-center text-center bg-gray-200 py-4 px-6 m-4 rounded-lg border-2 border-blue-500 hover:border-blue-800">
                <h1 className="text-2xl font-bold mt-2">Basic <span className="font-light">|</span> $10</h1>
                <hr style={{ width: "100%", border: "3px solid white", marginTop: "10px" }} className="m-4" />
                <p className="text-sm">Lorem ipsum dolor sit nulla ipsum?</p>
                <hr style={{ width: "100%", marginTop: "10px" }} className="m-4 border-1 border-gray-100" />
                <p className="text-sm ">Lorem ipsum dolor sit nulla ipsum?</p>
                <hr style={{ width: "100%", marginTop: "10px" }} className="m-4 border-1 border-gray-100" />
                <p className="text-sm ">Lorem ipsum dolor sit nulla ipsum?</p>
                <hr style={{ width: "100%", marginTop: "10px" }} className="m-4 border-1 border-gray-100" />
                <p className="text-sm ">Lorem ipsum dolor sit nulla ipsum?</p>
                <hr style={{ width: "100%", marginTop: "10px" }} className="m-4 border-1 border-gray-100" />
                <p className="text-sm ">Lorem ipsum dolor sit nulla ipsum?</p>
                <hr style={{ width: "100%", marginTop: "10px" }} className="m-4 border-1 border-gray-100" />
                <p className="text-sm ">Lorem ipsum dolor sit nulla ipsum?</p>
                <hr style={{ width: "100%", marginTop: "10px" }} className="m-4 border-1 border-gray-100" />
                <p className="text-sm ">Lorem ipsum dolor sit nulla ipsum?</p>
                <hr style={{ width: "100%", marginTop: "10px" }} className="m-4 border-1 border-gray-100" />
                <p className="text-sm ">Lorem ipsum dolor sit nulla ipsum?</p>
                <hr style={{ width: "100%", marginTop: "10px" }} className="m-4 border-1 border-gray-100" />
                <p className="text-sm ">Lorem ipsum dolor sit nulla ipsum?</p>
               

                {/* <button className="text-center w-40 text-white hover:text-black bg-blue-500 p-2 mt-5 rounded-md transition-colors font-medium hover:border-2 hover:border-gray-400 hover:bg-blue-400">
                    Create
                </button> */}

                {/* <div className="flex gap-2">
                    <button className=" flex  items-center gap-1 text-center w-30 px-4 text-white hover:text-black bg-blue-500 p-2 mt-5 rounded-md transition-colors font-medium hover:border-2 hover:border-gray-400 hover:bg-blue-400">
                        Create <Insta />
                    </button>
                    <button className=" flex  items-center gap-1 text-center w-30 px-4 text-white hover:text-black bg-green-500 p-2 mt-5 rounded-md transition-colors font-medium hover:border-2 hover:border-gray-400 hover:bg-green-400">
                        Share <Insta />
                    </button>
                </div> */}

                <div className="flex gap-2">
                    <button className=" flex  items-center justify-center gap-1 text-center w-40  text-white hover:text-black bg-blue-500 p-2 mt-5 rounded-md transition-colors font-medium hover:border-2 hover:border-gray-400 hover:bg-blue-400">
                        Choose
                    </button>
                    
                </div>
            </div>
        </>
    )
}

