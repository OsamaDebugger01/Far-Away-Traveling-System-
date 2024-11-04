import React from 'react';

interface ItemProps {
  item: {
    id: number;
    packed: boolean;
    quantity: number;
    description: string;
  };
  onDeleteItem: (id: number) => void;
  onToggleItem: (id: number) => void;
}

const Item: React.FC<ItemProps> = ({ item, onDeleteItem, onToggleItem }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
};

export default Item;

