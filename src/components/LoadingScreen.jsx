import { useProgress } from "@react-three/drei";

export const LoadingScreen = ({ started = false, onStarted = () => { } }) => {
  const { progress } = useProgress();

  return (
    <div className={ `loadingScreen ${ started ? "loadingScreen--started" : "" }` }>
      <div className="loadingScreen__progress">
        <div
          className="loadingScreen__progress__value"
          style={ {
            width: `${ progress }%`,
          } }
        />
      </div>
      <div className="loadingScreen__board">
        <h1 className="loadingScreen__title">Welcome to my coffee journey!</h1>
        <img
          src="/images/coffee_cup.png"
          className="coffee__cup"
          alt="A coffee cup illustration"
        />
        <img
          src="/images/coffee_beans.png"
          className="coffee__beans"
          alt="Coffee beans illustration"
        />
        <button
          className="loadingScreen__button"
          disabled={ progress < 100 }
          aria-disabled={ progress < 100 }
          onClick={ onStarted }
        >
          Start
        </button>
      </div>
    </div>
  );
};
