// CLOCK 
const hourHand = document.getElementById('clock-hour')

function setClock() {
    const currentDate = new Date()

    // 12 hours * 360 deg
    // 60 minutes * 360 deg
    const getMinute = currentDate.getMinutes()
    const minuteDegrees = (getMinute / 60) * 360
    document.getElementById('clock-minutes').style.transform = `rotate(${minuteDegrees}deg)`

    const getHour = currentDate.getHours()
    const hourDegrees = (getHour / 12) * 360
    document.getElementById('clock-hour').style.transform = `rotate(${hourDegrees + minuteDegrees / 12}deg)`
}

setInterval(setClock, 1000) // update every second

function clockText() {
    let currentDate = new Date()

    let dayWeek = currentDate.getDay()
    let month = currentDate.getMonth()
    let day = currentDate.getDate()
    let year = currentDate.getFullYear()
    let hh = currentDate.getHours()
    let mm = currentDate.getMinutes()
    let ampm

    let daysWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', ' Jueves', 'Viernes', ' Sábado']

    let months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

    document.getElementById('date-day-week').innerText = `${daysWeek[dayWeek]}`
    document.getElementById('date-day').innerText = `${day}`
    document.getElementById('date-month').innerText = `${months[month]}`
    document.getElementById('date-year').innerText = `${year}`

    if (hh >= 12) {
        hh = hh - 12
        ampm = 'PM'
    } else {
        ampm = 'AM'
    }

    document.getElementById('text-ampm').innerText = `${ampm}`

    if (hh == 0) {
        hh = 12
    }

    if (hh < 10) {
        hh = `0${hh}`
    }

    document.getElementById('text-hour').innerText = `${hh}:`


    if (mm < 10) {
        mm = `0${mm}`
    }

    document.getElementById('text-minutes').innerText = `${mm}`
}

setInterval(clockText, 1000)
