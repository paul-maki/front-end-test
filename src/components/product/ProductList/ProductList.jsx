import axios from "axios"
import { useEffect, useState } from "react"
import { Container, Input } from "reactstrap";
import { API_PRODUCT_ENDPOINT } from "../../../api/endPoints/product/productEndpoints";
import localGetItem from "../../../tools/localGetItem";
import setItemExpiration from "../../../tools/setTimeExpiration";
import { ProductListItem } from "../ProductListItem/ProductListItem";
import styles from './ProductList.module.scss';

export const ProductList = () => {
    const [productList, setProductList] = useState([]);
    const [filteredProductList, setFilteredProductList] = useState([]);

    const handleOnChange = (event) => {
        const textToFind = event.target.value.toLowerCase();
        setFilteredProductList(productList.filter(product => product.brand.toLowerCase().includes(textToFind) || product.model.toLowerCase().includes(textToFind)))
    }

    useEffect(() => {
        const storedProductList = localGetItem('productList');
        const now = new Date().getTime();
        if(!storedProductList || (now > storedProductList.expiry)) {
            axios.get(API_PRODUCT_ENDPOINT)
            .then(response => {
                setProductList(response.data);
                setItemExpiration('productList',response.data, 60);
            });
            
        } else {
            setProductList((storedProductList.data));
        }
    },[]);

    useEffect(() => {
        setFilteredProductList(productList);
    },[productList])

    return(
        <Container fluid>
            <div className="d-flex justify-content-end">
                <Input className="w-25" placeholder="Search" onChange={handleOnChange}></Input>
            </div>
            <div className={styles.productList}>
                    {filteredProductList.length > 0 && filteredProductList.map(
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