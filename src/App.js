import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { LeftBar, RightBar } from './components';
import { fetchGeolocation } from './redux/actions/location';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGeolocation());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const isLoaded = useSelector(({ weather }) => weather.isLoaded);
  return (
    <div className="wraper">
      {isLoaded && (
        <div>
          <LeftBar />
          <RightBar />
        </div>
      )}
    </div>
  );
}

export default App;
