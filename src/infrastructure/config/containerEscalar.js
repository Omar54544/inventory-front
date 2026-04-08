import ApiEscalarRepository from "../repositories/ApiEscalarRepository.js";
import CreateEscalar from "../../application/usecases/CreateEscalar.js";
import GetAllEscalars from "../../application/usecases/GetAllEscalars.js";

const repository = new ApiEscalarRepository();
const createEscalar = new CreateEscalar(repository);
const getAllEscalars = new GetAllEscalars(repository);

export { createEscalar, getAllEscalars };