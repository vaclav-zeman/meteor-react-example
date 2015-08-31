Header = React.createClass({
  render() {
    return (
      <header className="Header col-xs-12">
        <ul className="HeaderMenu">
          <li className="HeaderMenu-item"><a href="/" className="HeaderMenu-link">Dashboard</a></li>
          <li className="HeaderMenu-item"><a href="/transactions" className="HeaderMenu-link">Transactions</a></li>
          <li className="HeaderMenu-item"><a href="/analytics" className="HeaderMenu-link">Analytics</a></li>
        </ul>
      </header>
    );
  }
});
