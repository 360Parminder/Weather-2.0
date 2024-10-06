import Header from "../Components/Header"
import LargeBox from "../Components/LargeBox"
import img from "../Assets/Images/logo.png"
const Landing = () => {
    return (
        <div className="flex flex-col items-center h-screen bg-black">
            <Header />
            <div className="flex flex-row  w-full h-full mt-10 justify-between">
                <div className=" bg-blue-300 w-2/6 h-full">

                </div>
                <div className=" bg-[#242424] w-3/5 h-full">
                    <div>
                        <h3>Todays Highlight</h3>
                        <div className="grid grid-cols-2 gap-4 mt-10 px-10">
                            <LargeBox title={'Air Quality Index'} body={
                                <div className="flex justify-center items-center h-full">
                                    <img src={img} alt="AQI" className="w-[10rem] h-[10rem]" />
                                </div>
                            } />
                            <LargeBox />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing