import PropTypes from 'prop-types';
import Button from './Button';

const Header = (props: any) => {
  const onClick = () => {
    alert('clicked!');
  };
  return (
    <header className="header">
      <h1>{props.title}</h1>
      <Button onClick={onClick} color="green" btnText="Add" />
    </header>
  );
};
Header.defaultProps = {
  title: 'Title',
  btnText: 'click me',
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
};

export default Header;
