let nombrePendiente = document.getElementById("nombrePendiente").value
let prioridadPendiente = document.getElementById("prioridadPendiente").value

function leerDatos(){

    let listaPendientes

    if(localStorage.getItem("listaPendientes") == null){
        listaPendientes = []
    }else{
        listaPendientes = JSON.parse(localStorage.getItem("listaPendientes"))
    }

    listaPendientes.sort((a, b) => b.prioridadPendiente - a.prioridadPendiente)

    let html = ""

    listaPendientes.forEach(function(item){
        html += "<tr class=odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700>"
        html += "<td class=px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white>" + item.nombrePendiente +"</td>"
        html += "<td class=px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white>" + item.prioridadPendiente +"</td>"
        html += '<td class="px-6 py-4"><button onClick="eliminarPendiente(\'' + item.id + '\')" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Eliminar pendiente</button><button onClick="editarPendiente(\'' + item.id + '\')" class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Editar pendiente</button>';
        html += "</tr>"
    })

    document.querySelector("#tablaPendientes tbody").innerHTML = html
}

document.onload = leerDatos()

function agregarPendiente(){

    let nombrePendiente = document.getElementById("nombrePendiente").value
    let prioridadPendiente = document.getElementById("prioridadPendiente").value

    let listaPendientes

    if(localStorage.getItem("listaPendientes") == null){
        listaPendientes = []
    }else{
        listaPendientes = JSON.parse(localStorage.getItem("listaPendientes"))
    }

    let id = new Date().getTime().toString()

    listaPendientes.push({
        id: id,
        nombrePendiente: nombrePendiente,
        prioridadPendiente: prioridadPendiente
    })

    localStorage.setItem("listaPendientes", JSON.stringify(listaPendientes))
        
    leerDatos()

    document.getElementById("nombrePendiente").value = ""
    document.getElementById("prioridadPendiente").value = ""
}

function eliminarPendiente(id){

    let listaPendientes

    if(localStorage.getItem("listaPendientes") == null){
        listaPendientes = []
    }else{
        listaPendientes = JSON.parse(localStorage.getItem("listaPendientes"))
    }

    listaPendientes = listaPendientes.filter(item => item.id !== id)
    localStorage.setItem("listaPendientes", JSON.stringify(listaPendientes))

    leerDatos()
}

function editarPendiente(id){
    
    document.getElementById("btnAgregarPendiente").style.display = "none"
    document.getElementById("btnEditarPendiente").style.display = "block"

    let listaPendientes

    if(localStorage.getItem("listaPendientes") == null){
        listaPendientes = []
    }else{
        listaPendientes = JSON.parse(localStorage.getItem("listaPendientes"))
    }

    let pendiente = listaPendientes.find(item => item.id === id)

    document.getElementById("nombrePendiente").value = pendiente.nombrePendiente
    document.getElementById("prioridadPendiente").value = pendiente.prioridadPendiente

    document.querySelector("#btnEditarPendiente").onclick = function(){
        pendiente.nombrePendiente = document.getElementById("nombrePendiente").value
        pendiente.prioridadPendiente = document.getElementById("prioridadPendiente").value

        localStorage.setItem("listaPendientes", JSON.stringify(listaPendientes))
        leerDatos()

        document.getElementById("nombrePendiente").value = ""
        document.getElementById("prioridadPendiente").value = ""

        document.getElementById("btnAgregarPendiente").style.display = "block"
        document.getElementById("btnEditarPendiente").style.display = "none"
    }
}