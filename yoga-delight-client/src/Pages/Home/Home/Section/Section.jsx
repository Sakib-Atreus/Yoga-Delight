/**
 * Try importing different effects
 * See https://react-awesome-reveal.morello.dev/docs/revealing-effects
 **/
import { Slide } from "react-awesome-reveal";
import { BiLeaf } from 'react-icons/bi';


export default function Section() {
  return (
    <>
     <h1 className="font-black text-blue-400 text-4xl border rounded-xl border-blue-400 mr-2 ml-2 p-3  text-center mt-10 mb-10">About Us</h1>
      <Slide> <h2 className='lg:text-6xl text-3xl md:text-4xl font-bold text-blue-400 p-2  '> NB : Build Your Mind and Health !</h2> </Slide>

      <div className="grid grid-cols-4 justify-center gap-1  w-full ps-2 pr-2 ">
        <kbd className="kbd">q</kbd>
        <kbd className="kbd">w</kbd>
        <kbd className="kbd">e</kbd>
        <kbd className="kbd">r</kbd>
        <kbd className="kbd">t</kbd>
        <kbd className="kbd">y</kbd>
        <kbd className="kbd">u</kbd>
        <kbd className="kbd">i</kbd>
        <kbd className="kbd">o</kbd>
        <kbd className="kbd">p</kbd>


        <kbd className="kbd">a</kbd>
        <kbd className="kbd">s</kbd>

        <kbd className="kbd bg-black text-blue-400">y</kbd>
        <kbd className="kbd bg-black text-blue-400">o</kbd>
        <kbd className="kbd bg-black text-blue-400">g</kbd>
        <kbd className="kbd bg-black text-blue-400">a</kbd>
        <kbd className="kbd">k</kbd>
        <kbd className="kbd">l</kbd>


        <kbd className="kbd">x</kbd>
        <kbd className="kbd">c</kbd>
        <kbd className="kbd">v</kbd>
        <kbd className="kbd">b</kbd>
        <kbd className="kbd">n</kbd>
        <kbd className="kbd">m</kbd>


      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 ">
        <div className="mt-4 text-left py-7 ">
          <h1 className="text-center font-black text-3xl text-blue-400 underline underline-offset-4">About Us</h1>
          <h1 className="text-white text-xl p-3">Yoga improves strength, balance and flexibility.
            Slow movements and deep breathing increase blood flow and warm up muscles, while holding a pose can build strength. Balance on one foot, while holding the other foot to your calf or above the knee (but never on the knee) at a right angle.
            The Most Important Part of Yoga? Breathing. Its the most important thing we do every single day, and most people give it very little thought. But, when it comes to a productive yoga routine, settling your mind, relaxing, and centering yourself, breathing is one of the most important steps to master.</h1>
          <p className="text-4xl flex justify-center  text-blue-400">...<BiLeaf /></p>
        </div>
        <img className=" mt-4" src="https://c4.wallpaperflare.com/wallpaper/267/710/388/buddhism-buddhist-digital-art-meditation-wallpaper-preview.jpg" alt="" />
        <img className="mt-4" src="https://c4.wallpaperflare.com/wallpaper/831/310/373/yoga-women-sport-sports-wallpaper-preview.jpg" alt="" />
        <img className=" mt-4" src="https://c4.wallpaperflare.com/wallpaper/645/22/554/ballerina-closed-eyes-women-blonde-wallpaper-preview.jpg" alt="" />
      </div>
    </>
  );
}
