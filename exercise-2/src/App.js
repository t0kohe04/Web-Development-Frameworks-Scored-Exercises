import React from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import ShoppingListButtons from "./components/ShoppingListButtons";
import styles from './App.module.css';
import './App.css';

/* A ES6 class style stateful component for the shopping list application */
class App extends React.Component {
  constructor(props)
  {
    /* You should call super(props) before any other statement. 
       Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    */
    super(props);

    this.state = {
      items: [
        { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
        { id: 2, value: 'Bananas', qty: 6, unit: 'pcs' },
        { id: 3, value: 'Bread', qty: 3, unit: 'x' },
        { id: 4, value: 'Eggs', qty: 16, unit: 'x' },
        { id: 5, value: 'Cucumber', qty: 3, unit: 'x' }
      ]
    };

  }

  
  addItem(id,value,qty,unit){
    // NOTE: The commented section below was an attempt at the difficulty level 2 version of the task
    /*
    if(this.state.items.some(items => id === items.id)){
      // TODO: Make this inceremt the list quantity
      this.setState({items: this.state.items.map(items => (items.id === id ? {...items, value,...qty,unit} : items))});
    }
    else{
      this.setState({items: [...this.state.items, {id,value,qty,unit}]});
    }
    */

    this.setState({items: [...this.state.items, {id,value,qty,unit}]});
  }
  
  render()
  {
    const { applicationDescription, applicationName } = this.props;
    return <div className={ styles.shoppingList }>
      <Title 
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />
      <ShoppingList items={ this.state.items } />
      
      <div>
        <button onClick={() => this.addItem(5,'Cucumber',1,'x')}>Add 1 cucumber</button>
        <button onClick={() => this.addItem(6,'Tomato',1,'x')}>Add 1 tomato</button>
        <button onClick={() => this.addItem(7,'Raspberry',5,'x')}>Add 5 raspberries</button>
        <button onClick={() => this.addItem(8,'Olive Oil',1,'ltr')}>Add 1ltr olive oil</button>
      </div>

    </div>
  }
}

export default App;