import { useLayoutEffect, useRef, useState } from "react";

export function useNavHeight(ref){
    const [height,setHeight] = useState(null);
    
    useLayoutEffect(() => {
        const handleResize = () => {
            setHeight(document.getElementById('navbar').offsetHeight);
          };
          handleResize();
          window.addEventListener('resize', handleResize);
      
          return () => {
            window.removeEventListener('resize', handleResize);
          }
    },[]);
    
    return height;
}
