import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import { Campaign } from "../models/campaign";

export async function POST(req: NextRequest, res: NextResponse) {
    const body = await req.formData()

    const campaign_id = body.get("campaign_id")
    const rectX = body.get("rectX")
    const rectY = body.get("rectY")
    const rectwidth = body.get("rectwidth")
    const rectheight = body.get("rectheight")

    console.log(body);
    mongoose.connect("mongodb+srv://muhammedafsalch7:lmEviS1UBnU0xKKD@sharethlight.wsnvmoh.mongodb.net/?retryWrites=true&w=majority&appName=sharethlight")

    const updatedCampaign = await Campaign.updateOne(
        { _id: campaign_id },
        { $set: { rectX, rectY, rectwidth, rectheight } }
    );

    if (updatedCampaign.modifiedCount > 0) {
        console.log( "Campaign updated successfully");
        return NextResponse.json({status:"Campaign updated successfully"})
    }


    //const campaign = await Campaign.findOne({ _id: campaign_id })
    //console.log(campaign,"kitii");



    return NextResponse.json({status:"pending"})
}

