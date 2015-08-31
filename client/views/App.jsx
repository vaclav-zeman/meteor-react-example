App = class App extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div id="App" className="container-fluid">
        <div className="row">
          <Header />
          {this.props.content}
        </div>
      </div>
    );
  }
}
