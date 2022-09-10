export const changePage = async () => {
  const user = await JSON.parse(localStorage.getItem('chat-app-user'));
  if (!user) {
    return '/login';
  } else {
    if (user.isAvatarImageSet) {
      return '/';
    } else {
      return '/avatar';
    }
  }
};
export const removeUser = () => {
  localStorage.removeItem('chat-app-user');
};
