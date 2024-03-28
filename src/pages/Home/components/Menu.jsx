import React from 'react'
import MenuList from "@/components/core/MenuList";
import DishImageWrapper from "@/components/core/DishImageWrapper";

const firstMenu = [
    {
        name: 'Pumpkin soup',
        type: 'Included',
        extras: 'Sage butter, pumpkin seeds'
    },
    {
        name: 'Graf salmon',
        type: 'Included',
        extras: 'Fresh pasta, langoustine, nduja'
    },
    {
        name: 'Homemade macaroni',
        type: 'Included',
        extras: 'Pasta, langoustine'
    },
    {
        name: 'Biryani',
        type: 'Included',
        extras: 'Chicken, Aloo, Payaz'
    },
    {
        name: 'Qorma',
        type: 'Included',
        extras: 'Chicken, Aloo, Payaz'
    },
    {
        name: 'Peanut Butter',
        type: 'Included',
        extras: 'Macroni'
    }
]

function Menu() {
    return (
        <div className="menu">
            <div className="menu-content">

                <MenuList
                    tableHeading="seven correct CHRISTMAS COLLECTION"
                    tableSubheading="13990 ISK"
                    tableData={firstMenu}
                />

                <DishImageWrapper
                    source="/images/dished-03.webp"
                />

                <MenuList
                    tableHeading="five correct CHRISTMAS COLLECTION"
                    tableSubheading="9990 ISK"
                    tableData={firstMenu}
                />

            </div>
        </div>
    )
}

export default Menu;
