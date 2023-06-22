import { useEffect, useState } from "react";

import SingleInstructor from "../../Shared/SingleInstructor/SingleInstructor";


const NavInstructor = () => {
    const [items, setItems]= useState([]);
    useEffect(()=>{
       fetch("https://yoga-delight-server.vercel.app/instructor")
       .then(res=>res.json())
       .then(data=>{
           console.log(data);
           setItems(data);
       })
    }, [])
    return (
        <div>
              <h1 className="font-black text-blue-400 text-4xl border rounded-xl border-blue-400 mr-2 ml-2 p-3  text-center mt-10 mb-10">Popular Instructor</h1>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 m-2 gap-2" >
              {
                items?.map(item=> <SingleInstructor
                    key={item._id}
                    item={item}
                ></SingleInstructor>
                    
              )
            }

              </div>
            
        </div>
    );
};

export default NavInstructor;
