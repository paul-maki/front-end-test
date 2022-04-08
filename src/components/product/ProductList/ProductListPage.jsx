import { BreadcrumbItem } from "reactstrap"
import { Breadcrumb } from "../../common/Breadcrumb";
import { ProductList } from "./ProductList"
import styles from './ProductListPage.module.scss';

export const ProductListPage = () => {
    return (
        <div>
            <Breadcrumb>
                <BreadcrumbItem active>Products list</BreadcrumbItem>
            </Breadcrumb>
            <ProductList />
        </div>
    )
}