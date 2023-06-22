import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div>

            <div>
                <Link to='/'>
                    <button className="btn bg-blue-300 text-black rounded-xl m-3">Back To Home</button>
                </Link>
                <img className="w-full" src="https://i.ibb.co/df2QGFC/404-not-found-aqua-teen-hunger-force-text-simple-background-wallpaper-preview.jpg" alt="" />
                <h2 className="bg-black text-blue-400 p-4">Error Code: E-1301: Your number has been blocked by the recipient.
                    Read more at: https://thrivemyway.com/fake-error-message-text-copy-and-paste/</h2>
            </div>
        </div>
    );
};

export default Error;