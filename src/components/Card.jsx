import React from 'react';

export default function Card({ data }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{data}</h5>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );
}
