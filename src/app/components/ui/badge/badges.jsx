import React from 'react';
import PropTypes from 'prop-types';
import Badge from './badge';

const Badges = ({arr}) => {
    return (
    <ul className='card-qualities'>
        {arr.map((el,ind)=>{
            return <Badge name={el} key={ind}/>
        })}
    </ul>
);
}
 
export default Badges;

Badges.propTypes = {
    arr: PropTypes.array.isRequired
}