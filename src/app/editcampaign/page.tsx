"use client"
import { useSearchParams } from "next/navigation"
import EdiCompaignPage from "../components/Editcompaignpage";
import { Suspense } from "react";



export default function Page() {
    
    
    function Search(){
        const params = useSearchParams()
        const campaign_id: string | null = params.get("id");
        return campaign_id
    }
  

    return (
        <>

            <div className="flex">
                <div>
                    <Suspense>
                        <Search  />
                        <EdiCompaignPage campaign_id={Search.campaign_id}/>
                    </Suspense>
                </div>
            </div>

        </>
    )
}
