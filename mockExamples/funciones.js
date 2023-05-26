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

module.exports = {
    test,
    test2
}