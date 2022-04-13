import { Container, Input } from "reactstrap";
import { ProductListItem } from "../ProductListItem/ProductListItem";
import styles from './ProductList.module.scss';

export const ProductList = ({handleOnChange, productList}) => {
    return(
        <Container className={styles.container} fluid>
            <div className="d-flex justify-content-end">
                <Input className="w-25" placeholder="Search" onChange={handleOnChange}></Input>
            </div>
            <div className={styles.productList}>
                {productList.length > 0 && productList.map(
                    product => {
                        return(
                            <ProductListItem key={product.id} {...product} />
                        )
                    }
                )}                
            </div>
        </Container>
    )
}