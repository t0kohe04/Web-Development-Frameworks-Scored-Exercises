import React from "react";
import styles from './ShoppingListItem.module.css';


/* Shopping list item */
const ShoppingListItem = props => {
  return <li className={ styles.flex}>
    <div className={ styles.flex }>
      <div>
        { props.qty }
      </div>
      <div>
        { props.unit }
      </div>
    </div>
    <div>
      { props.value}
    </div>
  </li>
}

export default ShoppingListItem;