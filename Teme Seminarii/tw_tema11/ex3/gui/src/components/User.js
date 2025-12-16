import "./User.css";
import RegularUser from "./RegularUser";
import PowerUser from "./PowerUser";

function User({ item, onSelect }) {
  return (
    <div className="user" onClick={() => onSelect(item)}>
      {item.username}
    </div>
  );
}

export default User;
