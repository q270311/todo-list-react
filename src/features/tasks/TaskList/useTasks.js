import { useState, useEffect } from "react";

const tasksFromLocalStorage = () => {
    return (localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : []);
};

export const useTasks = () => {
    const [tasks, setTasks] = useState(tasksFromLocalStorage);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);


    const removeTask = (id) => {
        setTasks(tasks => tasks.filter(tasks => tasks.id !== id));
    }
    const toggleTaskDone = (id) => {
        setTasks(tasks => tasks.map(task => {
            if (task.id === id) {
                return { ...task, done: !task.done };
            }

            return task;
        }));
    }
    const setAllDone = () => {
        setTasks(tasks => tasks.map(task => (
            { ...task, done: true, }
        )));
    }
/*     const addNewTask = (content) => {
        setTasks(tasks => [
            ...tasks,
            {
                content,
                done: false,
                id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
            }
        ]);
    } */

    return {
        //tasks: tasks,
        removeTask: removeTask,
        toggleTaskDone: toggleTaskDone,
        setAllDone: setAllDone,
        // addNewTask: addNewTask,
    }
}