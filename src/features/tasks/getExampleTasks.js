import axios from "axios";

export const getExampleTasks = async () => {
    const response = await axios.get("/todo-list-react/exampleTasks.json");
    if (!response.ok) {
        new Error(response.statusText);
    }
    return await response.data;
};