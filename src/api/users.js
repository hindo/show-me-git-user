import axios from 'axios'
import parseLinkHeader from 'parse-link-header'

import { GITHUB_USER_API_URL } from '../settings'

let link = {}

export function getList () {
  return axios.get(GITHUB_USER_API_URL)
    .then(response => {
      link = parseLinkHeader(response.headers.link)
      return response
    })
}

export function getMore () {
  return axios.get(link.next.url)
    .then(response => {
      link = parseLinkHeader(response.headers.link)
      return response
    })
}

export function getPersona (personaId) {
  return axios.get(`${GITHUB_USER_API_URL}/${personaId}`)
}
