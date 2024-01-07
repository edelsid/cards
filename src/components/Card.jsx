import { CardBody } from "./CardBody"

export const Card = ({ item }) => {
   const { img, body } = item;
   return (
      <div className="card" style={{width: 18+'rem'}}>
         {img !== null && <img src={img} className="card-img-top"></img>}
         <CardBody body={body}></CardBody>
      </div>
   )
}