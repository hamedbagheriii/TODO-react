import React, { Fragment } from 'react';
import { useState } from 'react';
import { taskContext } from './taskContext';
import { useContext } from 'react';

const TopForm = ()=>{
    const {TaskItems , setTaskItems} = useContext(taskContext)
    const [task , setTask] = useState('')

    const handelSetTask = (e)=>{
        setTask(e.target.value)
    }

    const handelAddTask = (event)=>{
        event.preventDefault();
        setTaskItems([...TaskItems , {id:Math.random() , title:task , done:false ,} ]);
        setTask('');
    }
    
    return(
        <Fragment>
            <h4 className="text-center text_title mb-3">به کدیاد خوش اومدید</h4>
            <form onSubmit={handelAddTask}>
                <div className="form-group d-flex">
                    <input type="text" className="form-control bg-dark " placeholder='تسک امروز را بنویسید . . .'
                     value={task} onChange={handelSetTask} />
                    <button type="submit" className="btn btn-dark border me-1">ثبت</button>
                </div>
            </form>
        </Fragment>
    )
}

export default TopForm;