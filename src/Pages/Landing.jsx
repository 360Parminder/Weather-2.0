import Header from "../Components/Header"
import LargeBox from "../Components/LargeBox"

const Landing = () => {
    return (
        <div className="flex flex-col items-center  h-screen bg-black">
            <Header />
            <div className="flex flex-row bg-white w-full h-full mt-10 justify-between">
                <div className=" bg-blue-300 w-2/5 h-full">

                </div>
                <div className=" bg-[#242424] w-2/4 h-full">
                        <div>
                            <h3>Todays Highlight</h3>
                            <div className="grid grid-cols-2 gap-4 mt-10 px-10">
                            <LargeBox />
                            <LargeBox />
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Landing