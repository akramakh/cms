import React from 'react';
import './style.scss';

export default function Title(props) {
  const {align, color} = props;
  const __align = align || 'center';
  const __color = color || '#fff';

  const style = {
    textAlign: __align,
    color: __color,
  };
  return (
    <h1 class='section-title' style={style}>
      {props.children}
    </h1>
  );
}
