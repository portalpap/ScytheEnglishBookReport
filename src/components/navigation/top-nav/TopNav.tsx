import Img from "../../utillity/Image/Img";
import Tab from "../tab/Tab";
import "./TopNav.scss";

const menuLinks = [
  { icon: "house.svg", label: "Home" },
  { icon: "book.svg", label: "Books" },
  { icon: "about.svg", label: "About" },
  { icon: "newspaper.svg", label: "News" },
  { icon: "contact.svg", label: "Contact" },
];

const TopNav: React.FunctionComponent = () => {
  function renderMenuLinks() {
    return menuLinks.map(({ icon, label }) => {
      return (
        <Tab
          key={label}
          label={label}
          icon={icon}
          size={40}
          placement={"top"}
        ></Tab>
      );
    });
  }

  return (
    <nav id="TopNav">
      <Img src="icons/neal-shusterman-logo.png"></Img>
      <div className="tabs">{renderMenuLinks()}</div>
    </nav>
  );
};

export default TopNav;
