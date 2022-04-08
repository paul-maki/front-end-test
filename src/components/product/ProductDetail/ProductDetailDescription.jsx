import { useId } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export const ProductDetailDescription = ({showDetails}) => {
    console.log(showDetails);
    return(
        <div>
            <ListGroup>
                {showDetails.filter(value => value !== '' && value !== '-').map((detail, index) => {
                    return(                        
                        <ListGroupItem key={index}>
                            {typeof detail === 'string' ? detail : detail.join(' / ')}
                        </ListGroupItem>                        
                    )
                })}
            </ListGroup>
        </div>
    )
}