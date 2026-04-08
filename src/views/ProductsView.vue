<template>
  <div class="container">
    <h1>Escalars</h1>

    <section class="form-section">
      <h2>Crear nuevo escalar</h2>
      <div class="form-grid">
        <label>
          Tipo de guante:
          <input v-model="newEscalar.tipoGuante" type="text" placeholder="Ej. Cuero" />
        </label>
        <label>
          Dificultad:
          <input v-model="newEscalar.dificultad" type="number" placeholder="Ej. 3" />
        </label>
      </div>
      <button @click="crear">Guardar escalar</button>
    </section>

    <section class="list-section">
      <h2>Lista de escalars</h2>
      <p v-if="isLoading">Cargando...</p>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      <table v-if="escalars.length > 0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tipo Guante</th>
            <th>Dificultad</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="escalar in escalars" :key="escalar._id">
            <td>{{ escalar._id }}</td>
            <td>{{ escalar.tipoGuante }}</td>
            <td>{{ escalar.dificultad }}</td>
          </tr>
        </tbody>
      </table>
      <p v-if="!isLoading && escalars.length === 0">No hay escalars aun.</p>
    </section>
  </div>
</template>

<script>
import EscalarController from "../infrastructure/controllers/EscalarController.js";

const controller = new EscalarController();

export default {
  name: "ProductsView",
  data() {
    return {
      escalars: [],
      newEscalar: { tipoGuante: "", dificultad: 0 },
      isLoading: false,
      errorMessage: ""
    };
  },
  async mounted() {
    await this.cargarEscalars();
  },
  methods: {
    async cargarEscalars() {
      this.isLoading = true;
      try {
        this.escalars = await controller.getAll();
      } catch (e) {
        this.errorMessage = "No se pudo cargar los escalars.";
      } finally {
        this.isLoading = false;
      }
    },
    async crear() {
      try {
        await controller.create(this.newEscalar);
        this.newEscalar = { tipoGuante: "", dificultad: 0 };
        await this.cargarEscalars();
      } catch (e) {
        this.errorMessage = "No se pudo crear el escalar.";
      }
    }
  }
};
</script>