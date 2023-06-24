import './progressBar.css';

const ProgressBar = ({ name, color, percent }) => {
  return (
    <>
      <div className='progress-bar'>
        <div className='progress-item'>
          <div className='progress-text'>
            <p>{name}</p>
            <p>{percent}%</p>
          </div>
          <div className='progress-line' data-percent={percent}>
            <span className='progress-color' style={{backgroundColor:`#${color}`, width:`${percent}%`}}></span>
          </div>
        </div>
      </div>
    </>
  );
}
 
export default ProgressBar;
