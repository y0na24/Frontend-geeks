import React, { cloneElement, useEffect, useState } from "react"
import PropTypes from "prop-types"
import "./index.css"

const Slider = ({ children }) => {
    const width = 700
    const [pageNumber, setPage] = useState(1)
    const editedChildren = React.Children.map(children, function(children) {
        return cloneElement(children, {
            style:{
                height: "100%",
                minWidth: `${width}px`,
                maxWidth: `${width}px`
            }
        })
    })
    const handleLeftClick = () => {
        setPage(p=>p-1)
    }
    const handleRigthClick = () => {
        setPage(p=>p+1)
    }
    return (
        <div className="slider-main" style={{width: width}}>
            <button disabled={pageNumber === 1} onClick={handleLeftClick}>{"<"}</button>
                <div className="slider-window">
                    <div
                        className="slider-items"
                        style={{
                            transform: `translateX(-${(pageNumber - 1) * width}px)`
                        }}
                    >
                        {editedChildren}
                    </div>
                </div>
            <button disabled={pageNumber === children.length} onClick={handleRigthClick}>{">"}</button>
        </div>
    );
};

export default Slider

Slider.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}