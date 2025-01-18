import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Login from '../login/Login';
import AuranavBar from '../navBar/AuranavBar';
import AuraDashboard from '../dashboard/AuraDashboard';
import LoginCategory from '../login/LoginCategory';
import { useTheme } from '../theme/ThemeContext';
import ItemCategoryList from '../masters/itemCategory/ItemCategoryList';
import ItemList from '../masters/itemRegistration/ItemList';
import ItemTypeList from '../masters/itemType/ItemTypeList';
import EmployeeMasterList from '../masters/employeeRegistration/EmployeeMasterList';
import EmployeeTypeList from '../masters/employeeType/EmployeeTypeList';
import TableList from '../masters/seattingArangement/tables/TableList';
import SatingTypeList from '../masters/seattingArangement/seatingType/SatingTypeList';
import Order from '../order/Order';

export default function AuraRoutes() {
  const { isDarkMode } = useTheme();

  return (
    <>
      <Routes>
        {/* Login Page Route */}
        <Route path="/" element={<Login />} />

        {/* Category Login */}
        {/* <Route path="/category" element={<LoginCategory />} /> */}

        {/* Protected Routes (Requires AuranavBar Layout) */}
        <Route element={<AuranavBar isDarkMode={isDarkMode} />}>
          <Route path="/dashboard" element={<AuraDashboard />} />
          <Route path="/item-category" element={<ItemCategoryList />} />
          <Route path="/items" element={<ItemList />} />
          <Route path="/item-type" element={<ItemTypeList />} />
          <Route path="/employee" element={<EmployeeMasterList />} />
          <Route path="/employee-type" element={<EmployeeTypeList />} /> 
          <Route path="/seating-type" element={<SatingTypeList />} /> 
          <Route path="/table" element={<TableList />} />
          <Route path="/order" element={<Order />} />
        </Route>
      </Routes>
    </>
  );
}
