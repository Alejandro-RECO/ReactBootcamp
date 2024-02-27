import { performRequest } from "../../../utils/sendRequest"
const API_URL = 'https://thesimpsonsquoteapi.glitch.me/quotes'
const CHARACTER_SLUG = '&character='
const CHARACTER_COUN = '?count='

export const getQuotes = () => {
  return performRequest(API_URL)
}

export const getQuotesByCharacter = (count,character) => {
  return performRequest(API_URL.concat(CHARACTER_COUN,count, CHARACTER_SLUG, character))
}


  
