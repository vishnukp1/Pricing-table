import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import "./Sidebars.css"
import yourImg from "../../assets/pexels-simon-robben-614810.jpg"

const Sidebar = () => {
  return (
    <div className='d-flexx' style={{ display: 'flex', height: '55rem', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#FFFFFF">
      
        <CDBSidebarHeader  style={{ color: 'black' }} prefix={<i className="fa fa-bars fa-large"></i>}>

        <div className='d-flex flex-column justify-content-center align-content-center sidebar-head'>
        <img 
      src={yourImg}  
      alt="Your Image" 
      style={{ width: "45%",marginLeft:"4rem", height: "45%", borderRadius: 400 / 2 }}
    />
        <a href="/" className="text-decoration-none" style={{ color: 'black' }}>
          Ram Mohan
          </a>
          <NavLink exact to="/" style={{ color: 'black' }} activeClassName="activeClicked">
           RamMohan2@gmail.com
            </NavLink>
          </div>
         
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu >
          <div className='new-one'>
            <NavLink exact to="/" style={{ color: 'black' }} activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            </div>
            <div className='new-one'>
            <NavLink exact to="/tables"  style={{ color: 'black' }}  activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Perks</CDBSidebarMenuItem>
            </NavLink>
            </div>
            <div className='new-one'>
            <NavLink exact to="/profile"  style={{ color: 'black' }}  activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Addons</CDBSidebarMenuItem>
            </NavLink>
            </div>
            <div className='new-one'>
            <NavLink exact to="/analytics"  style={{ color: 'black' }}  activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">FOQ</CDBSidebarMenuItem>
            </NavLink>
            </div>
<div className='new-one'>
<NavLink exact to="/hero404"  style={{ color: 'black'}}  target="_blank" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="exclamation-circle">Supports</CDBSidebarMenuItem>
            </NavLink>
</div>
           
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          
          <div 
            style={{
              padding: '20px 5px',
              color:"#1F7BC5",
              fontWeight:"bold"
           
            }}
          >
          Log Out
          </div>
          
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;