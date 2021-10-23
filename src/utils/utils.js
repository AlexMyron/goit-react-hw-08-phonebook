const switchContent = content => {
  switch (content) {
    case 'userData':
      return 'data';
    case 'editForm':
      return 'form';
    default:
      return null;
  }
};

const utils = { switchContent };

export default utils;
