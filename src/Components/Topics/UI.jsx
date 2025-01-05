import React from 'react';
import { NavLink } from 'react-router-dom';

export default function UI({ cat, category }) {

  return (
    <div className="col-sm-4 rounded rounded-3">
    
      <NavLink to={`/${category}/topics/${cat.name}`}>
        <div className="card m-1">
          <div className="card-body d-flex align-items-center">
            <img
              src={cat.styles.icon || cat.styles.legacyIcon?.url}
              className="card-img-left rounded rounded-3"
              alt={cat.name}
              style={{ width: '100px', height: '100px', objectFit: 'cover' }}
            />
           
           
            <h5 className="card-title text-center ms-3">{`keyword: ${cat.name}`}</h5>
          </div>
        </div>
      </NavLink>
    </div>
  );
}
