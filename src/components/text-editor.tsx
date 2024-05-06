import MDEditor from "@uiw/react-md-editor";
import {useEffect, useState} from "react";

const TextEditor: React.FC = () => {
  const [edditing, setEdditing] = useState(false);

  useEffect(() => {
    const listener = () => {
      setEdditing(false);
    };
    document.addEventListener("click", listener, {capture: true});

    return () => {
      document.removeEventListener("click", listener, {capture: true});
    };
  },[]);

  if (edditing) {
    return (
      <div>
        <MDEditor />
      </div>
    );
  }

  return (
    <div onClick={() => setEdditing(true)}>
      <MDEditor.Markdown source={"# Header"} />
    </div>
  );
};

export default TextEditor;