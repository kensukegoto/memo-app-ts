import { useTypedSelector } from '../hooks/use-typed-selector';
import { useActions } from '../hooks/use-actions';

const ListItem: React.FC = () => {
  const { insertItemAfter } = useActions();
  const items = useTypedSelector(({
    items: {order,data}
  }) => {
    return order.map(id => data[id]);
  });

  const onClick = () => {
    insertItemAfter(null,'text');
  }

  return (
    <div>
      <button onClick={onClick}>click</button>
      {items.map(item => item.id)};
    </div>
  )
};

export default ListItem;