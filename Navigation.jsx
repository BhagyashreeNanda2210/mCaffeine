const Navigation = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img src="/images/my-logo.png" alt="logo" />
      </div>
      <ul>
        <li href="#">Body Care</li>
        <li href="#">Face Care</li>
        <li href="#">Hair Care</li>
        <li href="#">Rewards</li>
      </ul>
      <button>
        <a href="https://www.mcaffeine.com" target="_blank">
          Order
        </a>
      </button>
    </nav>
  );
};
export default Navigation;
