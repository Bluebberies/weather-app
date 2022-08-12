export const weatherDataObj = {
  current: {
    dt: '',
    temp: '',
    humidity: '',
    pressure: '',
    visibility: '',
    wind_speed: '',
    weather: [{}]
  },
  daily: [
    {},
    {
      dt: '',
      temp: {
        max: '',
        min: ''
      },
      weather: [{}]
    },
    {
      dt: '',
      temp: {
        max: '',
        min: ''
      },
      weather: [{}]
    },
    {
      dt: '',
      temp: {
        max: '',
        min: ''
      },
      weather: [{}]
    },
    {
      dt: '',
      temp: {
        max: '',
        min: ''
      },
      weather: [{}]
    },
    {
      dt: '',
      temp: {
        max: '',
        min: ''
      },
      weather: [{}]
    },
    {
      dt: '',
      temp: {
        max: '',
        min: ''
      },
      weather: [{}]
    }
  ]
}

export const getDate = dt => {
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec'
  ]

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']

  let ts = new Date(dt * 1000)
  let month = monthNames[ts.getUTCMonth()]
  let day = dayNames[ts.getDay()]
  let date = ts.getUTCDate()
  return `${day}, ${date} ${month}`
}

export const handleVisibiltyVal = val => {
  return (val * 0.000621371).toFixed(1)
}

export const convertWindSpeed = val => {
  return Math.round(val * 2.23694)
}
