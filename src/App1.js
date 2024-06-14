import React from 'react';
import TopForm from './TopForm';
import ListItems from './TaskItems';
import { useState } from 'react';
import { taskContext } from './taskContext';

const App = ()=>{
    const [TaskItems , setTaskItems] = useState([
        {
            id:1,
            title:'کار شماره یک',
            done:false
        },
        {
            id:2,
            title:'کار شماره دو',
            done:true
        },
        {
            id:3,
            title:'کار شماره سه',
            done:false
        }
    ])

    return (
        <div className="container w-100 h-100 p-3">
            <div className="row h-100 justify-content-center align-align-items-start pt-5">
                <div className="col-12 col-md-8 col-lg-6 shadow-lg rounded-3 p-3 task_List">
                    <taskContext.Provider value={{TaskItems , setTaskItems}}>
                        <TopForm />
                        <ListItems />
                    </taskContext.Provider>
                </div>
            </div>
        </div>
    ) 
}


export default App;
