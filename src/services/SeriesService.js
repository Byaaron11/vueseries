import axios from "axios";
import Global from "./../Global";

export default class SeriesServices {

    //Método para que cargen las series en el Dropdown del Menú
    loadSeries() {
        return new Promise(function(resolve){
            var request = "/api/Series";
            var url = Global.url + request;
            var series = [];
            axios.get(url).then(res=>{
                series = res.data;
                resolve(series);
            });
        });
    }
    //Este metodo obtiene los datos de una serie en concreto
    findSerie(id){
        return new Promise(function(resolve){
            var request = "/api/Series/"+id;
            var url = Global.url + request;
            var serie = {};
            axios.get(url).then(res=>{
                serie = res.data;
                resolve(serie);
            });
        });
    }

    //Este obtiene los personajes de una serie pedida
    findCaractersFromThisSerie(id){
        return new Promise(function(resolve){
            var request = '/api/Series/PersonajesSerie/'+id;
            var url = Global.url + request;
            var personajes = [];
            axios.get(url).then(res=>{
                personajes = res.data;
                resolve(personajes);
            });
        });
    }

    //Metodo que crea/postea un nuevo personaje
    createCaracter(personaje){
        return new Promise(function(resolve){
            var request = "/api/Personajes";
            var url = Global.url + request;
            axios.post(url, personaje).then(res=>{
                resolve(res);
            });
        });
    }

    //Metodo para obtener TODOS los pj's de las series 

    loadAllCaracters(){
        return new Promise(function(resolve){
            var request = "/api/personajes";
            var url = Global.url + request;
            var personajes = [];
            axios.get(url).then(res=>{
                personajes = res.data;
                resolve(personajes);
            });
        });
    }
    //Metodo que busca un pj en especifico
    findCaracter(id){
        return new Promise(function(resolve){
            var request = "/api/personajes/"+id;
            var url = Global.url + request;
            var personaje = {};
            axios.get(url).then(res=>{
                personaje = res.data;
                resolve(personaje);
            });
        });
    }

    //Metodo y ultimo para modificar los personajes;
    UpdateCaracter(idPersonaje, idSerie) {
        return new Promise(function(resolve){
            var request = "/api/Personajes/"+idPersonaje+"/"+ idSerie;
            var url = Global.url + request;
            axios.put(url).then(res=>{
                resolve(res);
            });
        });
    }


}