import React, { createContext, useState } from 'react';

const DataContext = createContext({
    categories: [],
    tasks: [],
    addNewCategory: () => { },
    addNewTask: () => { },
});

export default function FunctionProvider({ children }) {
    const [category, setCategory] = useState([
        {
            title: "Home"
        },
        {
            title: "Personal"
        },
        {
            title: "Office"
        }
    ]);
    const [task, setTask] = useState([
        {
            title: "Task 1",
            category: "Home",
            date: "23/06/2022"
        },
        {
            title: "Task 2",
            category: "Personal",
            date: "23/06/2022"
        },
        {
            title: "Task 5",
            category: "Personal",
            date: "07/08/2022"
        },
        {
            title: "Task 3",
            category: "Office",
            date: "07/08/2022"
        }
    ]);
    function addNewCategory(obj) {
        category.push(obj);
    }
    function addNewTask(obj) {
        task.push(obj);
    }
    const values = {
        categories: category,
        tasks: task,
        addNewCategory: addNewCategory,
        addNewTask: addNewTask,
    }
    return (
        <DataContext.Provider value={values}>
            {children}
        </DataContext.Provider>
    )
}

export { DataContext };