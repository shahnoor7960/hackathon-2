import NavTop from "./Nav-top";
import NavMid from "./Nav-Mid";
import NavLinks from "./Nav-Links";

export default function Nav(){
    return(
        <div className="w-[1,920px] h-[203px] bg-white">
         <NavTop/>
        <NavMid/>
        <NavLinks/>
        </div>
   )
 }