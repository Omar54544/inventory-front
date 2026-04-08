import { createEscalar, getAllEscalars } from "../config/containerEscalar.js";

export default class EscalarController {
    async create(data) {
        return await createEscalar.execute(data);
    }
    async getAll() {
        return await getAllEscalars.execute();
    }
}