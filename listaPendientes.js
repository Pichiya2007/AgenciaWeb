let nombrePendiente = document.getElementById("nombrePendiente").value
let prioridadPendiente = document.getElementById("prioridadPendiente").value

function leerDatos(){

    let listaPendientes

    if(localStorage.getItem("listaPendientes") == null){
        listaPendientes = []
    }else{
        listaPendientes = JSON.parse(localStorage.getItem("listaPendientes"))
    }

    let html = ""

    listaPendientes.forEach(function(item, index){
        html += "<tr>"
        html += "<td>" + item.nombrePendiente +"</td>"
        html += "<td>" + item.prioridadPendiente +"</td>"
        html += '<td><button onClick="eliminarPendiente('+ index +')" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Eliminar pendiente</button> <button onClick="editarPendiente('+ index +')" class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Editar pendiente</button>'
        html += "</tr>"
    })

    document.querySelector("#tablaPendientes").innerHTML = html
}

document.onload = leerDatos()

function agregarPendiente(){
    if(true){
        let nombrePendiente = document.getElementById("nombrePendiente").value
        let prioridadPendiente = document.getElementById("prioridadPendiente").value

        let listaPendientes

        if(localStorage.getItem("listaPendientes") == null){
            listaPendientes = []
        }else{
            listaPendientes = JSON.parse(localStorage.getItem("listaPendientes"))
        }

        listaPendientes.push({
            nombrePendiente: nombrePendiente,
            prioridadPendiente: prioridadPendiente
        })

        localStorage.setItem("listaPendientes", JSON.stringify(listaPendientes))
        
        leerDatos()

        document.getElementById("nombrePendiente").value = ""
        document.getElementById("prioridadPendiente").value = ""
    }
}

function eliminarPendiente(index){

    let listaPendientes

    if(localStorage.getItem("listaPendientes") == null){
        listaPendientes = []
    }else{
        listaPendientes = JSON.parse(localStorage.getItem("listaPendientes"))
    }

    listaPendientes.splice(index, 1)
    localStorage.setItem("listaPendientes", JSON.stringify(listaPendientes))

    leerDatos()
}

function editarPendiente(index){
    document.getElementById("btnAgregarPendiente").style.display = "none"
    document.getElementById("btnEditarPendiente").style.display = "block"

    let listaPendientes

    if(localStorage.getItem("listaPendientes") == null){
        listaPendientes = []
    }else{
        listaPendientes = JSON.parse(localStorage.getItem("listaPendientes"))
    }

    document.getElementById("nombrePendiente").value = listaPendientes[index].nombrePendiente
    document.getElementById("prioridadPendiente").value = listaPendientes[index].prioridadPendiente

    document.querySelector("#btnEditarPendiente").onclick = function(){
        if(true){
            listaPendientes[index].nombrePendiente = document.getElementById("nombrePendiente").value
            listaPendientes[index].prioridadPendiente = document.getElementById("prioridadPendiente").value

            localStorage.setItem("listaPendientes", JSON.stringify(listaPendientes))
            leerDatos()

            document.getElementById("nombrePendiente").value = ""
            document.getElementById("prioridadPendiente").value = ""

            document.getElementById("btnAgregarPendiente").style.display = "block"
            document.getElementById("btnEditarPendiente").style.display = "none"
        }
    }
}