import { performRequest } from "../../../utils/sendRequest"
const API_URL = 'https://thesimpsonsquoteapi.glitch.me/quotes'

export const getQuotes = () => {
  return performRequest(API_URL)
}

  
