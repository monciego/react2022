const Header = () => {
  return (
    <header>
      <nav>
        <img src="./logo.svg" alt="logo" width="40px" />
      </nav>
    </header>
  );
};

const MainContent = () => {
  return (
    <div>
      <h1>Reasons I'm excited to learn React.</h1>
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
    <footer>
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
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

ReactDOM.render(<Page />, document.getElementById("root"));
