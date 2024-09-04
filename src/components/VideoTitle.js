
const VideoTitle = ({title, overview}) =>{

    return(
        <div className=" pt-80 pl-24 text-white absolute bg-gradient-to-r from-black w-screen aspect-video  ">
            <h1 className=" text-4xl font-bold mb-7  ">{title}</h1>
            <p className=" w-4/12 font-semibold text-gray-200 ">{overview}</p>

            <div className="mt-7 ">
                <button className=" bg-white rounded-md px-6 py-2 text-xl text-black font-semibold mr-3 hover:bg-slate-300 " >▶ Play </button>
                <button className=" bg-gray-400 rounded-md px-6 py-2 bg-opacity-65 text-xl ">  More Info </button>
            </div>
        </div>
    )

}

export default VideoTitle;