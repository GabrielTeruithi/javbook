import {Provider} from "react-redux";
import 'bulmaswatch/darkly/bulmaswatch.min.css'
import CodeCell from "./components/code-cell";
import TextEditor from "./components/text-editor";
import {store} from "./state";

const App = () => {
  return (
    <Provider store={store}>
      <>
        <TextEditor/>
      </>
    </Provider>
  );
};

export default App;
