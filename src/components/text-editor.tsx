import MDEditor from "@uiw/react-md-editor";
import {useEffect, useRef, useState} from "react";
import './text-editor.css';
import {Cell} from "../state";
import {useActions} from "../hooks/use-actions";


interface TextEditorProps {
  cell: Cell;
}

const TextEditor: React.FC<TextEditorProps> = ({cell}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [edditing, setEdditing] = useState(false);
  const {updateCell} = useActions();

  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (ref.current && event.target && ref.current?.contains(event.target as Node)) {
        console.log("element clicked on is inside editor");
      } else {
        console.log("element clicked is not inside editor");
      }

      setEdditing(false);
    };
    document.addEventListener("click", listener, {capture: true});

    return () => {
      document.removeEventListener("click", listener, {capture: true});
    };
  }, []);

  if (edditing) {
    return (
      <div ref={ref} className="text-editor">
        <div className="card-content">
          <MDEditor value={cell.content} onChange={(v) => updateCell(cell.id, v || "")}/>
        </div>
      </div>
    );
  }

  return (
    <div onClick={() => setEdditing(true)} className="text-editor card">
      <div className="card-content">
        <MDEditor.Markdown source={cell.content || "Click to edit"}/>
      </div>
    </div>
  );
};

export default TextEditor;