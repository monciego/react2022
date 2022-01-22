const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <img src="./logo.svg" alt="logo" className="logo" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

const MainContent = () => {
  return (
    <div>
      <h1 className="title">Reasons I'm excited to learn React.</h1>
      <ol>
        <li>It is a popular library</li>
        <li>It is interesting to learn</li>
        <li>I'm more likely to get a job as a developer if i know React</li>
      </ol>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <small>
        {" "}
        &copy;{" "}
        <a href="https://jerichobantiquete.netlify.app/">Jericho Bantiquete</a>,
        2022{" "}
      </small>
    </footer>
  );
};

const Page = () => {
  return (
    <div className="card">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

ReactDOM.render(<Page />, document.getElementById("root"));
