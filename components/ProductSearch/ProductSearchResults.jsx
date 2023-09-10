
import React, {useContext} from "react";
import {ReportTable} from "./ReportTable"
import {FilterSidebar, ResultsNav} from "./ReportControls"
import {ProductSearchContext} from "./ProductSearchProvider.jsx";
import styles from "./ProductSearch.module.css"
/**
 *
 *
 * @param {Object} props -
 */
export default function ProductSearchResults(props) {
    const { fetched } = useContext(ProductSearchContext);

    if (fetched?.length)
        return (
            <div className={styles.reportContainer}>
                <div className={`${styles.gridRow} text-center nav-container`}>
                    <div className={styles.gridCol3}>
                        {/**Put a search box here?**/}
                    </div>
                    <div className={styles.gridCol9}>
                        <ResultsNav />
                    </div>
                </div>
                <div className={`${styles.gridRow} text-left`}>
                    <div className={`${styles.gridCol3} filters-wrap`}>
                        <FilterSidebar />
                    </div>
                    <div className={styles.gridCol9}>
                        <ReportTable />
                    </div>
                </div>
            </div>
        );
        
    return (
    <div style={{textAlign:"center"}}>
        Loading data...
    </div>
    );
}