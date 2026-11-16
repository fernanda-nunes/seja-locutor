interface OverlayProps {
  children?: React.ReactNode;
  title: string;
  subtitle: string;
  className?: string;
}

export const Overlay = ({ children, title, subtitle, className = "" }: OverlayProps) => {
  return (
    <div className={`absolute w-full flex items-center text-center font-extralight ${className}`}>
      <div className="flex flex-col items-center text-white w-full">

       
        <h1 className="m-0 text-4xl scale-y-125 md:text-6xl tracking-tight inline-block scale-y-145 origin-bottom"> 
          {title}
        </h1>

       
        <h4 className="m-0 md: text-base md:text-xl md: tracking-[0.01em] inline-block scale-y-125 origin-top"> 
          {subtitle} 
        </h4> 
       
        {children && (
          <div className="mt-3 flex">
            {children}
          </div>
        )}

      </div>
    </div>
  );
};