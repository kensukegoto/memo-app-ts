import './item-text.scss';
import { Item } from '../state';
import AddItem from './add-item';
import ActionBar from './action-bar';
import { useActions } from '../hooks/use-actions';
interface ItemTextProps {
  item: Item
}

const ItemText: React.FC<ItemTextProps> = ({ item }) => {

  const { updateItem } = useActions();

  return (
    <div className="textItem">
      <ActionBar id={item.id} />
      <div className="textItem__edit">
        <input className="input is-primary" value={item.content} onChange={(val) => updateItem(item.id,val.target.value)}/>
      </div>
      <AddItem previousItemId={item.id} />
    </div>
  )
}

export default ItemText;