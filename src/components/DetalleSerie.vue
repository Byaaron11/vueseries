<template>
  <div class="text-center">
    <div class="row">
      <div class="col"></div>
      <div class="col-2">
        <div class="card mt-4" style="width: 18rem">
          <img :src="serie.imagen" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{serie.nombre}}</h5>
            <p class="card-text">
              IMDB: {{serie.puntuacion}}
            </p>
            <router-link :to="'/cartelera/'+serie.idSerie" class="btn btn-primary">Cartelera</router-link>
          </div>
        </div>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>

<script>
import SeriesService from './../services/SeriesService.js';
const service = new SeriesService();
export default {
  name: "DetalleSerie",
  data() {
    return{
        serie: {}
    }
  },
  watch: {
    '$route.params.id'(newVal, oldVal){
        if(newVal != oldVal){
            service.findSerie(newVal).then(result=>{
                this.serie = result
            })
        }
    }
  },
  mounted() {
    service.findSerie(this.$route.params.id).then(result=>{
        this.serie = result;
    })
  }
};
</script>
