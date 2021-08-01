import './list-item.scss';
import { Fragment } from 'react';
import { useTypedSelector } from '../hooks/use-typed-selector';
// import ItemText from './item-text';
import ItemTinyEditor from './item-tiny-editor';
import AddItem from './add-item';

const ListItem: React.FC = () => {
  const items = useTypedSelector(({
    items: {order,data}
  }) => {
    return order.map(id => data[id]);
  });

  const renderedItems = items.map(item => {
    return (
      <Fragment key={item.id}>
        <div>
          {item.content}
        <ItemTinyEditor item={item} />
        </div>
      </Fragment>
    );
  });

  return (
    <div>
      <AddItem previousItemId={null} />
      {renderedItems}
    </div>
  )
};

export default ListItem;