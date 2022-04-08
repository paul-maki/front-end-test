import { Breadcrumb as RSBreadcrumb } from "reactstrap";
import styles from './Breadcrumb.module.scss';

export const Breadcrumb = ({children, props}) => {
    return <RSBreadcrumb {...props} className={styles.breadcrumb}>{children}</RSBreadcrumb> 
}