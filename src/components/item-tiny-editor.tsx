import './item-tiny-editor.scss';
import { useRef } from 'react';
import { Item } from '../state';
import AddItem from './add-item';
import ActionBar from './action-bar';
import { useActions } from '../hooks/use-actions'; 
import { Editor } from '@tinymce/tinymce-react';

interface ItemTinyEditorProps {
  item: Item
}

const ItemTinyEditor: React.FC<ItemTinyEditorProps> = ({item}) => {

  const { updateItem } = useActions();
  const editorRef = useRef<any>();
  const onChange = (e: any) => {
    if(!editorRef) return;
    updateItem(item.id,editorRef.current.getContent());
  }
  

  return (
    <div className="tinyItem">
      <ActionBar id={item.id} />
      <div>
        <Editor
          onKeyUp={e => onChange(e)}
          apiKey='83f6028mdsd8lezuso3wtuct3gyk5uwd1rccqrp2s5eaxl5w'
          onInit={(evt, editor) => editorRef.current = editor}
          initialValue={item.content}
          init={{
            language: 'ja',
            height: 200,
            menubar: false,
            plugins: [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help wordcount'
            ],
            toolbar: 'undo redo | formatselect | ' +
            'bold italic backcolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
          }}
        />
      </div>
      <AddItem previousItemId={item.id} />
    </div>
    
  )
}

export default ItemTinyEditor;