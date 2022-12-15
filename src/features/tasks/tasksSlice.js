import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: [],
        hideDone: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload }) => {
            tasks.push(payload);
        },
        removeTask: ({ tasks }, { payload }) => {
            const index = tasks.findIndex(task => task.id === payload);
            tasks = tasks.splice(index, 1);
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
        toggleTaskDone: ({ tasks }, { payload }) => {
            const index = tasks.findIndex(task => task.id === payload);
            tasks[index].done = !tasks[index].done;
        },
        setAllDone: state => {
            state.tasks.map((task) => (task.done = true));
        },
    },
});

export const { addTask, removeTask, toggleHideDone, toggleTaskDone, setAllDone } = tasksSlice.actions;
export const selectTasks = (state) => state.tasks;
export const selectHideDone = (state) => state.hideDone;
export default tasksSlice.reducer;
