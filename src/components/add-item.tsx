import './add-item.scss';
import { useActions } from "../hooks/use-actions";
interface AddItemProps {
  previousItemId: string | null;
}

const AddItem: React.FC<AddItemProps> = ({ previousItemId }) => {
  const { insertItemAfter } = useActions();
  return (
    <div className="addItem">
      <button
        className="button is-rounded is-small is-light"
        onClick={() => insertItemAfter(previousItemId,'text')}
      >
        <span className="icon is-small">
          <i className="fas fa-plus"></i>
        </span>
      </button>
    </div>
  )
};

export default AddItem;