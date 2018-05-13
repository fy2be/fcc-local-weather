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

export function iconToClass(iconId) {
    const icons = {
        '01d': 'wi-day-sunny',
        '01n': 'wi-night-clear',
        '02d': 'wi-day-cloudy',
        '02n': 'wi-night-alt-cloudy',
        '03d': 'wi-day-cloudy-high',
        '03n': 'wi-night-alt-cloudy-high',
        '04d': 'wi-day-cloudy-high',
        '04n': 'wi-night-alt-cloudy-high',
        '09d': 'wi-day-rain',
        '09n': 'wi-night-alt-rain',
        '10d': 'wi-day-rain',
        '10n': 'wi-night-alt-rain',
        '11d': 'wi-day-thunderstorm',
        '11n': 'wi-night-alt-thunderstorm',
        '13d': 'wi-day-snow',
        '13n': 'wi-night-alt-snow',
        '50d': 'wi-day-fog',
        '50n': 'wi-night-fog',
    }

    return icons[iconId];
}

export function degToDirection(deg) {
    Number.prototype.between = function (a, b) {
        const min = Math.min(a, b);
        const max = Math.max(a, b);

        return this >= min && this <= max;
    };

    let direction;

    if (deg.between(337.5, 22.5)) direction = 'N';
    else if (deg.between(22.6, 67.6)) direction = 'NE';
    else if (deg.between(67.7, 112.7)) direction = 'E';
    else if (deg.between(112.8, 157.8)) direction = 'SE';
    else if (deg.between(157.9, 202.9)) direction = 'S';
    else if (deg.between(203, 248)) direction = 'SW';
    else if (deg.between(248.1, 293.1)) direction = 'W';
    else direction = 'NW';

    return direction;
}