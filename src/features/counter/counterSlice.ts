import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    //increment 
    incremented(state) {
      //it uses emmer library under the hood
      state.value += 1;
    },
    amountAdded(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
    //decrement
    decremented(state) {
      //it uses emmer library under the hood
      state.value -= 1;
    }
    //reset
  }

});

export const { incremented, decremented, amountAdded } = counterSlice.actions;
export default counterSlice.reducer;




