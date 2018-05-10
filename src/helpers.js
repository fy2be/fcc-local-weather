export function fahrenheitToCelsius(fdeg) {
    return (fdeg - 32) * 5 / 9;
}

export function celsiusToFahrenheit(cdeg) {
    return cdeg * 9 / 5 + 32;
}

export function isEmpty(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}