exports.load = (claseFilename) => {
    var valor = JSON.parse(claseFilename)
    return valor;
}


exports.max_temp = (cities) => {
    if (cities.length === 0) {
        return null; //por si detecta un cities vacio
    }
    let maximaTemperatura = cities[0].main.temp;
    cities.forEach((city) => {
        let temperaturaCiudad = city.main.temp;
        if (temperaturaCiudad > maximaTemperatura){
            maximaTemperatura = temperaturaCiudad;
        }
    });
    return maximaTemperatura;
}

exports.min_temp = (cities) => {
    if (cities.length === 0) {
        return null; //por si detecta un cities vacio
    }
    let minimaTemperatura = cities[0].main.temp;
    cities.forEach((city) => {
        let temperaturaCiudad = city.main.temp;
        if (temperaturaCiudad < minimaTemperatura){
            minimaTemperatura = temperaturaCiudad;
        }
    });
    return minimaTemperatura;
}
