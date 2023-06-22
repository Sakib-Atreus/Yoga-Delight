import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../hooks/useCart";

const SingleCor = ({ item }) => {
   
    const {user}=useContext(AuthContext)
    const [,refetch]=useCart();
    const navigate =useNavigate();
    const location =useLocation();
    const { name, image, instructor, availableSeats, price, _id } = item
   
    const handleAddToCarts= item =>{
        console.log(item);
        if(user && user.email){
            const classesItem = {classesId : _id ,name,image, price, email:user.email}
            fetch('https://yoga-delight-server.vercel.app/carts',{
                method: 'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(classesItem)
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.insertedId){
                    refetch();
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        iconColor:'cyan',
                        color:'cyan',
                        background:'black',
                        title: 'Class Added successfully',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
        else{
            Swal.fire({
                title: 'Are you sure?',
                text: "You want to login ?",
                icon: 'warning',
                iconColor:'cyan',
                 color:'cyan',
           background:'black',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, login it!'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state:{from:location}})
                }
              })
          
        }
    }

    
    return (
        <div className="">
            <div className="card card-side grid lg:grid-cols-2 border rounded-lg border-blue-400 m-2 mt-5  ">
               
                <figure><img className="" src={image} alt="" /></figure>
              
                <div className="card-body text-white bg-black rounded  border-blue-400 ps-9 font-black text-l">
                    <h2 className="font-black text-xl">Name : {name}</h2>
                    <p >Instructor : {instructor}</p>
                    <p>Seat : {availableSeats}</p>
                    <p>Price : {price}</p>
                    <div className="card-actions justify-end">
                    <button onClick={()=>handleAddToCarts(item)} className="btn btn-outline text-blue-400">Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCor;