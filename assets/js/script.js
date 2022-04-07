//Función flecha para capturar Inputs del formulario.
//Se recibe parámetro "event" para ser aplicado ante el refresh por defecto.

let data = (event) => {
    //Previene comportamiento por defecto
    event.preventDefault()

    //Captura de Inputs del usuario en formulario según Id
    let owner = document.getElementById('propietario').value
    let phone = document.getElementById('telefono').value
    let address = document.getElementById('direccion').value
    let petName = document.getElementById('nombreMascota').value
    let specie = document.getElementById('tipo').value
    let disease = document.getElementById('enfermedad').value

    //Instanciar según tipo de mascota seleccionada
    if (specie == 'gato') {

        let gato = new Mascota(owner, phone, address, specie, petName, disease)

        resultado.innerHTML = `${gato.datosPropietario()}.\n${gato.datosMascota()}.`

    } else if (specie == 'perro') {

        let perro = new Mascota(owner, phone, address, specie, petName, disease)

        resultado.innerHTML = `${perro.datosPropietario()}.\n${perro.datosMascota()}.`

    }
    if (specie == 'conejo') {

        let conejo = new Mascota(owner, phone, address, specie, petName,  disease)

        resultado.innerHTML = `${conejo.datosPropietario()}.\n${conejo.datosMascota()}.`


    }
    //Limpiar Imputs
    
    document.getElementById('propietario').value = ''
    document.getElementById('telefono').value = ''
    document.getElementById('direccion').value = ''
    document.getElementById('nombreMascota').value = ''
    document.getElementById('tipo').value = ''
    document.getElementById('enfermedad').value = ''
    
}

let formulario = document.querySelector('form')

//Se establece "listener" y función desencadenada (función data) cuando el  evento se activa

formulario.addEventListener('submit', data)

//Establecimiento de conctructores y métodos para Clases
class Propietario {
    constructor(owner, phone, address) {
        this.owner = owner
        this.phone = phone
        this.address = address
    }

    datosPropietario() {
        console.log(`\nEl nombre de el/la propietario(a), es Srta./Sra.Sr. ${this.owner}, es domiciliado(a) en ${this.address} y tiene número telefónico de contacto ${this.phone}.\n`)

        return (`<br></ul><li>El nombre de el/la propietario(a), es Srta./Sra.Sr. ${this.owner}, es domiciliado(a) en ${this.address} y tiene número telefónico de contacto ${this.phone}.</li>`)
    }
}

//Establecimiento de constructores y métodos para Clases que extienede Clase Padre
class Animal extends Propietario {
    constructor(owner, phone, address, specie) {
        super(owner, phone, address)
        this._specie = specie
    }

    get tipo() {
        return this._specie
    }

}


//Establecimiento de constructores y métodos para Clases que extienede Clase Padre
class Mascota extends Animal {
    constructor(owner, phone, address, specie, petName, disease) {
        super(owner, phone, address, specie)
        this._petName = petName
        this._disease = disease
    }

    get petName() {
        return this._petName
    }

    set petName(newPetName) {
        this._petName = newPetName
    }

    get disease() {
        return this._disease
    }

    set disease(newdisease) {
        this._disease = newdisease
    }

    
    datosMascota() {
        console.log(``)

        return (``)

    }

    datosMascota() {
        console.log(`\nEl tipo de animal es un ${this._specie}, que responde al nombre de ${this._petName}, presenta ${this._disease} de acuerdo a lo señalado por su dueño(a).`)
    
        return (`<li>El tipo de animal es un ${this._specie}, que responde al nombre de ${this._petName}, presenta ${this._disease} de acuerdo a lo señalado por su dueño(a).</li></ul>`)
    }
}

