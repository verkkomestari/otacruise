import * as Icon from 'react-bootstrap-icons';

const IconGet = (id) => {
  console.log(id);
  if (id.id === 'main') {
    return <Icon.InfoCircle />;
  } else if (id.id === 'aboutus') {
    return <Icon.ChatHeart />;
  } else {
    return <Icon.Heart />;
  }
};

export default IconGet;
