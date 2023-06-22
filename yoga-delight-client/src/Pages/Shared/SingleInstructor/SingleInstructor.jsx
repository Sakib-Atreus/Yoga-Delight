

const SingleInstructor = ({item}) => {
    const { name, image, email } = item;
    return (
        <div className="card w-96 bg-black border border-blue-400 text-white shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Name:  {name}</h2>
          <p>Email : {email}</p>
          
        </div>
      </div>
    );
};

export default SingleInstructor;