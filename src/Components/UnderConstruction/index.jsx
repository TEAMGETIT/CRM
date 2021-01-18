/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

function UnderConstruction() {
  const imagePath = `${window.location.origin}/images/under-construction.png`;
  return <img style={{'width': '100%', minHeight: '92vh'}} src={imagePath} />;
}

export default UnderConstruction;
