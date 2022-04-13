import axios from "axios";
import { useEffect, useState } from "react";
import { BreadcrumbItem } from "reactstrap"
import { API_PRODUCT_ENDPOINT } from "../../../api/endPoints/product/productEndpoints";
import localGetItem from "../../../tools/localGetItem";
import setItemExpiration from "../../../tools/setTimeExpiration";
import { Header } from "../../common/header/Header";
import { ProductList } from "./ProductList";

export const ProductListPage = () => {
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

    return (
        <div>
            <Header>
                <BreadcrumbItem active>Products list</BreadcrumbItem>
            </Header>
            <ProductList handleOnChange={handleOnChange} productList={filteredProductList}/>
        </div>
    )
}