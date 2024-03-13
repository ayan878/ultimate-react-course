
// //by using useSelector
// import { useSelector } from "react-redux";

// function formatCurrency(value) {
//   return new Intl.NumberFormat("en", {
//     style: "currency",
//     currency: "USD",
//   }).format(value);
// }

// function BalanceDisplay() {
//   const balance = useSelector((store) => store.account.balance);
//   return <div className="balance">{formatCurrency(parseFloat(balance))}</div>;
// }

// export default BalanceDisplay;

//by using connect function

import { connect } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay({ balance }) {
  return <div className="balance">{formatCurrency(parseFloat(balance))}</div>;
}

function mapStateToProps(state) {
  return {
    balance: state.account.balance,
  };
}

export default connect(mapStateToProps)(BalanceDisplay);
