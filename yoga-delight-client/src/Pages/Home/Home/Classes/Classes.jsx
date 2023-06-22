
import SingleCor from "../../../Shared/SingleCor/SingleCor";
import useClasses from "../../../../hooks/useClasses";


const Classes = () => {
    const [Classes]=useClasses();
    const course =Classes.filter(item=>item.category==='popular')


    return (
        <>
            <h1 className="font-black text-blue-400 text-4xl border rounded-xl border-blue-400 mr-2 ml-2 p-3  text-center mt-10 mb-10">Popular Classes</h1>
           
         <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
      
            
            {
                course.map(item=> <SingleCor
                    key={item._id}
                    item={item}
                ></SingleCor>)
            }

         </div>
        </>
    );
};

export default Classes;