import React, {Fragment} from "react";
import {useTypeSelector} from "../hooks/use-type-selector";
import CellListItem from "./cell-list-item";
import AddCell from "./add-cell";
import "./cell-list.css"

const CellList: React.FC = () => {
  const cells = useTypeSelector(({cells: {order, data}}) => order.map((id) => data[id]));

  const renderedCells = cells.map(cell => (
    <Fragment key={cell.id}>
      <CellListItem cell={cell}/>
      <AddCell previousCellId={cell.id}/>
    </Fragment>
  ));

  return (
    <div className="cell-list">
      <AddCell forceVisible={cells.length === 0} previousCellId={null}/>
      {renderedCells}
    </div>
  );
}

export default CellList;