import React, { useEffect } from 'react';
import { getAllFabricksList } from '../../actions/actions';
import { useDispatch } from 'react-redux';

const apiAllFabricks = ({ dress, filterColors, filterBrands, filterOccasions, filterBetweenPrice, sortPrice }) => {
    const dispatch = useDispatch();

        dispatch(getAllFabricksList({ dress: dress, filterColors: filterColors, filterBrands: filterBrands, filterOccasions: filterOccasions, filterBetweenPrice: filterBetweenPrice, sortPrice: sortPrice }));
  
}
export default apiAllFabricks;