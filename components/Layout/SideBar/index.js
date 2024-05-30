import Link from "next/link";
import React from "react";
import styles from "./sideBar.module.scss"; // Import CSS file for styling
import { sidebarItems } from "./constant";

const Sidebar = () => {
  return (
    <div className={styles.sideBarWrapper}>
      <ul className={styles.listWrapper}>

      <li key={sidebarItems[0].id} className={styles.list}>
            <Link href={sidebarItems[0].link}>{sidebarItems[0].title}</Link>
          </li>
          <li key={sidebarItems[1].id} className={styles.list}>
            <Link href={sidebarItems[1].link}>{sidebarItems[1].title}</Link>
          </li>
          <li key={sidebarItems[2].id} className={styles.list}>
            <Link href={sidebarItems[2].link}>{sidebarItems[2].title}</Link>
          </li>
          <li key={sidebarItems[3].id} className={styles.list}>
            <Link href={sidebarItems[3].link}>{sidebarItems[3].title}</Link>
          </li>

          <li key={sidebarItems[4].id} className={styles.list}>
            <Link href={sidebarItems[4].link}>{sidebarItems[4].title}</Link>
          </li> 
          <li key={sidebarItems[5].id} className={styles.list}>
            <Link href={sidebarItems[5].link}>{sidebarItems[5].title}</Link>
          </li>
          <li key={sidebarItems[6].id} className={styles.list}>
            <Link href={sidebarItems[6].link}>{sidebarItems[6].title}</Link>
          </li>
        {/* {sidebarItems.map((item) => (
          <li key={item.id} className={styles.list}>
            <Link href={item.link}>{item.title}</Link>
          </li>
        ))} */}
      </ul>
    </div>
  );
};

export default Sidebar;
