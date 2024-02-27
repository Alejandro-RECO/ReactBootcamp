import { performRequest } from "../../../utils/sendRequest"
const API_URL = 'https://thesimpsonsquoteapi.glitch.me/quotes?count=1'
const CHARACTER_SLUG = '&character='

export const getQuotes = () => {
  return performRequest(API_URL)
}

export const getQuotesByCharacter = (character) => {
  return performRequest(API_URL.concat(CHARACTER_SLUG, character))
}  
