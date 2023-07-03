import { createSlice } from '@reduxjs/toolkit';

interface StudentsState {
  students: any[];
}

const initialState: StudentsState = {
  students: [],
};

export const studentsSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    setStudents: (state: StudentsState, action: { payload: any[] }) => {
      state.students = action.payload;
    },
  },
});

export const { setStudents } = studentsSlice.actions;

export default studentsSlice.reducer;
