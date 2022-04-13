import styles from './product-detail.module.scss'
import { ProductDetailActions } from './ProductDetailActions/ProductDetailActions';
import { ProductDetailDescription } from "./ProductDetailDescription/ProductDetailDescription";

export const ProductDetail = (props) => {

    const {id, brand, model, price, cpu, ram, os, displayResolution, battery, primaryCamera, secondaryCmera, dimentions, weight, imgUrl, colors, internalMemory} = props;
    const resumeData = {id, brand, model, price, imgUrl}
    const showDetails = [
                            { property: 'Brand', info: brand },
                            { property: 'Model', info: model },
                            { property: 'Price', info: price },
                            { property: 'CPU', info: cpu },
                            { property: 'RAM', info: ram },
                            { property: 'OS', info: os },
                            { property: 'Display resolution', info: displayResolution },
                            { property: 'Battery', info: battery },
                            { property: 'Primary camera', info: primaryCamera },
                            { property: 'Secondary Camera', info: secondaryCmera },
                            { property: 'Dimentions', info: dimentions },
                            { property: 'Weight', info: weight },
                        ];
    return(
        <div className={styles.productDetail}>
            <div className={styles.productDetailContainer}>      
                <div className="d-flex justify-content-end">
                    <img alt={model} src={imgUrl}></img>
                </div>
                <div>
                    <ProductDetailDescription showDetails={showDetails} />
                    <ProductDetailActions colors={colors} internalMemory={internalMemory} resumeData={resumeData}/>
                </div>
            </div> 
        </div>
    )
}