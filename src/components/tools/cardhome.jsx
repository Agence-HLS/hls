import PropTypes from "prop-types";

const Cardhome = (props) => {
  return (
    <div>
      <img src={props.img}/>
      <p className="legend">{props.p}</p>
    </div>
  );
};

Cardhome.propTypes = {
  p: PropTypes.string,
  img: PropTypes.string,
};

export default Cardhome;