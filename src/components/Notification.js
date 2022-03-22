import { useSelector } from "react-redux";
import { setNotification } from "../reducers/notificationSlice";
const Notification = () => {
  const notifications = useSelector(({ notification }) => notification);

  console.log({ notifications });
  if (notifications === "") return null;
  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
  };
  return <div style={style}>{notifications}</div>;
};

export default Notification;
