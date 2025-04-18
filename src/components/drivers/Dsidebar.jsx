import Logo from "../../assets/logo.png";
import grid from "../../assets/grid.svg";
import WhiteLogo from "../../assets/whiteLogs.png";
import { useEffect, useState } from "react";


function Dside() {
      const [theme, setTheme] = useState(localStorage.getItem("theme"));
       useEffect(() => {
          console.log(theme);
        }, [theme]);
    
  return (
    <div className=" w-[100vw] md:w-1/6 md:h-[100vh] dark:bg-[#363f42]  md:overflow-y-auto scrollbar   bg-white">
      {/* logo */}
      <div className="w-full hidden  md:flex justify-center pt-3 relative">
        <img
          src={theme === "dark" ? WhiteLogo : Logo}
          alt=""
          className="w-[150px] "
        />
      </div>
      {/*  */}
      <div className="w-full hidden  md:flex justify-center  pt-6">
        <div className=" bg-amber-300 flex justify-between items-center px-4 py-2 rounded-xl w-40">
          <p className="w-40 text-md font-semibold ">Driver</p>
          <img src={grid} alt="" className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
}

export default Dside;
