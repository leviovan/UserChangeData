import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import emailjs from 'emailjs-com';
import { boolean } from 'yup';


export interface IUserData {
  firstName: string;
  email: string;
  bio?: string;
  country: string;
  city: string;
  address: string;
}

export interface IFormUserData {
  formUserData:IUserData,
  isLoadingSendEmail:boolean,
  error:string
}
const initialState: IFormUserData = {
 formUserData:{
   firstName: '',
   email: '',
   bio: '',
   country: '',
   city: '',
   address: ''
 },
 isLoadingSendEmail:false,
 error:""
};

export const sendEmail = createAsyncThunk(
  'formUserData/sendEmailTarget',
  async (emailTarget: string,thunkApi) => {

    const newData=thunkApi.getState()!.formUserData!.formUserData
    
    const response = await emailjs.send('service_n5fa0ph','template_6iw6s54',
      {targetEmail:emailTarget,...newData},'sto0Bs6RQmNAGUw8L')

    return ( response.status)
  },
)


export const formUserDataSlice = createSlice({
  name: 'formUserData',
  initialState,
  reducers: {
   updateFormData: (state, action) => {
      state.formUserData = { ...state.formUserData, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(sendEmail.fulfilled, (state, { payload }) => {
      console.log("yes")
    })
    builder.addCase(sendEmail.rejected, (state, action) => {
      console.log("no",action.error)
    })
  },
})

export const { updateFormData} = formUserDataSlice.actions

export default formUserDataSlice.reducer