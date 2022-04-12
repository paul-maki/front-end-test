import { ColorBox } from './ColorBox';
import { InternalMemoryBox } from './InternalMemoryBox';
import styles from './ProductDetailActions.module.scss';

export const ProductDetailActions = ({colors, internalMemory}) => {
    return(
        <div className={styles.productDetailActions}>
            <div className={styles.productDetailsMemories}>
                {internalMemory.map(memory => {
                    return(
                        <InternalMemoryBox active={internalMemory.length === 1} key={memory} internalMemory={memory} />
                    )
                })}
            </div>
            <div className={styles.productDetailColors}>
                {colors.map(color => {
                    return(
                        <ColorBox active={colors.length === 1} key={color} className="text-center" color={color}></ColorBox>
                    )
                })}
                
            </div>
            <div className='text-center'>Añadir</div>
        </div>
    )
}