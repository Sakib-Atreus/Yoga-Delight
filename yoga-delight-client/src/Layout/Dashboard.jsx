import { NavLink, Outlet } from "react-router-dom";
import { GrCheckboxSelected, GrHomeRounded } from 'react-icons/gr';
import { GiWallet } from 'react-icons/gi';
import { SiGoogleclassroom ,SiInstructure } from 'react-icons/si';
import { FaUsers } from 'react-icons/fa';
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {
    // const isAdmin=true;
    const [isAdmin] = useAdmin();
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side  bg-[#26C6DA] ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 text-black text-base-content">

                    {
                        isAdmin ? <>
                         <h1 className="bg-black text-blue-400 p-2 rounded-full text-center font-black text-xl">DashBoard</h1>
                    <div className="divider"></div>
                    <li><NavLink to='/' ><GrHomeRounded></GrHomeRounded>Admin Home</NavLink></li>
                    <li><NavLink to='/dashboard/selected' ><GrCheckboxSelected></GrCheckboxSelected> Add Classes</NavLink></li>
                    <li> <NavLink to='/dashboard/manage' ><SiGoogleclassroom className="text-black"></SiGoogleclassroom> Manage Classes</NavLink></li>
                    <li><NavLink to='/dashboard/allusers' ><FaUsers className="text-black"></FaUsers> Manage User</NavLink></li>

                        </>
                        :
                        <>
                         <h1 className="bg-black text-blue-400 p-2 rounded-full text-center font-black text-xl">DashBoard</h1>
                    <div className="divider"></div>
                    <li><NavLink to='/' ><GrHomeRounded></GrHomeRounded>User Home</NavLink></li>
                    <li><NavLink to='/dashboard/selected' ><GrCheckboxSelected></GrCheckboxSelected> My Classes</NavLink></li>
                    <li> <NavLink to='/dashboard/mycart' ><SiGoogleclassroom className="text-black"></SiGoogleclassroom> Selected Classes</NavLink></li>
                    <li><NavLink to='/dashboard/payment' ><GiWallet className="text-black"></GiWallet> Payment</NavLink></li>

                        </>
                    }

                   



                    <div className="divider text-blue-400  bg-black">
                        ------------------------------
                    </div>





                    <li><NavLink to='/' ><GrHomeRounded></GrHomeRounded>Home</NavLink></li>
                    <li><NavLink to="/instructor"><SiInstructure></SiInstructure>Instructors</NavLink></li>
                    <li><NavLink to="/classes"><SiGoogleclassroom></SiGoogleclassroom> Classes</NavLink></li>
                </ul>

            </div>
        </div>


    )
};

export default Dashboard;