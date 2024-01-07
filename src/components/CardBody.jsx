export const CardBody = ({ body }) => {
   const { title, text, btn } = body;
   return (
      <div className="card-body">
         <h5 className="card-title">{title}</h5>
         <p className="card-text">{text}</p>
         <a href="#" className="btn btn-primary">{btn}</a>
      </div>
   )
}