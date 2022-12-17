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
        setAllDone: ({ tasks }) => {
            tasks.forEach(task => {
                task.done = true;
            });
        },        
        fetchExampleTasks: () => { },
        setTasks: (state,{payload:tasks})=>{
            state.tasks=tasks;
        },
    },
});

export const {
    addTask,
    removeTask,
    toggleHideDone,
    toggleTaskDone,
    setAllDone,
    fetchExampleTasks,
    setTasks } = tasksSlice.actions;
export const selectTasks = (state) => state.tasks;
export const selectHideDone = (state) => state.hideDone;
export default tasksSlice.reducer;
