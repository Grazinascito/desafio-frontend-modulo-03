import "./style.css";
import HeaderTable from "./HeaderTable";
import editIcon from "../../assets/edit-icon.svg";
import deleteIcon from "../../assets/delete-icon.svg";

const TransactionsTable = () => {
  return (
    <div className="table">
      <HeaderTable />

      <div className="table__body">
        <div className="table__line">
          <div className="table__line-items">01/09/21</div>
          <div className="table__line-items">Quarta</div>
          <div className="table__line-items">Venda dos brigadeiros</div>
          <div className="table__line-items">Pix</div>
          <div className="table__line-items">R$ 100,00</div>
          <div className="table__line-items">
            <img src={editIcon} alt="" />
            <img src={deleteIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionsTable;
