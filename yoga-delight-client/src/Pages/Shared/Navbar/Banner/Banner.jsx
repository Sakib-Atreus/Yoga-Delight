import "react-responsive-carousel/lib/styles/carousel.min.css";
// requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import {  Slide } from "react-awesome-reveal";

const Banner = () => {
    return (
        <>
            <Carousel className="bg-black pb-3">
                <div>

                    <img src="https://c4.wallpaperflare.com/wallpaper/688/549/126/irina-popova-girls-model-yoga-wallpaper-preview.jpg" />

                </div>
                <div>
                    <img src="https://c4.wallpaperflare.com/wallpaper/156/840/960/girl-pose-room-flexibility-wallpaper-preview.jpg" />

                </div>
                <div>
                    <img src="https://c4.wallpaperflare.com/wallpaper/420/477/268/trees-palm-trees-girls-yoga-wallpaper-preview.jpg" />

                </div>
            </Carousel>
            <div className="">
                <div className='text-white space-y-7 w-full pl-4  ps-7  items-center bg-black '>
                <Slide> <h2 className='lg:text-8xl text-4xl md:text-6xl font-bold '>Let<span className="text-blue-400">&#39;</span>s <span className="text-blue-400">Yoga </span>!</h2></Slide>
                    <Slide className="  text-xl" >
                        <p >Yoga is a type of exercise in which you move your body <br />into various positions in order to become more fit <br /> or flexible, to improve your breathing,<br /> and to relax your mind.
                        </p>
                    </Slide>
                    <div >
                        <Link to="/login"><button className='text-lg w-2/4 mb-3  btn btn-outline text-blue-400'>LOG-IN</button></Link>


                    </div>

                </div>

            </div>
        </>

    );
};

export default Banner;