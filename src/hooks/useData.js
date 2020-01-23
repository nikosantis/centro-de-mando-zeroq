import { useState, useEffect } from 'react'

import axios from 'axios'
import moment from 'moment'
import momentDurationPlugin from 'moment-duration-format'
momentDurationPlugin(moment)

const API_URL = 'https://boiling-mountain-49639.herokuapp.com/desafio-frontend'
const dataState = []
const dataStateFiltered = []

export const useData = () => {
  const [query, setQuery] = useState('')
  const [data, setData] = useState(dataState)
  const [dataFiltered, setDataFiltered] = useState(dataStateFiltered)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isResults, setIsResults] = useState(true)

  const _handleChange = (e) => {
    setQuery(e.target.value)
  }

  const sum = nums => {
    return nums.reduce((acc, val) => acc + val)
  }
  const avg = nums => {
    return nums.reduce((a, b) => (a + b)) / nums.length
  }

  const _newData = (dataApi) => {
    const _data = []

    dataApi.map((sucursal, inc) => {
      const result = {
        name: dataApi[inc++].name,
        online: sucursal.online,
        dataLines: Object.values(sucursal.lines)
      }
      _data.push(result)
    })

    _data.map((suc) => {
      const counter = suc.dataLines
      const wait = []
      const time = []

      counter.map((suc, inc) => {
        wait.push(counter[inc].waiting)
        time.push(counter[inc].elapsed)
      })

      const persons = sum(wait)
      const seconds = avg(time)
      const duration = moment.duration(seconds, 'seconds').format()

      const result = {
        name: suc.name,
        online: suc.online,
        persons,
        duration
      }

      dataState.push(result)
      dataStateFiltered.push(result)
    })
  }

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false)
      setIsLoading(true)

      try {
        const result = await axios.get(API_URL)
        const dataResult = await result.data
        _newData(dataResult)
      } catch (error) {
        setIsError(true)
      }
      setQuery('')
      setIsLoading(false)
    }
    fetchData()
  }, [])

  useEffect(() => {
    setIsResults(true)
    if (query !== '') {
      const filtered = data.filter(item => {
        return item.name.toLowerCase().includes(query)
      })
      setDataFiltered(filtered)
      filtered.length === 0
        ? setIsResults(false)
        : setIsResults(true)
    }
    if (query === '') {
      setDataFiltered(data)
      data === []
        ? setIsResults(false)
        : setIsResults(true)
    }
  }, [query])

  return {
    dataFiltered,
    isLoading,
    isError,
    query,
    _handleChange,
    isResults
  }
}
