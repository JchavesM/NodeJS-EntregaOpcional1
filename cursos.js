//Lista de cursos
const cursos = [
    {
        id: 100,
        nombre: 'Algebra Lineal',
        duracion: 128,  //horas
        valor: 90000
    },
    {
        id: 200,
        nombre: 'Ecuaciones Diferenciales',
        duracion: 512,
        valor: 150000
    },
    {
        id: 300,
        nombre: 'Teoria de Grafos',
        duracion: 1024,
        valor: 210000
    }
];

//Metodo que envia la informacion de los cursos con un retardo de dos segundos entre cada uno
let mostrarCursos = (callback) => {
    i = 0;
        var envio = setInterval(function(){
            setTimeout(function(){ i += 1 }, 2000); //indice de la lista de cursos

            if (i > cursos.length - 1){
                clearInterval(envio);   //interrumpe el envio si se ha salido de la lista
            }
            else{
                callback(cursos[i]);    //en otro caso lo envia a consola
            }
        }, 2000); //2 segundos de retardo
    
};

module.exports = {
    cursos,
    mostrarCursos
}