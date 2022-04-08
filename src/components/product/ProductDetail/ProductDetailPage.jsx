import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { BreadcrumbItem } from "reactstrap";
import { API_PRODUCT_ENDPOINT } from "../../../api/endPoints/product/productEndpoints";
import { Breadcrumb } from "../../common/Breadcrumb";
import { ProductDetail } from "./ProductDetail";
import styles from './ProductDetail.module.scss';

export const ProductDetailPage = () => {
    const [productDetail, setProductDetail] = useState()
    const { id } = useParams();

    useEffect(() => {
        axios.get(`${API_PRODUCT_ENDPOINT}/${id}`)
        .then(response => setProductDetail(response.data));
    }, [id])

    if (!productDetail) {
        return null;
    }

    return(
        <div className="d-flex flex-column min-vh-100">
            <Breadcrumb>
                <BreadcrumbItem>
                    <Link to='/'>Home</Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    {productDetail.model}
                </BreadcrumbItem>
            </Breadcrumb>
            <div className={styles.productDetailWrapper}>
                <ProductDetail {...productDetail} />
            </div>
        </div>
    )
}