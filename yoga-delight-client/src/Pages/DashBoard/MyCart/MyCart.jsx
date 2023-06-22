import Swal from "sweetalert2";
import useCart from "../../../hooks/useCart";


const MyCart = () => {
    const [cart ,refetch]=useCart();
    const total = cart.reduce((sum,item)=>item.price + sum ,0)
    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            iconColor:'cyan',
            color:'cyan',
            background:'black',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://yoga-delight-server.vercel.app/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div className="w-full p-5">
        <div className="uppercase font-bold flex h-[60px] items-center justify-evenly">
            <h1 className="text-xl text-white">Total Items : {cart.length}</h1>
            <h1 className="text-xl text-white">Total Price : {total}</h1>
            <button className="btn btn-outline text-blue-400 btn-sm ">Pay</button>
        </div>
         <div className="overflow-x-auto w-full">
         <table className="table w-full">
             {/* head */}
             <thead>
                 <tr>
                     <th className="text-blue-400 font-black text-xl">#</th>
                     <th className="text-blue-400 font-black text-xl">Food</th>
                     <th className="text-blue-400 font-black text-xl">Item Name</th>
                     <th className="text-blue-400 font-black text-xl">Price</th>
                     <th className="text-blue-400 font-black text-xl">Action</th>
                 </tr>
             </thead>
             <tbody>
                 {
                     cart.map((item, index) => <tr
                         key={item._id}
                     >
                         <td className="text-white">
                             {index + 1}
                         </td>
                         <td>
                             <div className="avatar">
                                 <div className="mask mask-squircle w-12 h-12">
                                     <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                 </div>
                             </div>
                         </td>
                         <td className="text-white">
                             {item.name}
                         </td>
                         <td className="text-white">${item.price}</td>
                         <td>
                             <button onClick={() => handleDelete(item)} className="btn btn-ghost  bg-red-700  text-white rounded-full">Delete</button>
                         </td>
                     </tr>)
                 }


             </tbody>
         </table>
     </div>
     </div>
    );
};

export default MyCart;