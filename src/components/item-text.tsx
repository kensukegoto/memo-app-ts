import { useState } from "react";

const ItemText = () => {

  const [content,setContent] = useState('');

  return (
    <div>
      <input value={content} onChange={(val) => setContent(val.target.value)}/>
    </div>
  )
}

export default ItemText;