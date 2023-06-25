import React from 'react';
import PropTypes from 'prop-types';

const Badge = ({name, id}) => {
    return ( 
        <li key={id} className='card-quality'>
        {name}
    </li>
    );
}
 
export default Badge;

Badge.propTypes = {
    name: PropTypes.string,
    id: PropTypes.number
}