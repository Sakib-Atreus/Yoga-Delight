import { useQuery } from "@tanstack/react-query";
import { FaUserShield } from 'react-icons/fa';
import Swal from "sweetalert2";
const AllUser = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('https://yoga-delight-server.vercel.app/users')
        return res.json();
    })


    const handleMakeAdmin = user =>{
        fetch(`https://yoga-delight-server.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
const handleDelete= (user)=>{
  
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to recover it!",
        textColor:'#0000',
        icon: 'warning',
        iconColor:'red',
        background:'black',
        Color:'#545454',
        showCancelButton: true,
        confirmButtonColor: '#F40D0D',
        cancelButtonColor: '#gray',
        // cancelButtonAriaLabel:'white',
        confirmButtonText: 'Yes, delete it!',
        confirmButtonTextColor:'black'
        
      }).then((result) => {
        if (result.isConfirmed) {
       
        fetch(`https://yoga-delight-server.vercel.app/users/${user._id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount>0){
                Swal.fire(
                        'Deleted!',
                        'Your toy has been deleted.',
                        'success'
                      )
       refetch();
            }
        })
        }
      })
}

    return (
      
        <div className="w-full p-3">
        
        <h3 className="text-3xl text-white font-semibold my-4">Total Users: {users.length}</h3>
        <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
                <thead>
                    <tr>
                        <th className="text-blue-400 text-xl">#</th>
                        <th className="text-blue-400 text-xl">Name</th>
                        <th className="text-blue-400 text-xl">Email</th>
                        <th className="text-blue-400 text-xl">Role</th>
                        <th className="text-blue-400 text-xl">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => <tr key={user._id}>
                            <th>{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{ user.role === 'admin' ? 'admin' :
                                <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-blue-300   text-black"><FaUserShield></FaUserShield></button> 
                                }</td>
                            <td><button onClick={() => handleDelete(user)} className="btn btn-ghost bg-red-600  text-white">Delete</button></td>
                        </tr>)
                    }
                    
                    
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default AllUser;