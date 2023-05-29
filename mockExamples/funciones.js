const { nuevaFuncion2, clientRest } = require('./funciones2');

const test = (text, callback) => {
    console.log(text);
    callback();

    if (text == "asd") {
        callback();
    }
}

const test2 = (status) => {
    if (status) {
        console.info("la info fue correcta")
    } else {
        console.error("no se pudo obtenener la data")
    }
}

const test3 = (text) => {
    console.log(text);
    return nuevaFuncion2();
}

const test4 = () => {
    return new Promise((resolve, reject) => {

        clientRest().post("asdasd").then((resultado) => {
            resolve(resultado);
        }).catch((error) => {
            console.error(error);
            reject(error)
        })
    })
}

module.exports = {
    test,
    test2,
    test3,
    test4
}