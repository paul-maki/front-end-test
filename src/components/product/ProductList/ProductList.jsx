import axios from "axios"
import { useEffect, useState } from "react"
import { Container, Input } from "reactstrap";
import { API_PRODUCT_ENDPOINT } from "../../../api/endPoints/product/productEndpoints";
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
        const storedProductList = localStorage.getItem('productList');
        if(storedProductList) {
            setProductList(JSON.parse(storedProductList));
        } else {
            axios.get(API_PRODUCT_ENDPOINT)
            .then(response => {
                setProductList(response.data);
                console.log(response.data)
                localStorage.setItem('productList', JSON.stringify(response.data));
            });
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