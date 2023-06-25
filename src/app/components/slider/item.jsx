import "./index.css"
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { SliderContext } from "./slider-context";

const SliderItem = ({children}) => {
    const width = useContext(SliderContext)
    return ( 
        <div 
            className="slider-items-item" 
            style={{
                maxWidth:width +"px",
                minWidth:width +"px"
            }}
        >
            { children }
        </div>
    );
}
 
SliderItem.propTypes = {
    children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]),
}

export default SliderItem;