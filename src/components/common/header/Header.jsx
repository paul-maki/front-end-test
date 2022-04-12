import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Breadcrumb } from "reactstrap";
import styles from './header.module.scss';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from "react-redux";
import classNames from "classnames";


export const Header = ({children}) => {
    const { productList } = useSelector(state => state);
    let productCount = 0;

    productList.forEach((product) => {
        productCount += product.quantity;
    })

    return(
        <header className={styles.header}>
            <Breadcrumb className={styles.breadcrumb}>
                {children}
            </Breadcrumb>
            <div className={styles.cart}>
                <FontAwesomeIcon  icon={faShoppingCart} size="xl"/>
                <span className={classNames('bg-primary', styles.counter)}>{productCount}</span>
            </div>  
        </header>
    )
}

