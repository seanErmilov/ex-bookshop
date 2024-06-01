'use strict'

function saveToLocalStorage(key, value) {
  const valueStr = JSON.stringify(value)
  localStorage.setItem(key, valueStr)
}

function getFromLocalStorage(key) {
  const valueStr = localStorage.getItem(key)
  return JSON.parse(valueStr)
}
