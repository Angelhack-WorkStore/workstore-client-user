import {http} from '.'
import axios from 'axios';
import {getRegistData} from '../modules/registration';

export const getDumyAPI = async() => {
  const data = await axios.get("http://localhost:8081/")
  return data.data
}