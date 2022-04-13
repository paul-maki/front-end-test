import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Breadcrumb, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import styles from './header.module.scss';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from "react-redux";
import classNames from "classnames";
import { useState } from "react";


export const Header = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
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
            <Dropdown className={styles.dropdown} isOpen={isOpen && productList.length > 0} toggle={() => setIsOpen(!isOpen)}>
                <DropdownToggle>
                <div className={styles.cart}>
                    <FontAwesomeIcon  icon={faShoppingCart} size="xl"/>
                    <span className={classNames('bg-primary', styles.counter)}>{productCount}</span>
                </div>  
                </DropdownToggle>
                <DropdownMenu end>
                    {productList.map((product, index) => {
                        return(
                            <>
                                <DropdownItem>
                                    <ProductResume product={product.product} quantity={product.quantity} />
                                </DropdownItem>
                                {productList.length - 1 === index ? null : <DropdownItem divider/>}
                            </>
                        )
                    })}
                </DropdownMenu>
            </Dropdown>
            
        </header>
    )
}

const ProductResume = ({product, quantity}) => {
    return(
        <div className={styles['product-resume']}>
            <img alt={product.brand} height={25} width={25} src={product.imgUrl} />
            <div>
                <span className="d-block">{`${product.brand} ${product.model}`}</span>
                <span className="d-block">{`${product.price * quantity} €`}</span>
            </div>
            <div>
                <span>{`x ${quantity}`}</span>
            </div>
        </div>
    )
}

