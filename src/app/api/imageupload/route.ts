import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import mongoose from "mongoose";
import { Campaign } from '../models/campaign';

export async function POST(req: NextRequest, res: NextResponse) {
    const body = await req.formData()

    console.log(body);
    const file: any = await body.get("file")
    const campaign = await body.get("campaign_name")
    const height = await body.get("height");
    const width = await body.get("width");


    const buffer = await file?.arrayBuffer()

    mongoose.connect(	"mongodb+srv://muhammedafsalch7:lmEviS1UBnU0xKKD@sharethlight.wsnvmoh.mongodb.net/?retryWrites=true&w=majority&appName=sharethlight")
        .then(() => console.log("Database connected!"))
        .catch(err => console.log(err));

    const createdcampaign = {
        campaign_name: campaign,
        height,
        width,
        rectX: 0, rectY: 0, rectwidth: 0, rectheight: 0
    }

    const createdCompaign = await Campaign.create(createdcampaign);
    console.log(createdCompaign);

    const imagePath = path.join(`./public/campaigns/`, `${campaign}.png`);
    const imageStream = fs.createWriteStream(imagePath);
    imageStream.write(Buffer.from(buffer));

    imageStream.end();


    return NextResponse.json({ hi: "helllo", campaign_id: createdCompaign._id })

}