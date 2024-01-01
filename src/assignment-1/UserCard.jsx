/*
2.Create a functional component named UserCard that accepts the following props: name, email, and avatarURL.
    Use the props to display the user's name, email, and an image (avatar) in the UserCard component.
*/

const UserCard = ({ users }) => {
  return (
    <>
      <p>
        2.Create a functional component named UserCard that accepts the
        following props: name, email, and avatarURL. Use the props to display
        the user's name, email, and an image (avatar) in the UserCard componen
      </p>
      {users.map((user, index) => (
        <div key={index}>
          <img src={user.avatarUrl} alt="avatar img" />
          <p>name: {user.name}</p>
          <p>email: {user.email}</p>
        </div>
      ))}
    </>
  );
};

export default UserCard;
