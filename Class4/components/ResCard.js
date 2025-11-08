import { CARD_IMGS } from "../utils/constants";
const ResCard = (props) =>{
    const {resData} = props;
    const {name, avgRating, costForTwo, cuisines, deliveryTime} = resData?.info;
    return(
         <div className="card">
            <img alt="res" src={CARD_IMGS + resData.info.cloudinaryImageId} style={{ height: '200px', width: '150px', margin: '3px'}}></img>
            <h3>{name}</h3>
            <h4>{avgRating}</h4>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime}</h4>
            
            {/* <h4></h4> */}
        </div>
    )
}
export default ResCard;