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

export function formatDate(dt_txt) {
    const parts = dt_txt.split(' ')[0].split('-');
    const day = parts[2];
    const month = parts[1];
    const year = parts[0];

    return `${day}/${month}/${year}`;
}