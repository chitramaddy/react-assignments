import Logo from '../images/logo.png';

export const Header = () => {
  return (
    <div className="header">
      <h3 className="logo">
        <img src={Logo} />
        <i>Good Food</i>
      </h3>
      <ul className="nav">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};
