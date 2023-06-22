import SingleCor from "../../Shared/SingleCor/SingleCor";


const DivideClasses = ({ items }) => {
    return (
        <div>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">


                {
                    items.map(item => <SingleCor
                        key={item._id}
                        item={item}
                    ></SingleCor>)
                }

            </div>
        </div>
    );
};

export default DivideClasses;