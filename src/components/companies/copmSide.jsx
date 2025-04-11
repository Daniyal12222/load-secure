import Logo from '../../assets/logo.png';
import grid from '../../assets/grid.svg';

function CompSide() {
   

    return (
        <div className=" w-[100vw] dark:bg-[#363f42] md:w-1/6 md:h-[100vh]  md:overflow-y-auto scrollbar   bg-white">
            {/* logo */}
            <div className='w-full hidden  md:flex justify-center pt-6 relative'>
                <img src={Logo} alt="" className='w-30 ' />
            </div>
            {/*  */}
            <div className='w-full hidden  md:flex justify-center  pt-6'>
                <div className=' bg-amber-400 flex justify-between items-center px-4 py-4 rounded-2xl w-40'>
                    <p className='w-40 text-md font-semibold '>Companies</p>
                    <img src={grid} alt="" className='w-4 h-4' />
                </div>
            </div>
           
        </div>
    )

}

export default CompSide;