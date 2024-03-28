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

function SecondMenu() {
    return (
        <div className="menu">
            <div className="menu-content">
                <DishImageWrapper
                    source="/images/dished-02.webp"
                />

                <MenuList
                    tableHeading="let's start here"
                    tableSubheading=""
                    tableData={firstMenu}
                />

                <DishImageWrapper
                    source="/images/dishes-01.webp"
                    class="top-margin"
                />


                <MenuList
                    tableHeading="let's move on"
                    tableSubheading=""
                    tableData={firstMenu}
                />

                <MenuList
                    tableHeading="TOTALLY UNNECESSARY Ad DANGER"
                    tableSubheading=""
                    tableData={firstMenu}
                />
            </div>
        </div>
    )
}

export default SecondMenu;
