import EscalarRepository from "../../domain/repository/EscalarRepository.js";
import EscalarModel from "../database/models/Escalar.js";

export default class MongoEscalarRepository extends EscalarRepository {
  async save(escalar) {
    const doc = new EscalarModel(escalar);
    return await doc.save();
  }
  async findAll() {
    return await EscalarModel.find();
  }
}