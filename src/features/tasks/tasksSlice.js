import { createSlice } from "@reduxjs/toolkit";
import { getTasksFronLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: getTasksFronLocalStorage(),
        hideDone: false,
        fetchExampleTasksStatus: "Pobierz przykładowe zadania",
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
        fetchExampleTasks: state => {
            state.fetchExampleTasksStatus = "Loading...";
        },
        setTasks: (state, { payload }) => {
            state.tasks = payload;
            state.fetchExampleTasksStatus = "Pobierz przykładowe zadania";
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
    setTasks
} = tasksSlice.actions;

export const selectTasksState = state => state.tasks;

export const selectTasks = (state) => selectTasksState(state).tasks;
export const selectHideDone = (state) => selectTasksState(state).hideDone;
export const selectFetchExampleTasksStatus = (state) => selectTasksState(state).fetchExampleTasksStatus;
export const getTaskByID = (state, taskID) =>
    selectTasks(state).find(({ id }) => id === taskID);

export default tasksSlice.reducer;
