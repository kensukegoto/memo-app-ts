import { useActions } from "../hooks/use-actions";
interface AddItemProps {
  previousItemId: string | null;
}

const AddItem: React.FC<AddItemProps> = ({ previousItemId }) => {
  const { insertItemAfter } = useActions();
  return (
    <div>
      <button
        onClick={() => insertItemAfter(previousItemId,'text')}
      >+</button>
    </div>
  )
};

export default AddItem;