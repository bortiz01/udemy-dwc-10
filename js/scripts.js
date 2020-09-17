//IMPORTANTE!!!
//verificar que todo el documento (index) este cargado antes de ejecutar codigo js
(function () {
  'use strict';
  document.addEventListener('DOMContentLoaded', function () {

    /* ----------------------------- getElementById ----------------------------- */
    // //acceder a un elemento por el ID
    // var logo = document.getElementById('logo');
    // console.log(logo);

    // //verificar si tiene algun atributo (clase, id, elemento) por el nombre
    // let v02 = logo.hasAttribute('class');
    // console.log(v02);

    // //obtener el nombre de ese atributo
    // let v03 = logo.getAttribute('class');
    // console.log(v03);

    // //setear o modificar el valor de un atributo (cambiar la case logo por NewClass)
    // let v04 = logo.setAttribute('class', 'newClass');
    // console.log(v04);

    // //modificar el style o css de algun elemento
    // logo.style.display = 'none';


    /* -------------------------- getElementsByClassName ------------------------- */
    // //acceder al elemento por medio del nombre de la clase
    // let navegacion = document.getElementsByClassName('navegacion');
    // console.log(navegacion);

    // let contenido = document.getElementsByClassName('contenido');
    // console.log(contenido);
    // contenido[0].style.display = 'none';


    /* -------------------------- getElementsByTagName -------------------------- */
    // //obtener el elemento por el nombre de la etiqueta HTML
    // var enlaces = document.getElementsByTagName('a');
    // console.log(enlaces);
    // console.log(enlaces.length);

    // //modificar el valor de algun atributo del elemento
    // for (var i = 0; i < enlaces.length; i++) {
    //   enlaces[i].setAttribute('target', '_blank');
    // }

    // //otener los elementos por id y tag
    // let enlacesSidebar = document.getElementById('sidebar').getElementsByTagName('a');
    // console.log(enlacesSidebar);

    // for (var i = 0; i < enlacesSidebar.length; i++) {
    //   enlacesSidebar[i].setAttribute('href', 'http://google.com');
    // }


    /* ------------------------------ querySelector ----------------------------- */
    // querySelector permite obtener algun elemento por medio de una delaracion similar a CSS

    // //devuelve solo el primer resultado
    // let logo = document.querySelector('.logo');
    // console.log(logo);

    // let encabezado = document.querySelector('aside h2');
    // console.log(encabezado);

    // //devuelve todos los resultados
    // let encabezados = document.querySelectorAll('h2');
    // console.log(encabezados);
    // console.log(encabezados[0].innerText);

    // //es posible realizar busquedas mixtas
    // let mix = document.querySelectorAll('h2, footer p');
    // console.log(mix);


    /* ---------------------------------- Nodos --------------------------------- */
    //   //acceder al valor de los nodos y sus propiedades
    //   let enlaces = document.querySelectorAll('#menu ul li a');
    //   console.log(enlaces[0]);
    //   //se verifica el tipo de elemento o nodo    
    //   console.log(enlaces[0].nodeType); //https://developer.mozilla.org/es/docs/Web/API/Node/nodeType
    //   console.log(enlaces[0].nodeName);
    //   console.log(enlaces[0].attributes);
    //   console.log(enlaces[0].firstChild);
    //   console.log(enlaces[0].firstChild.nodeValue);

    //   enlaces[0].firstChild.nodeValue = 'Home';


    /* ----------------------------- Crear contenido ---------------------------- */
    // // let sidebar = document.getElementById('sidebar');
    // let sidebar = document.querySelector('#sidebar');
    // console.log(sidebar);

    // // adicionar un texto debajo del sidebar
    // let nuevoElemento = document.createElement('H1');
    // let nuevoTexto = document.createTextNode('Hola');
    // nuevoElemento.appendChild(nuevoTexto);
    // sidebar.appendChild(nuevoElemento);

    // // adicionar un nuevo item a la lista del sidebar
    // let enlacesSidebar = document.querySelectorAll('#sidebar ul');

    // let nuevoEnlace = document.createElement('A');
    // nuevoEnlace.setAttribute('href', 'http://www.google.com');

    // let textoEnlace = document.createTextNode('Entrada 6');
    // nuevoEnlace.appendChild(textoEnlace);

    // let nuevaLista = document.createElement('LI');
    // nuevaLista.appendChild(nuevoEnlace);

    // enlacesSidebar[0].appendChild(nuevaLista);


    /* ------------------------------ Clonar nodos ------------------------------ */
    // var contenido = document.querySelector('main');
    // var nuevoContenido = contenido.cloneNode(true);

    // var sidebar = document.querySelector('aside');

    // sidebar.insertBefore(nuevoContenido, sidebar.childNodes[6]);


    /* ----------------------------- Insertar Nodos ----------------------------- */
    // let sidebar = document.querySelector('aside');
    // console.log(sidebar.childNodes);

    // let masVisitados = document.createElement('H2');
    // let textoVisitados = document.createTextNode('Post mas visitados');
    // masVisitados.appendChild(textoVisitados);

    // sidebar.insertBefore(masVisitados, sidebar.childNodes[0]);

    // let contendio = document.querySelectorAll('main h2');
    // console.log(contendio);

    // contendio.forEach(titulo => {
    //   var nuevoElemento = document.createElement('li');
    //   var nuevoTexto = document.createTextNode(titulo.firstChild.nodeValue);

    //   nuevoElemento.appendChild(nuevoTexto);

    //   sidebar.insertBefore(nuevoElemento, sidebar.childNodes[1])
    // });


    /* ----------------------------- Eliminar Nodos ----------------------------- */
    // let primerPost = document.querySelector('main article');
    // console.log(primerPost);
    // //siempre se debe de eliminar indicando el padre (parentNode) para acceder al metodo
    // primerPost.parentNode.removeChild(primerPost);

    // // let enlaces = document.querySelectorAll('#navegacion nav ul li a')[10];
    // let enlaces = document.querySelectorAll('#navegacion nav ul li a');
    // console.log(enlaces);
    // // enlaces.parentNode.removeChild(enlaces);
    // enlaces[10].parentNode.removeChild(enlaces[10]);


    /* ----------------------------- Reemplazar Nodo ---------------------------- */
    var viejoNodo = document.querySelector('main h2');
    let nuevoNodo = document.querySelector('footer h2');
    viejoNodo.parentNode.replaceChild(nuevoNodo, viejoNodo);

    let nuevoTitulo = document.createTextNode('Texto Reemplazado');
    let nuevoNodo2 = document.createElement('h2');
    nuevoNodo2.appendChild(nuevoTitulo);

    var viejoNodo = document.querySelector('main h2');
    viejoNodo.parentNode.replaceChild(nuevoNodo2, viejoNodo);

  });

})();