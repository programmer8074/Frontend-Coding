import { useDispatch, useSelector } from "react-redux";
import { bagSliceActions } from "../store/bagSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomeItem = ({ item }) => {
  const bag = useSelector((store) => store.bag);
  const foundElement = bag.indexOf(item.id) >= 0;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [addStatus, setStatus] = useState(foundElement);
  const toggleStatus = () =>
    setStatus((addStatus) => {
      return !addStatus;
    });
  const handleAdd = () => {
    if (!addStatus) {
      dispatch(bagSliceActions.addToBag(item.id));
      toggleStatus();
    } else {
      navigate("/bag");
    }
  };
  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      <button className="btn-add-bag btn btn-info" onClick={handleAdd}>
        {addStatus ? "Go to Bag" : "Add to bag"}
      </button>

      {addStatus && (
        <button
          className=" btn btn-warning btn-add-bag"
          onClick={() => {
            dispatch(bagSliceActions.removeFromBag(item.id));
            setStatus(false);
          }}
        >
          Remove from Bag
        </button>
      )}
    </div>
  );
};
export default HomeItem;
