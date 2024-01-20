import Header from "./Header"
import Sidebar from "../sidebar/Sidebar"
import { twMerge } from "tailwind-merge"
interface ContentProps  {
    children:React.ReactNode , 
    className?:string
}

const Content : React.FC<ContentProps> = (
    { 
       children , 
       className
    }
) => {
    return (
       <div className = {twMerge(`bg-neutral rounded h-fit w-full`)}> 
        <Header>
            {children}
        </Header>  
        <Sidebar>
            {children}
        </Sidebar>   
      </div> 
    )
}

export default Content ;