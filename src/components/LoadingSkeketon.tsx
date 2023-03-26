import { Skeleton } from '@chakra-ui/react';
import React from 'react';

const LoadingSkeketon = () => {
    return (
        <>
        {Array(5).fill(1).map((a,i)=>{
            return(<Skeleton key={i} w='full' h={['200px','150px']}p='20px' boxShadow={'base'} borderRadius={'10px'} m='10px'/>)
        })}
        </>
    );
};

export default LoadingSkeketon;