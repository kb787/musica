import { twMerge } from "tailwind-merge";
import { RxCaretLeft,RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
interface HeaderProps  {
    children:React.ReactNode ;
    className?:string
}

const Header : React.FC<HeaderProps> = (
    { 
        children ,
        className
    } 
) => {
    return (
       <div className = {twMerge(`h-fit bg-gradient to bg-emerald-800 p-6 mt-3 ml-72 rounded-md mr-3`,className)}>
          <div className = " mb-4 items-center justify-between">
                <button className = "bg-black  rounded-md flex justify-center items-center cursor-pointer hover:opacity-75">
                     <RxCaretLeft className = "text-white" size = {40}/>
                </button>
                <button className = "bg-black  rounded-md flex justify-center items-center cursor-pointer hover:opacity-75">
                     <RxCaretRight className = "text-white" size = {40}/>
                </button>
          </div>
          <div className = "flex md:hidden gap-x-2 items-center">
             <button className = "rounded-full bg-black flex items-center justify-center hover:opacity-75 transition">
                  <HiHome className = "text-black" size = {40} />
             </button>
             <button className = "rounded-full bg-black flex jusitfy-center items-center hover:opacity-75 transition">
                  <BiSearch className = "text-black" size = {40} />
             </button>
          </div>
          <div className = "flex justify-between items-center gap-x-4">
             <button className = "bg-slate-100 text-black rounded-2xl hover: opacity-75">
             SignUp    
             </button>  
             <button className = "bg-slate-100 text-black rounded-2xl hover: opacity-75">
             SignIn    
             </button>  
          </div>
          {children}
       </div> 
    )
}

export default Header ;