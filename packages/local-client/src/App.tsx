import "@fortawesome/fontawesome-free/css/all.min.css"
import {Provider} from "react-redux";
import 'bulmaswatch/darkly/bulmaswatch.min.css'
import {store} from "./state";
import CellList from "./components/cell-list";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <CellList />
      </div>
    </Provider>
  );
};

export default App;
