export default class ApiEscalarRepository {
    constructor() {
        this.baseUrl = "/api/escalars";
    }
    async save(escalar) {
        const response = await fetch(this.baseUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(escalar)
        });
        return await response.json();
    }
    async findAll() {
        const response = await fetch(this.baseUrl);
        return await response.json();
    }
}