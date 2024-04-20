import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import { Campaign } from "../models/campaign";

export async function POST(req: NextRequest, res: NextResponse) {
    const body = await req.formData()
    const campaign_id = body.get("campaign_id")

    console.log(campaign_id);
    mongoose.connect("mongodb+srv://muhammedafsalch7:lmEviS1UBnU0xKKD@sharethlight.wsnvmoh.mongodb.net/?retryWrites=true&w=majority&appName=sharethlight")

    const campaign = await Campaign.findOne({ _id: campaign_id })
    //console.log(campaign,"kitii");
    


    return NextResponse.json(campaign)
}