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
      <img src="/src/assets/neal-shusterman-logo.png"></img>
      <div className="tabs">{renderMenuLinks()}</div>
    </nav>
  );
};

export default TopNav;
