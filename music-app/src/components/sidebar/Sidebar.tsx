"use client"

import { HiHome } from "react-icons/hi" ;
import { BiSearch } from "react-icons/bi";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

interface SidebarProps {
    children:React.ReactNode 
}
const Sidebar = ({children} : SidebarProps) => {
   const pathname = usePathname() 

  const routes = useMemo(() => [
    {
      icon: HiHome,
      label: 'Home',
      active: pathname !== '/search',
      href: '/'
    },
    {
      icon: BiSearch,
      label: 'Search',
      href: '/search',
      active: pathname === '/search'
    },
  ], [pathname]);

  return (
    <div className = {twMerge(`flex h-full`)}>
        <div className = "hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2">
          <main className = "h-full flex-1 overflow-y-auto py-2">
             {children}
          </main>  
        </div>
    </div>
  )
}  

export default Sidebar ;
