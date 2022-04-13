import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'reactstrap';
import { addProduct } from '../../../../state/actions/actionProductList';
import { ColorBox } from './ColorBox';
import { InternalMemoryBox } from './InternalMemoryBox';
import styles from './product-detail-actions.module.scss';

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
        //Axios post is always returning 1, we will use redux instead to exemplify
        dispatch(addProduct({...resumeData, ...infoSelected}))        
        // axios.post(
        //     API_ADD_PRODUCT_ENDPOINT, {
        //         id: resumeData.id,
        //         colorCode: infoSelected.color,
        //         storageCode: infoSelected.memory
        //    })
        //     .then(response => {
        //         console.log(response)
        //     })
    }

    useEffect(() => {
        setSelected({ 
                        memory: internalMemory.length === 1 ? internalMemory[0] : null,
                        color: colors.length === 1 ? colors[0] : null
                    })
    }, [internalMemory, colors])

    return(
        <div className={styles.productDetailActions}>
            <div>
                <p className='text-center'>Internal memory:</p>
                <div className={styles.productDetailsMemories}>
                    {internalMemory.map(memory => {
                        return(
                            <InternalMemoryBox active={infoSelected?.memory === memory} key={memory} internalMemory={memory} handleSelectedMemory={handleSelectedMemory} />
                        )
                    })}
                </div>
            </div>
            <div>
                <p className='text-center'>Color:</p>
                <div className={styles.productDetailColors}>
                    {colors.map(color => {
                        return(
                            <ColorBox active={infoSelected?.color === color} key={color} className="text-center" color={color} handleSelectedColor={handleSelectedColor}></ColorBox>
                        )
                    })}
                    
                </div>
            </div>
            <Button onClick={handleAddProduct} disabled={!infoSelected?.color || !infoSelected?.memory} color='primary' className='text-center'>Add product</Button>
        </div>
    )
}