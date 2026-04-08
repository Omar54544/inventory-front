import mongoose from "mongoose";

const escalarSchema = new mongoose.Schema({
  tipoGuante: { type: String, required: true },
  dificultad: { type: Number, required: true },
});

export default mongoose.model("Escalar", escalarSchema);