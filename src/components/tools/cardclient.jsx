import PropTypes from "prop-types";

const Cardclient = (props) => {
  return (
    <div>
      <img src={props.img}
      className="rounded-lg px-10 py-10"/>
      <p className="legend">{props.p}</p>
    </div>
  );
};

Cardclient.propTypes = {
  p: PropTypes.string,
  img: PropTypes.string,
};

export default Cardclient;