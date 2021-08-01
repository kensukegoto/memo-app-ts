import './action-bar.scss';
import { useActions } from '../hooks/use-actions';
interface ActionBarProps {
  id: string;
}

const ActionBar: React.FC<ActionBarProps> = ({ id }) => {
  const {moveItem, deleteItem} = useActions();

  return (
    <div className="action-bar">
      <button
        className="button is-primary is-small"
        onClick={() => moveItem(id, 'up')}
      >
        <span className="icon">
          <i className="fas fa-arrow-up"></i>
        </span>
      </button>
      <button
        className="button is-primary is-small"
        onClick={() => moveItem(id, 'down')}
      >
        <span className="icon">
          <i className="fas fa-arrow-down"></i>
        </span>
      </button>
      <button
        className="button is-primary is-small"
        onClick={() => deleteItem(id)}
      >
        <span className="icon">
          <i className="fas fa-times"></i>
        </span>
      </button>
    </div>
  )
}

export default ActionBar;