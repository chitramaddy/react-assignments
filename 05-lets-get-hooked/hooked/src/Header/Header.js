import { Search } from './Search';

export const Header = () => {
  return (
    <div className="header">
      <h1 className="logo">Hooked</h1>
      <Search />
      <ul className="nav">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};
