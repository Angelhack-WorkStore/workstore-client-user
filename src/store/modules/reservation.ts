const PUT_DATE = 'reservation/PUT_DATE' as const;
const SIGNUP_TRY = 'reservation/SIGNUP_TRY' as const;



export const putDate = (date:any, personnel:number) => ({
  type:PUT_DATE,
  payload: {personnel,date},
})



type AuthAction = 
  |  ReturnType<typeof putDate>



type AuthenticateType = {
  date:string,
  personnel:number,
}

const initialState: AuthenticateType = {
  date:'',
  personnel:1,
}

function reservation(state: AuthenticateType = initialState, action: AuthAction) {
  switch (action.type) {
    case PUT_DATE:
      return {
        ...state,
        date:action.payload.date,
        personnel:action.payload.personnel,
      }
    default :
      return state;
  }
}

export default reservation

