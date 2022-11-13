import { createContext,useState } from "react";

export const DataContext = createContext();
DataContext.displayName = 'Data';

export const DataProvider = ({children})=>{
     const [taskDone, setTaskDone]= useState(0)
     return(
          <DataContext.Provider value={{
               taskDone,
               setTaskDone
          }}>
               {children}
          </DataContext.Provider>
     )
}