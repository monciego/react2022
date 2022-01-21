const Navbar = () => {
  return (
    <nav>
      <div className="logo">Logo</div>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Project</a>
        </li>
      </ul>
    </nav>
  );
};

const MainContent = () => {
  return (
    <main>
      <h1>Main content</h1>
    </main>
  );
};

const Footer = () => {
  return <footer>Footer</footer>;
};

ReactDOM.render(
  <div>
    <Navbar />
    <MainContent />
    <Footer />
  </div>,
  document.getElementById("root")
);
