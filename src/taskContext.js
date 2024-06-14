import React from 'react';
import { createContext } from 'react';


export const taskContext = createContext({
    setTaskItems : [],
    TaskItems : ()=>{}
})