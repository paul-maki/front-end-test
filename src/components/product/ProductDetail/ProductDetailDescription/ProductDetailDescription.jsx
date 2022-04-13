import { ListGroup, ListGroupItem } from "reactstrap";
import styles from './product-detail-description.module.scss';

export const ProductDetailDescription = ({showDetails}) => {
    return(
        <div>
            <ListGroup className={styles.list}>
                {showDetails.filter(detail => detail.info !== '' && detail.info !== '-').map((detail, index) => {
                    return(                        
                        <DescriptionRow key={detail.property} property={detail.property} info={detail.info} />
                    )
                })}
            </ListGroup>
        </div>
    )
}

const DescriptionRow = ({property, info}) => {
    return(
        <ListGroupItem key={info}>
            <span className={styles.property}>{property}:</span>
            <span> {typeof info === 'string' ? info : info.join(' / ')}</span>        
        </ListGroupItem> 
    )
}