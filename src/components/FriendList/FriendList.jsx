import { FriendListItem } from './FriendListItem';
import PropTypes from 'prop-types';
// import friends from "./FriendList/friends.json";

export const FriendList = ({ friends }) => {
  return (
    <ul class="friend-list">
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          isOnline={isOnline}
          avatar={avatar}
          name={name}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
// <!-- Довільна кіл-сть FriendListItem -->

// export default function FriendList({ friends }) {
//   return (
//     <ul>
//       {friends.map(({ id, isOnline, avatar, name }) => (
//         <FriendListItem
//           key={id}
//           isOnline={isOnline}
//           avatar={avatar}
//           name={name}
//         />
//       ))}
//     </ul>
//   );
// }

// FriendList.prototype = {
//   friends: PropTypes.arrayOf(
//     PropTypes.shape({
//       isOnline: PropTypes.bool,
//       avatar: PropTypes.string,
//       name: PropTypes.string,
//     })
//   ).isRequired,
// };
