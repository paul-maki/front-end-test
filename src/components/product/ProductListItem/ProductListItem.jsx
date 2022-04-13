import { Link } from "react-router-dom";
import { Card, CardBody, CardImg } from "reactstrap"
import styles from './product-list-item.module.scss';

export const ProductListItem = ({id, brand, model, price, imgUrl}) => {
    return (       
        <Card className={styles.productListItem}>
            <Link className="text-decoration-none text-black" to={`/${id}`}>
                <CardBody className="d-flex flex-column">                
                    <div className={styles['image-container']}>
                        <CardImg  src={imgUrl} ></CardImg>
                    </div>
                    <span className="title h5">{brand} {model}</span>
                    <p className="h4">{price} €</p>
                </CardBody>
            </Link>
        </Card>
    )
}