import { BreadcrumbItem } from "reactstrap"
import { Header } from "../../common/header/Header";
import { ProductList } from "./ProductList";

export const ProductListPage = () => {
    return (
        <div>
            <Header>
                <BreadcrumbItem active>Products list</BreadcrumbItem>
            </Header>
            <ProductList />
        </div>
    )
}