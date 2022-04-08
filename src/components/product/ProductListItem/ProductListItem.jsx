import { Card, CardBody, CardImg } from "reactstrap"
import styles from './ProductListItem.module.scss';
import { useNavigate } from 'react-router-dom';


export const ProductListItem = ({id, brand, model, price, imgUrl}) => {
    const navigate = useNavigate()
    const handleOnClickCard = () => {
        navigate(`/${id}`)
    }
    return (
        <Card className={styles.productListItem} onClick={handleOnClickCard}>
            <CardBody>
                <span className="h4">{brand} </span>
                <span className="h3">{model}</span>
                <CardImg src={imgUrl} ></CardImg>
            </CardBody>
        </Card>
    )
}