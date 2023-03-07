import { useDispatch } from "react-redux";
import { bgImage } from "../../redux/reducer/bgImg/bgImageActions";
import "./BgImg.scss";

const BgImg = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-6 color">
            <h2 className="text-center">Set Background Image</h2>
            <div className="bgImageArea">
              <select
                name=""
                id=""
                className="form-control"
                onChange={(e) => dispatch(bgImage(e.target.value))}
              >
                <option>-select-</option>
                <option value="https://thumbs.dreamstime.com/b/aster-flowers-art-design-26968847.jpg">
                  Flower
                </option>
                <option value="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ZVMny1FX64N8G9wHKlhLIx2WTAa9kmT6FQC3IPbK&s">
                  Baby
                </option>
                <option value="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg">
                  Nature
                </option>
                <option value="https://cdn.pixabay.com/photo/2020/06/21/09/48/hill-5324149__340.jpg">
                  Hill
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BgImg;
