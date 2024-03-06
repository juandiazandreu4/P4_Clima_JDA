const fs = require('fs')

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
    return maxMinTemperatura;
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

exports.average_temp = (cities) => {
    let valorInicialAcumulador = 0;
    let sumaTemperaturas = cities.reduce(
        (temperaturaAcumulada, ciudad) => {
        return temperaturaAcumulada = temperaturaAcumulada + ciudad.main.temp;
        }, valorInicialAcumulador
    );
    let numeroCiudades = cities.length;
    return sumaTemperaturas/numeroCiudades;
}

exports.warmer_average_temp = (cities) => {
    let temperaturaMedia = exports.average_temp(cities);
    //filter
    let ciudadesTempMayoresMedia = cities.filter((ciudad) => {
        return ciudad.main.temp > temperaturaMedia;
        }
    );
    //map
    let ciudadesNombreTempMayoresMedia = ciudadesTempMayoresMedia.map((ciudad) => {
    return ciudad.name;
    });

    return ciudadesNombreTempMayoresMedia;
};

exports.max_north = (cities) => {
    if (cities.length === 0) {
        return null; //por si detecta un cities vacio
    }
    let mayorLatitud = cities[0].coord.lat;
    let ciudadMasNorte = cities[0].name;
    cities.forEach((city) => {
        let latitudCiudad = city.coord.lat;
        let nombreCiudad = city.name;
        if (latitudCiudad > mayorLatitud){
            mayorLatitud = latitudCiudad;
            ciudadMasNorte = nombreCiudad;
        }
    });
    return ciudadMasNorte;
};

exports.max_south = (cities) => {

};

exports.gravity_center = (cities) => {

};

exports.closest_GC = (cities) => {

};
