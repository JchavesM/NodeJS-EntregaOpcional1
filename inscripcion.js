//File System y Servidor
const fs = require('fs');
const express = require('express');
const app = express();

//Campos para la inscripcion
const campos = {
    id: {
        demand: true,
        alias: 'i'
    },
    nombre: {
        demand: true,
        alias: 'n'
    },
    cedula: {
        demand: true, //obligatorio
        alias: 'c'
    }
}

const {cursos, mostrarCursos} = require ('./cursos');

const argv = require('yargs')
            .command('inscribir','Inscripcion de Materias: ', campos)
            .argv
//Si el programa no recibio informacion por consola, muestra la lista de cursos
if(typeof argv.id === "undefined" || typeof argv.nombre === "undefined" ||  typeof argv.cedula === "undefined"){
    mostrarCursos(function(curso){
        console.log('El curso se llama '+curso.nombre+' tiene una duracion de '+curso.duracion+' horas y un valor de '+curso.valor);
    }            )
}
//En caso de recibirla, intenta generar el comprobante si el curso existe, si no le avisa al usuario
else{
    let crearComprobante = (cursos) => {
        const materia = cursos.find(function(element){ if(element.id == argv.id){
                                                              return element} });
        if (materia == undefined){
            console.log('No existe un curso con ese id. Intentalo de nuevo.')
        }
        else{
            texto = 'El estudiante: ' + argv.nombre +
                    ', con cedula '+ argv.cedula +
                    ', se ha matriculado en el curso ' + materia.nombre + '. Tiene una duracion de '+ materia.duracion +' horas y un valor de ' + materia.valor;
            /*
            fs.writeFile('comprobante.txt', texto, (err) =>{
                if (err) throw (err);
            console.log('Se ha creado el archivo')
            
            })*/;
            console.log("Comprobante creado! Buscalo en localhost:3000")
            app.get('/', function (req, res) {  //se envia el comprobante al navegador, localhost -> puerto 3000
                res.send(texto)
              })
            
            app.listen(3000)
        }
        
    };
               
    crearComprobante(cursos);
}