import MobileMenu from "./MobileMenu";

const Topbar = () => {
  return (
    <div className="fixed top-0 left-0 w-screen bg-white md:px-12 px-8 py-4 md:py-6 flex shadow-lg md:justify-center items-center">
      <div className="font-bold flex-1 text-lg">thiru.dev</div>
      <div className="md:hidden text-lg">
        <MobileMenu />
      </div>
      <div className="hidden md:flex justify-between font-[500] text-md min-w-[350px]">
        <div>Home</div>
        <div>About</div>
        <div>Projects</div>
        <div>Contact</div>
      </div>
    </div>
  );
};

export default Topbar;
