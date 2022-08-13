import React, { useEffect, useState, useRef } from 'react'
import Row from 'react-bootstrap/Row'
import { ToastContainer, toast } from 'react-toastify'
import getReq from './services/httpService'
import { weatherDataObj, getDate } from './weatherDataObj'
import SideBar from './components/sideBar'
import Main from './components/main'

function App () {
  const [inputVal, setInputVal] = useState('')
  const [showSearch, setShowSearch] = useState(false)
  const [locationName, setLocationName] = useState('')
  const [degreeUnit, setDegreeUnit] = useState('C')
  const [lightMode, setLightMode] = useState(false)
  const [weatherData, setWeatherdata] = useState(weatherDataObj)
  const [ios, setIos] = useState(false)
  const textInput = useRef(null)

  const API_1 = process.env.REACT_APP_API_KEY1
  const API_2 = process.env.REACT_APP_API_KEY2
  const API_3 = process.env.REACT_APP_API_KEY3

  const handleChange = e => {
    setInputVal(e.target.value)
  }

  const setPlace = place => {
    setInputVal(place)
    textInput.current.focus()
  }

  const toggleSearchBar = () => {
    setShowSearch(prevVal => !prevVal)
  }

  const setUnit = unit => {
    setDegreeUnit(unit)
  }

  const toggleMode = () => {
    setLightMode(prevVal => !prevVal)
  }

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  const unitConverter = unit => {
    if (degreeUnit === 'C') {
      return Math.round(unit - 273.15)
    } else if (degreeUnit === 'F') {
      return Math.round((unit - 273.15) * 1.8 + 32)
    }
  }

  const handleSearch = async () => {
    if (inputVal) {
      const url = `https://api.openweathermap.org/geo/1.0/direct?q=${inputVal}&limit=1&appid=${API_1}`
      try {
        const { data } = await getReq(url)
        if (data.length) {
          setLocationName(inputVal.toUpperCase())
          toast.info(`Search Location: ${inputVal.toUpperCase()}`)
          getWeatherData(data[0].lat, data[0].lon)
          setShowSearch(false)
        } else {
          toast('Sorry, no info for this location')
        }
      } catch (error) {
        toast('Sorry, an API error occured!')
        console.log(error)
      }
    } else {
      toast('Please input a location')
    }
  }

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error)
      function success (position) {
        getLocationName(position.coords.latitude, position.coords.longitude)
        getWeatherData(position.coords.latitude, position.coords.longitude)
      }
      function error (error) {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            toast.warn('Please enable location.')
            break
          case error.POSITION_UNAVAILABLE:
            toast.warn('Location information is unavailable.')
            break
          case error.TIMEOUT:
            toast.warn('The request to get location timed out.')
            break
          default:
            toast.warn(
              'An unknown error occurred. Please ensure that locations permission is enabled for this browser'
            )
            break
        }
        console.log(error)
      }
    } else {
      toast.warn('Geolocation is not supported by this browser.')
    }
  }

  const getLocationName = async (lat, lon) => {
    const url = `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=${API_2}`
    try {
      const { data } = await getReq(url)
      setLocationName(data[0].name.toUpperCase())
      toast.info(`Your location: ${data[0].name.toUpperCase()}`)
    } catch (error) {
      console.log(error)
    }
  }

  const getWeatherData = async (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=${API_3}`
    try {
      const { data } = await getReq(url)
      setWeatherdata(data)
    } catch (error) {
      console.log(error)
    }
  }

  const getMobileOperatingSystem = () => {
    let userAgent = navigator.userAgent || navigator.vendor || window.opera
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      setIos(true)
    }
  }

  useEffect(() => {
    const locName = JSON.parse(localStorage.getItem('locName'))

    const handleSearch = async () => {
      if (locName) {
        const url = `https://api.openweathermap.org/geo/1.0/direct?q=${locName}&limit=1&appid=${API_1}`
        try {
          const { data } = await getReq(url)
          if (data.length) {
            setLocationName(locName)
            getWeatherData(data[0].lat, data[0].lon)
            setShowSearch(false)
            console.log(data)
          } else {
            getLocation()
          }
        } catch (error) {
          toast('Sorry, an API error occured!')
          console.log(error)
        }
      } else {
        const url = `https://api.openweathermap.org/geo/1.0/direct?q=Ikeja&limit=1&appid=${API_1}`
        try {
          const { data } = await getReq(url)
          if (data.length) {
            setLocationName('IKEJA')
            getWeatherData(data[0].lat, data[0].lon)
            setShowSearch(false)
          } else {
            toast('Sorry, no info for this location')
          }
        } catch (error) {
          toast('Sorry, an API error occured!')
          console.log(error)
        }
      }
    }

    handleSearch()
    getMobileOperatingSystem()
    const lightTheme = JSON.parse(localStorage.getItem('light'))
    setLightMode(lightTheme)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    localStorage.setItem('light', JSON.stringify(lightMode))
  }, [lightMode])

  useEffect(() => {
    localStorage.setItem('locName', JSON.stringify(locationName))
  }, [locationName])

  return (
    <div className='App'>
      <ToastContainer autoClose={8000} />
      <Row style={{ width: '100%', margin: '0' }}>
        <SideBar
          showSearch={showSearch}
          toggleSearchBar={toggleSearchBar}
          getLocation={getLocation}
          weatherData={weatherData}
          degreeUnit={degreeUnit}
          unitConverter={unitConverter}
          getDate={getDate}
          locationName={locationName}
          inputVal={inputVal}
          textInput={textInput}
          handleChange={handleChange}
          handleKeyDown={handleKeyDown}
          handleSearch={handleSearch}
          setPlace={setPlace}
          lightMode={lightMode}
          ios={ios}
        />
        <Main
          weatherData={weatherData}
          setUnit={setUnit}
          degreeUnit={degreeUnit}
          unitConverter={unitConverter}
          getDate={getDate}
          toggleMode={toggleMode}
          lightMode={lightMode}
        />
      </Row>
    </div>
  )
}

export default App
