import React from 'react';
import { sendData } from '../../utils/apiCall';

const namespace = 'button';

const Button = ({ action, ...props }) => {

  const handleClick = () => {
    // eslint-disable-next-line no-undef
    googleTrack.sendTrack();
    action?.callback();

    if(action?.type === "query") {
        sendData();
    }
  };

  return (
    <button
      className={namespace}
      data-testid="button"
      onClick={() => handleClick()}
      {...props}
    >
      Enviar
    </button>
  );
};

export default Button;
