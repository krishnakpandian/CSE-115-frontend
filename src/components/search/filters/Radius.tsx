import './Radius.css';

const Radius = ({ currentRad, setCurrentRad }) => {
  return (
    <div className='Radius'>
      <div className="field subtitle is-6">
        Radius
        <div className="control">
          <div className="select is-info">
            <select value={currentRad} onChange={(e) => setCurrentRad(e.target.value)}>
              <option value='10'>within 10 km</option>
              <option value='25'>within 25 km</option>
              <option value='50'>within 50 km</option>
              <option value='75'>within 75 km</option>
              <option value='100'>within 100 km</option>
              <option value='150'>within 150 km</option>
              <option value='200'>within 200 km</option>
              <option value='300'>within 300 km</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Radius;