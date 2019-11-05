var App = () => (
  <div>
  <h2>My Grocery List</h2>
    <GroceryList items={['Cucumber','Kale','Onion']}/>
  </div>
)
var GroceryList = (props) => (
  <ul id="groceryList">
    {props.items.map(item =>
      <GroceryListItem item={item} />
    )}
  </ul>
);

class GroceryListItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = {hover: false}
  }

  onHover(){
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    var style = {
      textDecoration: this.state.done ? 'bold' : 'none'
    }

    return (
      <li style={style} onHover={this.onHover.bind(this)}>{this.props.item}</li>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
