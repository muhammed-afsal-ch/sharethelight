import { model, models, Schema } from "mongoose";

const campaignSchema = new Schema({
    // name: { type: String },
    campaign_name: { type: String },
    height: {type: Number},
    width: {type: Number},
    rectX: {type: Number},
    rectY: {type: Number},
    rectwidth: {type: Number},
    rectheight: {type: Number},

    
  }, { timestamps: true });
  
  
  export const Campaign = models?.Campaign || model('Campaign', campaignSchema);
