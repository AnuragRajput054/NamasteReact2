import { CDN_URL } from "../utils/constaints";

const RestaurantCard = ({
    cloudinaryImageId,
    name,
    cuisines,
    area,
    avgRating,
    deliveryTime,
  }) => {
    return (
      <div className="res-card">
        <img
          src={
            CDN_URL +
            cloudinaryImageId
          }
        />
        <hr></hr>
        <h3>{name}</h3>
        <p>{cuisines.join(",")}</p>
        <p>
        <i className="fa-solid fa-location-dot"></i>
        {area}</p>
        <p>
          {avgRating}
          <span className="icon"> <i className="fa-solid fa-star" ></i></span>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
          <span>{deliveryTime} Min</span>
        </p>
      </div>
    );
  };

  export default RestaurantCard;