//Este es un modulo, en este caso de tareas, el de json. lee el archivo jason, lo puede modificar y guardar. es como ver el back

let fs = require('fs'); //modulo: "Files System" lee un archivo
module.exports = moduloTareas = { //
    archivo : './tarea.json',
    leerJSON : function() {
        let listaDeTareas = fs.readFileSync(this.archivo,'utf-8'); //utf-8 sirve para codificar una cadena de carecteres
        return JSON.parse(listaDeTareas)//traigo el archivo, lo meto en una variable y lo devuelvo parseado
    },
    escribirJSON : function(titulo,estado){
        let nuevaTarea = {
            titulo : titulo,
            estado : estado
        }
        let tareasAnteriores = this.leerJSON();
        tareasAnteriores.push(nuevaTarea);
        this.guardarJSON(tareasAnteriores)
    },
    guardarJSON : function(info){
        let nuevoJSON = JSON.stringify(info);
        fs.writeFileSync(this.archivo,nuevoJSON,'utf-8');
        return console.log('El JSON ha sido guardado exitosamente')
    },
    deshacer : function(){
        let tareas = this.leerJSON()
        tareas.pop()
        this.guardarJSON(tareas)
    },
    buscarTarea : function(busqueda){
        let listaDeTareas = this.leerJSON();
        let tareasFiltradas = listaDeTareas.filter(function(tarea){
            return tarea.titulo.toLowerCase().includes(busqueda.toLowerCase())
        })
        return tareasFiltradas
    },
}