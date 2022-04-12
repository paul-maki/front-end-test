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
            <CardBody className="d-flex flex-column">
                <span className="title h4">{brand} </span>
                <span className="subtitle h3">{model}</span>
                <CardImg src={imgUrl} ></CardImg>
            </CardBody>
        </Card>
    )
}