import { useDispatch, useSelector } from "react-redux";
import {
  counterDecrement,
  counterHard,
  counterIncrement,
  counterRandom,
  counterReset,
} from "../../redux/reducer/counter/counterActions";
import "./Counter.scss";

const Counter = () => {
  const { counter } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-6 color">
            <h1 className="text-center">Counter Application with redux</h1>
            <div className="counter">
              <h1>{counter}</h1>
              <hr />
              <button
                className="btn btn-sm btn-danger me-2"
                onClick={() => dispatch(counterDecrement())}
              >
                --
              </button>
              <button
                className="btn btn-sm btn-danger me-2"
                onClick={() => dispatch(counterIncrement())}
              >
                ++
              </button>
              <button
                className="btn btn-sm btn-danger me-2"
                onClick={() => dispatch(counterReset())}
              >
                Reset
              </button>
              <button
                className="btn btn-sm btn-danger me-2"
                onClick={() => dispatch(counterHard())}
              >
                Hard-reset
              </button>
              <button
                className="btn btn-sm btn-danger me-2"
                onClick={() => dispatch(counterRandom())}
              >
                Random
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
