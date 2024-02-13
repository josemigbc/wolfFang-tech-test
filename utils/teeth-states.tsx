import { IoMdClose } from "react-icons/io"
import { FaRegCircle, FaRegSquare } from "react-icons/fa"
import { FaBoltLightning } from "react-icons/fa6"
import range from "./range"

const states = {
    '1': <FaBoltLightning className="absolute h-7 w-7 text-red-600"/>,
    '2': null,
    '3': <IoMdClose className="absolute h-10 w-10 text-blue-600" />,
    '4': <IoMdClose className="absolute h-10 w-10 text-red-600" />,
    '5': <FaRegSquare className="absolute h-11 w-11 text-blue-600"/>, 
    '6': <FaRegSquare className="absolute h-11 w-11 text-red-600"/>,
    '7': null, 
    '8': null, 
    '9': <FaRegCircle className="absolute h-10 w-10 text-blue-600"/>,
    '10': <FaRegCircle className="absolute h-10 w-10 text-red-600"/>
}

export interface IOdontogram {
    [index: number]: keyof typeof states
}

export default states