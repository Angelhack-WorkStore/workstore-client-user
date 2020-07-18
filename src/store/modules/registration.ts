import { ThunkAction } from 'redux-thunk';
import {RootState} from '.';
import {getDumyAPI} from '../apis/test';

const GET_REGIST_DATA = 'registration/GET_REGIST_DATA' as const;


export const getRegistData = (data:any) => ({
  type:GET_REGIST_DATA,
  payload: data
})



type RegistAction = 
  |  ReturnType<typeof getRegistData>

export const getRegistDataThunk = ():ThunkAction<void,RootState,null,RegistAction> => {
  return async(dispatch) => {
      try {
          const data = await getDumyAPI()
          dispatch(getRegistData(data));
      }
      catch (e) {
          console.log(e.error)
      }
  }
}

export type ManageInfoType = {
  dayOfWeek:string,
  startTime:string,
  endTime:string,
  manageType:string,
}

type DataType = {
  name:string,
  address:{
    zipCode:string,
    address1:string,
    address2:string,
  },
  hostInfo: {
    site:string,
    hostEmail:string,
    hostPhoneNumber:string,
  },
  step:string,
  image:any[],
  description:string,
  content:string,
  cautionNotes:string[],
  tags:string[],
  seatInfo: {
    seatCount:number,
    minPersonnelCount:number,
    maxPersonnelCount:number,
    seatType:string,
  },
  manageInfo:ManageInfoType[],
  prices:{
    price:{
       amount:number
    },
    priceType:string,
    minUsageDay:number,
    maxUsageDay:number
  }
  amenities:string[],
}

type RegistType = {
  registData:any[]
}

const initialState: RegistType = {
  registData:[]
}

function registration(state: RegistType = initialState, action: RegistAction) {
  switch (action.type) {
    case GET_REGIST_DATA:
      return {
        ...state,
        registData:action.payload
      }
    default :
      return state;
  }
}

export default registration;

