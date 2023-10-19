import React, { useState } from "react";
import {
Card,
Typography,
List,
ListItem,
ListItemPrefix,
ListItemSuffix,
Chip,
Accordion,
AccordionHeader,
AccordionBody,
} from "@material-tailwind/react";
import {
PresentationChartBarIcon,
ShoppingBagIcon,
UserCircleIcon,
Cog6ToothIcon,
InboxIcon,
PowerIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from 'next/link';

interface MenuProps {}

export const Menu: React.FC<MenuProps> = () => {
const [open, setOpen] = useState<number>(0);

const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
};

return (
    <Card className="h-[calc(105vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 fixed flex flex-col">
    <div className="mb-2 flex items-center gap-4 p-4">
        <img
        src="https://cdn.icon-icons.com/icons2/2379/PNG/512/petri_dish_experimentation_biology_education_petri_dish_icon_143934.png"
        alt="brand"
        className="h-8 w-8"
        />
        <Typography variant="h5" color="blue-gray" className="font-normal text-xl">
        PetriLab
        </Typography>
    </div>
    <List className="overflow-y-auto">
        <ListItem>
        <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
        </ListItemPrefix>
        <Typography color="blue-gray" className="ml-[1em] mr-auto font-normal">
            Profile
        </Typography>
        </ListItem>
        <ListItem>
        <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
        </ListItemPrefix>
        <Typography color="blue-gray" className="ml-[1em] mr-auto font-normal">
            Inbox
        </Typography>
        <ListItemSuffix>
            <Chip value="69" size="sm" variant="ghost" color="blue-gray" className="ml-5 rounded-full" />
        </ListItemSuffix>
        </ListItem>

        <hr className="my-2 border-blue-gray-50" />

        <Accordion
        open={open === 1}
        icon={
            <ChevronDownIcon
            strokeWidth={2.5}
            className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
            />
        }
        >
        <ListItem className="p-0" selected={open === 1}>
            <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
            <ListItemPrefix>
                <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            <Typography color="blue-gray" className="ml-[1em] mr-auto font-normal text-base">
                Dashboard
            </Typography>
            </AccordionHeader>
        </ListItem>
        <AccordionBody className="py-1">
            <List className="p-0">
            <ListItem>
                <ListItemPrefix>
                <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Scan Image
            </ListItem>
            <ListItem>
                <ListItemPrefix>
                <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                My History
            </ListItem>
            <ListItem>
                <ListItemPrefix>
                <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Projects
            </ListItem>
            </List>
        </AccordionBody>
        </Accordion>
        <Accordion
        open={open === 2}
        icon={
            <ChevronDownIcon
            strokeWidth={2.5}
            className={`mx-auto h-5 w-5 transition-transform ${open === 2 ? "rotate-180" : ""}`}
            />
        }
        >
        <ListItem className="p-0" selected={open === 2}>
            <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
            <ListItemPrefix>
                <ShoppingBagIcon className="h-5 w-5" />
            </ListItemPrefix>
            <Typography color="blue-gray" className="ml-[1em] mr-auto font-normal text-base ">
                E-Cummers  
            </Typography>
            </AccordionHeader>
        </ListItem>
        <AccordionBody className="py-1">
            <List className="p-0">
            <ListItem>
                <ListItemPrefix>
                <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Orders
            </ListItem>
            <ListItem>
                <ListItemPrefix>
                <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Products
            </ListItem>
            </List>
        </AccordionBody>
        </Accordion>
        
    <hr className="my-2 border-blue-gray-50" />
    
    </List>
    <div className="mt-auto">
        
        <ListItem>
        <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
        </ListItemPrefix>
        <Typography color="blue-gray" className="ml-[1em] mr-auto font-normal">
            Settings
        </Typography>
        </ListItem>
        
        <Link href="/login"><ListItem>
        <ListItemPrefix>
        <PowerIcon className="h-5 w-5" /> 
        </ListItemPrefix>
        <Typography color="blue-gray" className="ml-[1em] mr-auto font-normal">
            Log Out
        </Typography>
        </ListItem>
        </Link>
    </div>
    </Card>
);
};

export default Menu;
