import {Trash} from 'phosphor-react'
import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../context/DataContext';
import style from './List.module.css'

interface ContentTipy{
     list: string;
     onDeleteTask:(comment:string) => void;
}

export function List({list,onDeleteTask}:ContentTipy){

     const [checkBox, setCheckBox] = useState(false)


     const {taskDone, setTaskDone}= useContext(DataContext)

     function handleDeleteTask(){
          onDeleteTask(list);
     }

     function onTaskChecked(){
          setCheckBox(!checkBox);
     }

     function checkTaskDone(){
          if(checkBox === true){
               setTaskDone(taskDone + 1);
               setCheckBox(false);
          }
     }

     useEffect(()=>{
          checkTaskDone()
     },[taskDone])

     return(
          <div className={style.context}>
               <ul className={style.listContent}>
                    <input id='input'type="checkbox" onChange={onTaskChecked} onClick={()=>checkTaskDone()} checked={checkBox} />
                    <li>{list}</li>
                    <button onClick={handleDeleteTask}><Trash size={20}/></button>
               </ul>
          </div>
     )
}