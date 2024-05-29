import Link from "next/link";
import React from "react";
import styles from "./sideBar.module.scss"; // Import CSS file for styling
import { sidebarItems } from "./constant";

const Sidebar = () => {
  return (
    <div className={styles.sideBarWrapper}>
      <ul className={styles.listWrapper}>
        {sidebarItems.map((item) => (
          <li key={item.id} className={styles.list}>
            <Link href={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
