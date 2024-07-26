import Ad from "./Ad";
import FriendRequests from "./FriendRequests";
import Notifications from "./Notifications";

const RightMenu = ({ userId }) => {
  return (
    <div className=" flex flex-col gap-6">
      <FriendRequests />
      <Notifications />
      <Ad />
    </div>
  );
};

export default RightMenu;
