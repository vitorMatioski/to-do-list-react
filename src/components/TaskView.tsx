import { ChangeEvent, FormEvent, useContext, useState } from 'react'
import { List } from './List'
import {PlusCircle} from 'phosphor-react'
import Clipboard from '../assets/Clipboard.svg'
import style from './Task.module.css'
import { DataContext } from '../context/DataContext'

export function Task(){

     const [listTask,setListTask] = useState<Array<string>>([]);

     const [newListTask, setNewListTask] = useState('')

     const {taskDone, setTaskDone} = useContext(DataContext)

     function handleNewTask(event:FormEvent){
          event.preventDefault()

          setListTask([...listTask, newListTask])
          setNewListTask('')
     }

     function handleNewListChange(event:ChangeEvent<HTMLInputElement>){
          setNewListTask(event.target.value)
     }

     function deleteTask(taskToDelete:string){
          const taskWithoutDeleteOne = listTask.filter(task=>{
               setTaskDone(taskDone -1)
               return task !== taskToDelete;
          })
          setListTask(taskWithoutDeleteOne)
     }

     const createdtask = listTask.length;

     return(
          <div className={style.content}>
               <form className={style.contentInput} onSubmit={handleNewTask}>

                    <input className={style.input}
                         type="text"
                         placeholder="Adicione uma nova tarefa"
                         value={newListTask}
                         name='task'
                         onChange={handleNewListChange} />

                    <button className={style.button}>Criar <PlusCircle size={25}/></button>
               </form>
               <div className={style.title}>
                    <p className={style.task}>Tarefas criadas<span>{createdtask}</span></p>
                    <p className={style.done}>Concluídas <span>{taskDone} de {createdtask}</span></p>
               </div>

                    {listTask.length > 0 ? (
                         <div className={style.listContent}>
                           {listTask.map(list=>{
                              return <List list={list} key={list} onDeleteTask={deleteTask}/>
                            })}
                         </div>

                    ): (
                         <div className={style.emptyPag}>
                              {<img src={Clipboard} alt="" />}
                              <p>Você ainda não tem tarefas cadastradas </p>
                              <span>Crie tarefas e organize seus itens a fazer</span>
                         </div>
                    )}




          </div>
     )
}