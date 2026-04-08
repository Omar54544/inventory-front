export default class CreateEscalar {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(data) {
        return await this.repository.save(data);
    }
}