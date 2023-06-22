
import { useEffect, useState } from "react";

const useClasses=()=>{
    const [course, setCourse]= useState([]);
    const [loading, setLoading]=useState(true);
    useEffect(()=>{
       fetch("https://yoga-delight-server.vercel.app/classes")
       .then(res=>res.json())
       .then(data=>{
        //    console.log(data);
           setCourse(data);
           setLoading(false)
       })
    }, [])
 return [course , loading]
}
export default useClasses;