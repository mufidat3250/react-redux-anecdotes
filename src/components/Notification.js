import { connect } from "react-redux";
const Notification = (props) => {
  if (props.notification === "") return null;
  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
  };
  return <div style={style}>{props.notification}</div>;
};

const mapStateToprops = (state) => {
  return state;
};

const connectNotification = connect(mapStateToprops)(Notification);
export default connectNotification;
