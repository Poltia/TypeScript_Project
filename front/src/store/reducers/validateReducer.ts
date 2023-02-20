import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IvalidateState {
  validate: {
    validateData: {
      password: boolean;
      text: boolean;
    };
  };
}

export const ValidateSlice = createSlice({
  name: "validate",

  initialState: {
    validateData: {
      password: false,
      text: false,
    },
  },

  reducers: {
    validatePassword: (state, action: PayloadAction<boolean>) => {
      state.validateData.password = action.payload;
    },
    validateText: (state, action: PayloadAction<boolean>) => {
      state.validateData.text = action.payload;
    },
  },
});

export const { validatePassword, validateText } = ValidateSlice.actions;
export const selectValidatePassword = (state: IvalidateState) =>
  state.validate.validateData.password;
export const selectValidateText = (state: IvalidateState) =>
  state.validate.validateData.text;

export default ValidateSlice.reducer;
