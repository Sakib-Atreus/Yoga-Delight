import useClasses from "../../../hooks/useClasses";

import DivideClasses from "./DivideClasses";


const NavClasses = () => {
    const [classes] = useClasses();
    const popular = classes.filter(item => item.category === 'popular')
    const regular = classes.filter(item => item.category === 'Regular')

    return (
        <div>
            <h1 className="font-black text-blue-400 text-4xl border rounded-xl border-blue-400 mr-2 ml-2 p-3  text-center mt-10 mb-10">Popular Classes</h1>
            <DivideClasses items={popular}></DivideClasses>
            <h1 className="font-black text-blue-400 text-4xl border rounded-xl border-blue-400 mr-2 ml-2 p-3  text-center mt-10 mb-10">Regular Classes</h1>
            <DivideClasses items={regular}></DivideClasses>

        </div>
    );
};

export default NavClasses;