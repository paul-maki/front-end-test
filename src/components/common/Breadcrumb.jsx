import { Breadcrumb as RSBreadcrumb } from "reactstrap";

export const Breadcrumb = ({children, props}) => {
    return <RSBreadcrumb {...props}>{children}</RSBreadcrumb> 
}