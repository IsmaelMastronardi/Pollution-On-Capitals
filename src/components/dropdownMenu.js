/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { choseFilter } from '../redux/cities/citiesSlice';

const DropdownMenu = () => {
  const dispatch = useDispatch();

  return (
    <select
      defaultValue="all"
      onChange={(e) => dispatch(choseFilter(e.target.options[e.target.selectedIndex].value))}
    >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="all">all</option>
    </select>
  );
};

export default DropdownMenu;
