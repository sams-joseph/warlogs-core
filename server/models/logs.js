import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, default: Date.now },
  raw: { type: Array },
  healing: { type: Array },
  damage: { type: Array },
  damageTaken: { type: Array },
  deaths: { type: Array },
  damageCasters: { type: Array },
  healingCasters: { type: Array }
});

export default mongoose.model("Log", schema);
