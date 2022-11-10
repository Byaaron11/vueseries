<template>
  <div>
    <div >
          <h1 className="display-4 text-center" style= 'color:blue'>
            Nuevo Personaje
          </h1>
          <div className="row">
            <div className="col"></div>
            <div className="col-4">
              <form method="post" v-on:submit.prevent="crearPersonaje">
                <div className="mb-3">
                  <label htmlFor="formGroupExampleInput" className="form-label">
                    Nombre
                  </label>
                  <input
                    v-model="personaje.nombre"
                    type="text"
                    className="form-control"
                    id="cajanombre"
                    placeholder="Nuevo nombre"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="formGroupExampleInput2"
                    className="form-label"
                  >
                    Imagen
                  </label>
                  <input
                    v-model="personaje.imagen"
                    type="text"
                    className="form-control"
                    id="cajaimagen"
                    placeholder="ej: https://..."
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="formGroupExampleInput2"
                    className="form-label"
                  >
                    Serie:
                  </label>
                  <select
                    v-model="personaje.idSerie"
                    className="form-select"
                    id="cajaselect"
                    aria-label="Default select example"
                  >
                  <option v-for="serie in series" :key="serie" :value="serie.idSerie">
                    {{serie.nombre}}
                  </option>
                
                  </select>
                  <button
                    className="btn btn-outline-success mt-4"
                  >
                    Crear personaje
                  </button>
                </div>
              </form>
            </div>
            <div className="col"></div>
          </div>
        </div>
  </div>
</template>

<script>
import SeriesService from './../services/SeriesService';
const service = new SeriesService();
const Swal = require('sweetalert2')
export default {
    name:"CreateComp",
    data() {
      return{
        series:[],
        personaje:{
          idPersonaje: 0,
          nombre: "",
          imagen: "",
          idSerie: 0
        }
      }
    },
    mounted(){  
      service.loadSeries().then(result=>{
        this.series = result;
      });
    },
    methods: {
      crearPersonaje() {
        service.createCaracter(this.personaje);
        Swal.fire({
            position: 'top-end start-50',
            icon: 'success',
            title: '<span class="text-primary">'+this.personaje.nombre+'</span> fue añadido!',
            showConfirmButton: false,
            timer: 1500
        }).then((result)=>{
            if (result.dismiss === Swal.DismissReason.timer){
                this.$router.push("/cartelera/"+this.personaje.idSerie);
            }
        })
      } 
    }
}
</script>
