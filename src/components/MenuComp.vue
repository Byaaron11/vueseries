<template>
  <nav style="background-color:#e3f2fd" class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img class="img-thumbnail" width="100" src="https://dbdzm869oupei.cloudfront.net/img/sticker/preview/9371.png"/>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/create">Nuevo personaje</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/update">Modificar personajes</router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Series
            </a>
            <ul class="dropdown-menu">
                <li v-for="serie in series" :key="serie">
                    <router-link class="dropdown-item" :to="'/detalleSerie/'+serie.idSerie">
                        {{serie.nombre}}
                    </router-link>
                </li>
              <!-- <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li> -->
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import ServicesSeries from './../services/SeriesService';
const service = new ServicesSeries();
export default {
    name:"MenuComp",
    data(){
        return{
            series:[]
        }
    },
    mounted(){
        service.loadSeries().then(result=> {
            this.series = result;
        })
    }
};
</script>
