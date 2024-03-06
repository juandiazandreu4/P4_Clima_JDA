

exports.load = (claseFilename) => {
    var valor = JSON.parse(fs.readFileSync(claseFilename))
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

exports.max_temp_min = (cities) => {
    if (cities.length === 0) {
        return null; //por si detecta un cities vacio
    }
    let maxMinTemperatura = cities[0].main.temp_min;
    cities.forEach((city) => {
        let temperaturaCiudad = city.temp_min;
        if (temperaturaCiudad > maxMinTemperatura){
            maxMinTemperatura = temperaturaCiudad;
        }
    });
    return maxminTemperatura;
}

exports.min_temp_max = (cities) => {
    if (cities.length === 0) {
        return null; //por si detecta un cities vacio
    }
    let minMaxTemperatura = cities[0].main.temp_max;
    cities.forEach((city) => {
        let temperaturaCiudad = city.temp_max;
        if (temperaturaCiudad < minMaxTemperatura){
            minMaxTemperatura = temperaturaCiudad;
        }
    });
    return minMaxTemperatura;
}

