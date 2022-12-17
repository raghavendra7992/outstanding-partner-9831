import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sideBar.css";
// import grid from "../icons/grid.svg"


const SideBar = () => {
	const [isExpanded, setExpendState] = useState(true);
	const menuItems = [
		{
			id:1,
			text: "Dashboard",
			to:"/",
			icon:"https://cdn-icons-png.flaticon.com/512/9147/9147067.png",
			
		},
		{	
			id:2,
			text: "Users",
			to:"/users",
			
		},
		{
			id:3,
			text: "Add Products",
			to:"/addProduct",
		
		},
		{	
			id:4,
			text: "Messages",
			to:"/messages",
			
		},
		{	
			id:5,
			text: "Analytics",
			to:"/analytics",
		
		},
		{	
			id:6,
			text: "File Manager",
			to:"/fileManager",
			
		},
		
		{	
			id:8,
			text: "Saved Items",
			to:"/savedItems",
			
		},
		{
			id:9,
			text: "Settings",
			to:"/settings",
			icon: "icons/settings.svg",
		},
	];
	return (
		<div
			className={
				isExpanded
					? "side-nav-container"
					: "side-nav-container side-nav-container-NX"
			}
		>
			<div className="nav-upper">
				<div className="nav-heading">
					{isExpanded && (
						<div className="nav-brand">
							<img src="https://avatars.githubusercontent.com/u/104028016?v=4" alt="" srcset=""  />
							<h2>Digital Shop</h2>
						</div>
					)}
					<button
						className={
							isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
						}
						onClick={() => setExpendState(!isExpanded)}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
				<div className="nav-menu">
					{menuItems.map((e) => (
						<Link key={e.id}
							className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
							to={e.to}
						>
							<img className="menu-item-icon" src={e.icon}  alt="" srcset="" />
							{isExpanded && <p>{e.text}</p>}
						</Link>
					))}
				</div>
			</div>
			
		</div>
	);
};

export default SideBar;












	
	/* <div className="nav-footer">
				{isExpanded && (
					<div className="nav-details">
						<img
							className="nav-footer-avatar"
							src="icons/admin-avatar.svg"
							alt=""
							srcset=""
						/>
						<div className="nav-footer-info">
							<p className="nav-footer-user-name">M Showkat</p>
							<p className="nav-footer-user-position">store admin</p>
						</div>
					</div>
				)}
				<img className="logout-icon" src="icons/logout.svg" alt="" srcset="" />
			</div> */