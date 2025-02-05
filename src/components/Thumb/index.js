import React from 'react';
import PropTypes from 'prop-types';

const Thumb = props => {
  return (
    <div className={props.classes}>
      <img src={props.src} alt={props.alt} title={props.title} onMouseIn="$(this).attr('src','/static/media/11033926921508488_1.b2b7a729.jpg')" />
    </div>
  );
};

Thumb.propTypes = {
  alt: PropTypes.string,
  title: PropTypes.string,
  classes: PropTypes.string,
  src: PropTypes.string.isRequired
};

export default Thumb;
