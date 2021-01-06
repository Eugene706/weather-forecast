import { useState, useEffect, memo } from 'react';

const Visibiliti = memo(function Visibiliti({ visibiliti, isLoaded }) {
  const visibilitiKm = visibiliti / 1000;

  const [visibilitiStatus, setVisibilitiStatus] = useState('');

  useEffect(() => {
    if (visibiliti <= 40) {
      setVisibilitiStatus('Very bad visibiliti');
    }

    if (visibiliti >= 41 && visibiliti <= 700) {
      setVisibilitiStatus('Bad visibiliti');
    }

    if (visibiliti >= 701 && visibiliti <= 1500) {
      setVisibilitiStatus('Not bad visibiliti');
    }

    if (visibiliti >= 1501 && visibiliti <= 3000) {
      setVisibilitiStatus('Normal visibiliti');
    }

    if (visibiliti >= 3001 && visibiliti <= 6000) {
      setVisibilitiStatus('Good visibiliti');
    }

    if (visibiliti >= 6001 && visibiliti <= 10000) {
      setVisibilitiStatus('Very good visibiliti');
    }

    if (visibiliti >= 10001) {
      setVisibilitiStatus('Incredible visibility');
    }
  }, [visibiliti]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div>
      <div className="highlight visibility">
        <span className="visibility-text">Visibility</span>
        <div className="visibility-distance">
          <span className="visibility-distance-text">{visibilitiKm}</span>
          <span className="km">km</span>
        </div>
        <span className="visibility-distance__status">{visibilitiStatus}</span>
      </div>
    </div>
  );
});

export default Visibiliti;
