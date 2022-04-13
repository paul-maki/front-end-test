import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { BreadcrumbItem } from "reactstrap";
import { API_PRODUCT_ENDPOINT } from "../../../api/endPoints/product/productEndpoints";
import localGetItem from "../../../tools/localGetItem";
import setItemExpiration from "../../../tools/setTimeExpiration";
import { Header } from "../../common/header/Header";
import { ProductDetail } from "./ProductDetail";
import styles from './product-detail.module.scss';

export const ProductDetailPage = () => {
    const [productDetail, setProductDetail] = useState()
    const { id } = useParams();

    useEffect(() => {
        const localProduct = localGetItem(id);
        const now = new Date().getTime();
        if (!localProduct || (now > localProduct.expiry)){
            axios.get(`${API_PRODUCT_ENDPOINT}/${id}`)
            .then(response => {
                setProductDetail(response.data);
                setItemExpiration(response.data.id, response.data, 60);
            });
        } else {
            setProductDetail(localProduct.data);
        }        
    }, [id])

    if (!productDetail) {
        return null;
    }

    return(
        <div className="d-flex flex-column min-vh-100">
            <Header>
                <BreadcrumbItem>
                    <Link to='/'>Home</Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    {productDetail.model}
                </BreadcrumbItem>
            </Header>
            <div className={styles.productDetailWrapper}>
                <ProductDetail {...productDetail} />
            </div>
        </div>
    )
}