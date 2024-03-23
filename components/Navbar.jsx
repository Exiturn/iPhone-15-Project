import dynamic from "next/dynamic";

const Navbar = () => {
  const MegaMenu = dynamic(() => import("@/components/MegaMenu"));

  return (
    <header className="nav__header">
      <MegaMenu />
    </header>
  );
};

export default Navbar;
