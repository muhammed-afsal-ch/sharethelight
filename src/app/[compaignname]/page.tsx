import mongoose from "mongoose"
import { Campaign } from "../api/models/campaign"
import { redirect } from "next/navigation"
import Client from "../c/Client"



export default function Page({ params }: { params: { compaignname: string } }) {

  mongoose.connect(	"mongodb+srv://muhammedafsalch7:lmEviS1UBnU0xKKD@sharethlight.wsnvmoh.mongodb.net/?retryWrites=true&w=majority&appName=sharethlight")
  const Check = async () => {
    const campaign = await Campaign.findOne({ campaign_name: params.compaignname })
    console.log(campaign);
    if (campaign) {
      return (
        <>
            <Client campaign={campaign}/>
        </>
      )
    } else {
      redirect("/")
    }
  }
  Check()


  return (
    <>
      <Check />
    </>
  )
}