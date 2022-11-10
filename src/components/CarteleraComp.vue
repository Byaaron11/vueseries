<template>
  <div>
          <div class="row">
            <div class="col"></div>
            <div class="col-5">
            <router-link :to="'/detalleSerie/'+this.$route.params.id" class='btn btn-danger'>
                Volver
            </router-link>
              <table class="table table-dark">
                <thead>
                  <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Imagen</th>
                  </tr>
                </thead>
                <tbody>
                    <tr v-for="pj in personajes" :key="pj">
                        <td>{{pj.nombre}}</td>
                        <td><img width="250" class="img-thumbnail" :src="pj.imagen"/></td>
                    </tr>
                </tbody>
              </table>
            </div>
            <div class="col"></div>
          </div>
        </div>
</template>

<script>
import SeriesService from './../services/SeriesService';
const service = new SeriesService();
export default {
    name:"CarteleraComp",
    data() {
        return{
            personajes: []
        }
    },
    mounted(){
        service.findCaractersFromThisSerie(this.$route.params.id).then(result=>{
            this.personajes = result;
        });
    }
}
</script>
