<template>
  <div className="App">
              <h1 class="text-center">Personajes y Series</h1>
              <div className="row">
                <div className="col"></div>
                <div className="col-3">
                  <form method="post" v-on:submit.prevent="realizarCambios">
                    <div className="mb-3">
                      <label htmlFor="formGroupExampleInput2" className="form-label">
                        Seleccione una serie:
                      </label>
                      <select
                        v-model="idSerie"
                        className="form-select"
                        id="selectserie"
                        aria-label="Default select example"
                      >
                        <option v-for="serie in series" :key="serie" :value="serie.idSerie">
                          {{serie.nombre}}
                        </option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="formGroupExampleInput2" className="form-label">
                        Seleccione un personaje:
                      </label>
                      <select
                        v-model="idPersonaje"
                        className="form-select"
                        id="selectpersonaje"
                        aria-label="Default select example"
                      >
                        <option v-for="pj in personajes" :key="pj" :value="pj.idPersonaje">
                          {{pj.nombre}}
                        </option>
                      </select>
                      <button className="btn btn-info mt-4" >
                        Guardar cambios
                      </button>
                    </div>
                  </form>
                </div>
                <div className="col"></div>
              </div>
              <div class="text-center" v-if="status">
                <h2 style="color:red">{{serieResult.nombre}}</h2>
                <img :src="serieResult.imagen" width="300" class="img-thumbnail"/>

                <h2 style="color:blue">{{CaracterResult.nombre}}</h2>
                <img :src="CaracterResult.imagen" width="300" class="img-thumbnail"/>
              </div>
            </div>
</template>

<script>
import SeriesService from './../services/SeriesService';
const service = new SeriesService();
const Swal = require('sweetalert2')
export default {
    name:"UpdateComp",
    data(){
      return{
        status: false,
        series: [],
        personajes:[],
        idSerie: 0,
        idPersonaje: 0,
        serieResult:{},
        CaracterResult: {}
      }
    },
    mounted(){
      service.loadSeries().then(result=>{
        this.series = result;
      });
      service.loadAllCaracters().then(result=>{
        this.personajes = result;
      })
    },
    methods:{
      realizarCambios() {
        //service.UpdateCaracter(this.idPersonaje, this.idSerie)
        Swal.fire({
            position: 'top-end start-50',
            icon: 'success',
            title: 'Cambio realizado',
            showConfirmButton: false,
            timer: 1500
        }).then((result)=>{
            if (result.dismiss === Swal.DismissReason.timer){
              this.status = true;
              service.findSerie(this.idSerie).then(result=>{
                this.serieResult = result
              });
              service.findCaracter(this.idPersonaje).then(result=>{
                this.CaracterResult = result
              });
            }
        })
      }
    }
}
</script>
