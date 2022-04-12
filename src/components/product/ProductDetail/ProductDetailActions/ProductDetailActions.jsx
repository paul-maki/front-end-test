import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'reactstrap';
import actionProductListType from '../../../../state/actions/actionProductListType';
import { ColorBox } from './ColorBox';
import { InternalMemoryBox } from './InternalMemoryBox';
import styles from './ProductDetailActions.module.scss';

export const ProductDetailActions = ({colors, internalMemory, resumeData}) => {
    const dispatch = useDispatch();
    const [infoSelected, setSelected] = useState(null);
    const handleSelectedColor = (selected) => {
        if (selected !== infoSelected.color) {
            setSelected({
                ...infoSelected,
                color: selected
            })
        }
    }

    const handleSelectedMemory = (selected) => {
        if (selected !== infoSelected.memory) {
            setSelected({
                ...infoSelected,
                memory: selected
            })
        }
    }

    const handleAddProduct = () => {
        dispatch({type: actionProductListType.ADD_PRODUCT, payload: {...resumeData, ...infoSelected}})

    }

    useEffect(() => {
        setSelected({ 
                        memory: internalMemory.length === 1 ? internalMemory[0] : null,
                        color: colors.length === 1 ? colors[0] : null
                    })
    }, [internalMemory, colors])

    return(
        <div className={styles.productDetailActions}>
            <div className={styles.productDetailsMemories}>
                {internalMemory.map(memory => {
                    return(
                        <InternalMemoryBox active={infoSelected?.memory === memory} key={memory} internalMemory={memory} handleSelectedMemory={handleSelectedMemory} />
                    )
                })}
            </div>
            <div className={styles.productDetailColors}>
                {colors.map(color => {
                    return(
                        <ColorBox active={infoSelected?.color === color} key={color} className="text-center" color={color} handleSelectedColor={handleSelectedColor}></ColorBox>
                    )
                })}
                
            </div>
            <Button onClick={handleAddProduct} disabled={!infoSelected?.color || !infoSelected?.memory} color='primary' className='text-center'>Add product</Button>
        </div>
    )
}