import { NavLink } from "react-router";
import { ContainerWrapper } from "../container-wrapper";

export const Navbar = () => {
  return (
    <header className="w-full bg-blue-900  shadow-xl shadow-blue-700  absolute">
      <ContainerWrapper>
        <div className="flex items-center justify-between">
          <div className="group shadow-xl transition-all transform duration-500 hover:bg-blue-600 hover:scale-110 hover:rotate-6 hover:translate-x-4 hover:translate-y-2 active:scale-95 active:translate-y-1">
            <NavLink
              to={'/'}
              className="bg-blue-500 text-white group group-hover:text-black xl:text-[20px] rounded-lg text-[12px] font-bold xl:px-8 sm:text-[20px] py-[10px] px-[10px]"
            >
              Date facts
            </NavLink>
          </div>

          <div className="shadow-xl transition-all group transform duration-500 hover:bg-blue-600 hover:scale-110 hover:rotate-6 hover:translate-x-4 hover:translate-y-2 active:scale-95 active:translate-y-1">
            <NavLink
              to={'/math-facts'}
              className="bg-blue-500 text-white font-bold group-hover:text-black xl:text-[20px] text-[12px] sm:text-[20px] xl:px-8 py-[10px] px-[10px] rounded-lg"
            >
              Math facts
            </NavLink>
          </div>

          <div className="group shadow-xl transition-all transform duration-500 hover:bg-blue-600 hover:scale-110 hover:rotate-6 hover:translate-x-4 hover:translate-y-2 active:scale-95 active:translate-y-1">
            <NavLink
              to={'/Random-Facts'}
              className="bg-blue-500 text-white font-bold xl:px-8 group-hover:text-black py-[10px] px-[10px] sm:text-[20px] xl:text-[20px] text-[12px] rounded-lg"
            >
              Random facts
            </NavLink>
          </div>

          <div className="group shadow-xl transition-all transform duration-500 hover:bg-blue-600 hover:scale-110 hover:rotate-6 hover:translate-x-4 hover:translate-y-2 active:scale-95 active:translate-y-1">
            <NavLink
              to={'/Year-Facts'}
              className="bg-blue-500 text-white font-bold xl:px-8 py-[10px] px-[10px] sm:text-[20px] group-hover:text-black xl:text-[20px] text-[12px] rounded-lg"
            >
              Year facts
            </NavLink>
          </div>
        </div>
      </ContainerWrapper>
    </header>
  );
}
