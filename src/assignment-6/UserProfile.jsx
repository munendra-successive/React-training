/*

5.Implement a React component (UserProfile) that displays user profile information such as name, email, and phone number. 
Write tests to ensure that the user profile information is correctly displayed when the component receives user data as props.

*/

const UserProfile = (props) => {
  const { name, email, phone } = props;
  return (
    <div>
      <h4>
        5.Implement a React component (UserProfile) that displays user profile
        information such as name, email, and phone number. Write tests to ensure
        that the user profile information is correctly displayed when the
        component receives user data as props.
      </h4>
      <h4>User Details</h4>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
    </div>
  );
};
export default UserProfile;
