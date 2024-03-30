import React from 'react'

function MenuList({ tableHeading, tableSubheading, tableData }) {

    return (
        <div>
            <div data-aos="fade-up-right" className="headings">
                <h2 className="section-heading left">
                    {tableHeading}
                </h2>
                <h3 className="section-subheading">
                    {tableSubheading}
                </h3>
            </div>
            <div className="menu-table">
                {[...Array(Math.ceil(tableData.length / 2))].map((_, row) => (
                    <div className="menu-table-row" data-aos="fade-up" key={row}>
                        {tableData.slice(row * 2, row * 2 + 2).map((data, index) => (
                            <div className="menu-table-cell" key={index}>
                                <div className="menu-table-item">
                                    <div className="text-block">{data.name}</div>
                                    <div className="item-line"></div>
                                    <div className="text-block-2">{data.type}</div>
                                </div>
                                <div className="cell-info">{data.extras}</div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MenuList;
