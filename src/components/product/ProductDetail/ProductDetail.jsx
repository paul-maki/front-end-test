import styles from './ProductDetail.module.scss'
import { ProductDetailActions } from './ProductDetailActions';
import { ProductDetailDescription } from "./ProductDetailDescription";

export const ProductDetail = (props) => {
    const {brand, model, price, cpu, ram, os, displayResolution, battery, primaryCamera, secondaryCmera, dimentions, weight, imgUrl, colors, internalMemory} = props;
    const showDetails = [brand, model, price, cpu, ram, os, displayResolution, battery, primaryCamera, secondaryCmera, dimentions, weight];
    return(
        <div className="d-flex flex-column">
            <div className={styles.productDetailContainer}>      
                <div className="d-flex justify-content-end">
                    <img alt={model} src={imgUrl}></img>
                </div>
                <div>
                    <ProductDetailDescription showDetails={showDetails} />
                    <ProductDetailActions colors={colors} internalMemory={internalMemory} />
                </div>
            </div> 
        </div>
    )
}