import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { TbSoup } from "react-icons/tb";
import { PiBowlFoodLight } from "react-icons/pi";
import { FaBowlRice } from "react-icons/fa6";
import { GiFullPizza } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";





const Categories =[
    {
        id:1,
        name:"All",
        icon:<TiThSmallOutline className="w-[40px] h-[40px] text-green-600" />
    },
    {
        id:2,
        name:"breakfast",
        icon:<MdOutlineFreeBreakfast className="w-[40px] h-[40px] text-green-600"/>

    },
    {
        id:3,
        name:"soups",
        icon:<TbSoup className="w-[40px] h-[40px] text-green-600"/>
    },
    {
        id:4,
        name:"pasta",
        icon:<PiBowlFoodLight className="w-[40px] h-[40px] text-green-600"/>
    },
    {
        id:5,
        name:"special",
        icon:<FaBowlRice className="w-[40px] h-[40px] text-green-600"/>
    },
    {
        id:6,
        name:"pizza",
        icon:<GiFullPizza className="w-[40px] h-[40px] text-green-600"/>
    },
    {
        id:7,
        name:"burger",
        icon:<GiHamburger className="w-[40px] h-[40px] text-green-600"/>
    }
]

export default Categories