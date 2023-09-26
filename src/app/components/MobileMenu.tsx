"use client"; // This is a client component 👈🏽
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
interface MenuButtonProps {
  name: string;
  onClick: () => void;
}
const MenuButton = (props: MenuButtonProps) => {
  return (
    <div className="my-6 text-center">
      <button onClick={props.onClick} className="text-center">
        {props.name}
      </button>
    </div>
  );
};

const MobileMenu = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const handleMenuOpen = () => {
    setIsMenuVisible(true);
  };

  const handleMenuClose = () => {
    setIsMenuVisible(false);
  };
  return <></>;
  return (
    <div>
      <button
        onClick={() => {
          handleMenuOpen();
        }}
      >
        <AiOutlineMenu />
      </button>
      <div
        className={`z-[100] bg-white ${
          isMenuVisible ? "animate-menuIn" : "hidden"
        } fixed top-0 left-0 z-10 w-screen h-screen flex items-center justify-center`}
      >
        <div className="fixed top-0 right-0 px-8 py-6">
          <button onClick={handleMenuClose}>
            <AiOutlineClose />
          </button>
        </div>
        <div>
          <MenuButton name="Home" onClick={handleMenuClose} />
          <MenuButton name="About" onClick={handleMenuClose} />
          <MenuButton name="Projects" onClick={handleMenuClose} />
          <MenuButton name="Contact" onClick={handleMenuClose} />
        </div>
      </div>
    </div>
  );
};
export default MobileMenu;
