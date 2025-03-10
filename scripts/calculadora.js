let producto = document.getElementById('producto')
let plazo = document.getElementById('plazo')
let colorperso = document.getElementById('colorperso')
let ram = document.getElementById('ram')
let almacen = document.getElementById('almacen')
let presupuesto = document.getElementById('presupuesto')

// llama a todas las demas funciones para calcular el presupuesto final, teniendo en cuenta las opciones del formulario
// cada vez que se realice un cambio en una opcion se llamara a esta funcion para recalcular el presupuesto completo
function calcular_presupuesto(){
    let precio = 0;

    precio = anadir_producto(precio);
    precio = anadir_extras(precio);
    precio = anadir_plazo(precio);

    presupuesto.value = precio;
}

// suma el valor del modelo de movil
function anadir_producto(precio){
    switch (producto.value) {
        case "galaxy_s21":
            precio += 100;
            break;
        case "galaxy_s23":
            precio += 150;
            break;
        case "google_pixel8":
            precio += 200;
            break;
        case "google_pixel9":
            precio += 250;
            break;
        case "iphone_se":
            precio += 300;
            break;
        case "motorola_edge_50":
            precio += 350;
            break;
        case "realme_gt2":
            precio += 400;
            break;
        case "xiaomi_13t":
            precio += 450;
            break;
        case "xiaomi_redmi_note_12":
            precio += 500;
            break;
    }
    return precio;
}

// descuento calculado en base a los dias que tardara en entregarse el producto
// el precio se reduce un 2% por cada dia adicional que tarde en hacerse la entrega 
// hasta un maximo de un 14%
function anadir_plazo(precio){
    // calcular descuento, 2% por dia superior al 1
    if (plazo.value > 7) {
        precio = precio * .86;
    } else if (plazo.value > 0) {
        let descuento = (100 - (plazo.value - 1) * 2) / 100
        precio = precio * descuento
    }
    return parseFloat(precio).toFixed(2); // max dos decimales
}

function anadir_extras(precio){
    if (colorperso.checked){precio += 10;}
    if (ram.checked){precio += 20;}
    if (almacen.checked){precio += 30;}
    return precio;
}