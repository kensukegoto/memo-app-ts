import './item-text.scss';
import { useState } from "react";
import { Item } from '../state';
import AddItem from './add-item';
interface ItemTextProps {
  item: Item
}

const ItemText: React.FC<ItemTextProps> = ({ item }) => {

  const [content,setContent] = useState('');

  return (
    <div className="textItem">
      <div className="textItem__edit">
        <input className="input is-primary" value={content} onChange={(val) => setContent(val.target.value)}/>
      </div>
      <AddItem previousItemId={item.id} />
    </div>
  )
}

export default ItemText;