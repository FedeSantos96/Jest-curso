import React from 'react';

const namespace = 'button';

const Button = ({ action, ...props }) => {

  const handleClick = () => {
    // eslint-disable-next-line no-undef
    googleTrack.sendTrack();
    action();
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
