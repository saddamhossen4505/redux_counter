import { useDispatch } from "react-redux";
import {
  setBgBlue,
  setBgGreen,
  setBgPink,
  setBgPurple,
  setBgRed,
  setBgSky,
  setBgYellow,
} from "../../redux/reducer/bgColor/bgColorActions";
import "./BgColor.scss";

const BgColor = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-6 color">
            <h2 className="text-center">Set Background color</h2>
            <div className="bgArea">
              <button
                className="btn btn-success btn-sm me-2"
                onClick={() => dispatch(setBgGreen())}
              >
                Green
              </button>
              <button
                className="btn btn-info btn-sm me-2"
                onClick={() => dispatch(setBgSky())}
              >
                Sky-Blue
              </button>
              <button
                className="btn btn-warning btn-sm me-2"
                onClick={() => dispatch(setBgYellow())}
              >
                Yellow
              </button>
              <button
                className="btn btn-danger btn-sm me-2"
                onClick={() => dispatch(setBgRed())}
              >
                Red
              </button>
              <button
                className="btn btn-info btn-sm me-2"
                onClick={() => dispatch(setBgPink())}
              >
                Pink
              </button>
              <button
                className="btn btn-warning btn-sm me-2"
                onClick={() => dispatch(setBgPurple())}
              >
                Purple
              </button>
              <button
                className="btn btn-primary btn-sm me-2"
                onClick={() => dispatch(setBgBlue())}
              >
                Blue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BgColor;
