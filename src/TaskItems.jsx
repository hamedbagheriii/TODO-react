import React from 'react';
import { useContext } from 'react';
import { taskContext } from './taskContext';

const ListItems = ()=>{
    const {TaskItems , setTaskItems} = useContext(taskContext);


    const handelSetDoneTask = (id)=>{
        const index = TaskItems.findIndex(t => t.id === id);
        let newTaskItems = [...TaskItems];

        newTaskItems[index].done = !newTaskItems[index].done;
        setTaskItems(newTaskItems)
    }


    const handelDeleteTask = (id)=>{
        let newTask = TaskItems.filter(t => t.id !== id);
        setTaskItems(newTask);
    }


    const setTaskTime = ()=>{
        const date = new Date().toLocaleDateString();
        return(date)
    }


    if (TaskItems.length) {
        return (
            <ul className="list-group m-0 p-0 mt-3">
                {TaskItems.map(t =>(
                    <li key={Math.random()} className={`list-group-item d-flex justify-content-between border text-white flex-wrap ${t.done ? " bg-success" : 'bg-dark'} `}>
                        <div className='col-6 d-flex flex-column'>
                            {t.title}
                            <small className='w-100 mt-2 p-0 fw-bold '>
                                {setTaskTime()}
                            </small>
                        </div>
                        <div className='d-flex align-items-center'>
                            <span>
                                <i onClick={()=>{return handelSetDoneTask(t.id)}} className={`me-3 pointer fas ${t.done ? 'fa-times text-warning ' : ' fa-check text-success '} transition_200 text_hover_shadow`} ></i>
                                <i onClick={()=>{handelDeleteTask(t.id)}} className="me-3 pointer fas fa-trash text-danger transition_200 text_hover_shadow" ></i>
                            </span>
                        </div>
                    </li>
                ))}
            </ul>    
        )
    }
    else{
        return <h5 className='text-center text-warning mt-4'>هیچ کاری ثبت نشده است !</h5>
    }

}

export default ListItems;