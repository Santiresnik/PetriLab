import React from "react";
import Link from 'next/link';
import {
ChevronDownIcon,
ChevronRightIcon,
UserCircleIcon,
InboxIcon,
PresentationChartBarIcon,
ShoppingBagIcon,
Cog6ToothIcon,
PowerIcon,
} from "@heroicons/react/24/solid";
import { Chip } from "@material-tailwind/react";

interface MenuProps {}

class Menu extends React.Component<MenuProps, { open: number }> {
constructor(props: MenuProps) {
    super(props);
    this.state = {
    open: 0,
    };
}

handleOpen = (value: number) => {
    this.setState((prevState) => ({
    open: prevState.open === value ? 0 : value,
    }));
};

render() {
    const { open } = this.state;

    return (
    <div className="h-[calc(105vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 fixed flex flex-col mt-4">
        <div className="mb-2 flex items-center gap-4 p-4">
        <img
            src="https://cdn.icon-icons.com/icons2/2379/PNG/512/petri_dish_experimentation_biology_education_petri_dish_icon_143934.png"
            alt="brand"
            className="h-8 w-8"
        />
        <div className="text-blue-gray font-normal text-xl">
            PetriLab
        </div>
        </div>
        <div className="overflow-y-auto">
        <div className="flex items-center mb-3">
            <div className="h-5 w-5">
            <UserCircleIcon />
            </div>
            <div className="text-blue-gray ml-[1em] mr-auto font-normal">
            Profile
            </div>
        </div>
        <div className="flex items-center mb-3">
            <div className="h-5 w-5">
            <InboxIcon />
            </div>
            <div className="text-blue-gray ml-[1em] mr-auto font-normal">
            Inbox
            </div>
            <div className="ml-5 rounded-full">
            <Chip value="69" size="sm" variant="ghost" color="blue-gray" />
            </div>
        </div>

        <hr className="my-2 border-blue-gray-50 mb-3"/>

        <div className="mb-3 flex items-center justify-between" onClick={() => this.handleOpen(1)}>
            <div className="flex items-center">
            <div className="h-5 w-5">
                <PresentationChartBarIcon />
            </div>
            <div className="text-blue-gray ml-[1em] font-normal text-base">
                Dashboard
            </div>
            </div>
            <div className={`h-4 w-4 ml-auto transform transition-transform ${open === 1 ? "rotate-180" : ""}`}>
            <ChevronDownIcon strokeWidth={2.5} />
            </div>
        </div>
        {open === 1 && (
            <div className="pl-5 py-1">
            <div className="flex items-center">
                <div className="h-3 w-5 mb-2">
                <ChevronRightIcon strokeWidth={3} />
                </div>
                Scan Image
            </div>
            <div className="flex items-center">
                <div className="h-3 w-5 mb-2">
                <ChevronRightIcon strokeWidth={3} />
                </div>
                My History
            </div>
            <div className="flex items-center">
                <div className="h-3 w-5 mb-2">
                <ChevronRightIcon strokeWidth={3} />
                </div>
                Projects
            </div>
            </div>
        )}

        <div className="mb-3 flex items-center justify-between" onClick={() => this.handleOpen(2)}>
            <div className="flex items-center">
            <div className="h-5 w-5">
                <ShoppingBagIcon />
            </div>
            <div className="text-blue-gray ml-[1em] font-normal text-base">
                E-Cummers  
            </div>
            </div>
            <div className={`h-4 w-4 ml-auto transform transition-transform ${open === 2 ? "rotate-180" : ""}`}>
            <ChevronDownIcon strokeWidth={2.5} />
            </div>
        </div>
        {open === 2 && (
            <div className="pl-5 py-1 mb-2">
            <div className="flex items-center mb-2">
                <div className="h-3 w-5">
                <ChevronRightIcon strokeWidth={3} />
                </div>
                Orders
            </div>
            <div className="flex items-center mb-2">
                <div className="h-3 w-5">
                <ChevronRightIcon strokeWidth={3} />
                </div>
                Products
            </div>
            </div>
        )}

        <hr className="my-2 border-blue-gray-50" />

        </div>
        <div className="mt-auto mb-3">
        <div className="flex items-center mb-3">
            <div className="h-5 w-5">
            <Cog6ToothIcon />
            </div>
            <div className="text-blue-gray ml-[1em] mr-auto font-normal">
            Settings
            </div>
        </div>
        <Link href="/login">
            <div className="flex items-center">
            <div className="h-5 w-5">
                <PowerIcon /> 
            </div>
            <div className="text-blue-gray ml-[1em] mr-auto font-normal">
                Log Out
            </div>
            </div>
        </Link>
        </div>
    </div>
    );
}
}

export default Menu;

