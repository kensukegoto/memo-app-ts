import { useState } from "react";
import { Item } from '../state';
import AddItem from './add-item';
interface ItemTextProps {
  item: Item
}

const ItemText: React.FC<ItemTextProps> = ({ item }) => {

  const [content,setContent] = useState('');

  return (
    <div>
      <input value={content} onChange={(val) => setContent(val.target.value)}/>
      <AddItem previousItemId={item.id} />
    </div>
  )
}

export default ItemText;