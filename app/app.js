var React = require('react'),
    ReactDOM = require('react-dom'),
    Redux = require('redux'),
    Mui = require('material-ui');
var { createStore } = Redux;

var { RaisedButton } = Mui;

var counter = function(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};
var store = createStore(counter);

var Counter = React.createClass({
    render: function() {
        console.log(this)
        return (
            <div className="counter">
                <h1>{ this.props.value }</h1>
                <RaisedButton onClick={ this.props.onIncrement } label="+" />  
                <RaisedButton onClick={ this.props.onDecrement } label="-" />
            </div>
        );
    }
});

var render = function() {
    ReactDOM.render( < Counter value = { store.getState() }
        onIncrement = {
            function() {
                store.dispatch({
                    type: 'INCREMENT'
                })
            }
        }
        onDecrement = {
            function() {
                store.dispatch({
                    type: 'DECREMENT'
                })
            }
        }
        />,
        document.getElementById('root')
    )
}

render();
store.subscribe(render);
