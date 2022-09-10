import StyledAvatars from './styles';
const Avatars = ({
  avatars,
  setSelectedAvatar,
  selectedAvatar,
  setProfilePicture,
}) => {
  return (
    <StyledAvatars>
      <h1>Pick an avatar as a profile picture</h1>
      <div className="avatars-container">
        {avatars.map((avatar, index) => (
          <div
            className={`avatar ${selectedAvatar === index ? 'selected' : ''}`}
            key={index}
            onClick={() => setSelectedAvatar(index)}
          >
            <img src={`data:image/svg+xml;base64,${avatar}`} alt="avatar" />
          </div>
        ))}
      </div>
      <button onClick={() => setProfilePicture()}>
        set as profile picture
      </button>
    </StyledAvatars>
  );
};

export default Avatars;
