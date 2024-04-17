import { useEffect, useState } from "react";



export const useResize = () => {
    const [isSingleMonth, setIsSingleMonth] = useState(window.innerWidth < 768);

    useEffect(() => {
      const handleResize = () => {
        setIsSingleMonth(window.innerWidth < 768);
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    return {isSingleMonth}
}