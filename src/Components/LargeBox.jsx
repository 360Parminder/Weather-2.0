
const LargeBox = ({title, body}) => {
    return (
        <div className="w-full h-[20vh] bg-blue-500 text-white rounded-md">
           <h3 className="ms-5 mt-2 text-l font-medium">{title}</h3>
           <div className="ms-5 mt-2 h-full w-full ">
            {body}
           </div>
        </div>
    )
}

export default LargeBox