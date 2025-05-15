import React from 'react';
import logo from '../assets/logo.png';

function Logo({ size = 54 }) {
  return (
    <img src={logo} alt="Logo BrabusFit American" style={{ height: size, width: size, borderRadius: '50%', background: '#fff', objectFit: 'cover', boxShadow: '0 2px 8px #1A237E22' }} />
  );
}

export default Logo; 