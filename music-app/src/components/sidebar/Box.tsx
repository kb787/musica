import { twMerge } from "tailwind-merge"
interface BoxProps {
    children:React.ReactNode ;
    className?:string ;
}

const Box : React.FC<BoxProps> = ( {
     children,
     className,
}
) => {
    return (
      <div className = {twMerge(`bg-neutral-900 rounded-lg h-fit w-70 mr-5 flex flex-col justify-start items-start`,className)}>
          {children}
      </div>
    )
}

export default Box ;