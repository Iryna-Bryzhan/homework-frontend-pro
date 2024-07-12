import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
  },
});

export const { addTodo } = todosSlice.actions;
export default todosSlice.reducer;
