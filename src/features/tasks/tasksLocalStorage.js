export const saveTasksInLocalStorage = tasks =>
    localStorage.setItem("tasks", JSON.stringify(tasks));

export const getTasksFronLocalStorage = () =>
    JSON.parse(localStorage.getItem("tasks")) || []

