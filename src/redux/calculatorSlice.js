import { createSlice } from '@reduxjs/toolkit';

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: {
    value: 0,
    operator: null,
    operand: null,
  },
  reducers: {
    calculate: (state, { payload }) => {
      const input = payload;
      if (input === 'AC') {
        state.value = 0;
        state.operator = null;
        state.operand = null;
      } else if (input === '+/-') {
        state.value = -state.value;
      } else if (input === '%') {
        state.value = state.value / 100;
      } else if (['+', '-', '*', '/'].includes(input)) {
        state.operator = input;
        state.operand = state.value;
        state.value = 0;
      } else if (input === '=') {
        if (state.operator && state.operand !== null) {
          switch (state.operator) {
            case '+':
              state.value = Number(state.operand) + Number(state.value);
              break;
            case '-':
              state.value = Number(state.operand) - Number(state.value);
              break;
            case '*':
              state.value = Number(state.operand) * Number(state.value);
              break;
            case '/':
              state.value = Number(state.operand) / Number(state.value);
              break;
            default:
              break;
          }
          state.operator = null;
          state.operand = null;
        }
      } else if (input === '.') {
        if (!String(state.value).includes('.')) {
          state.value = `${state.value}.`;
        }
      } else if (Number.isInteger(+input)) {
        if (state.value === 0) {
          state.value = input;
        } else {
          state.value = `${state.value}${input}`;
        }
      }
    },
  },
});

export const { calculate } = calculatorSlice.actions;
export default calculatorSlice.reducer;
