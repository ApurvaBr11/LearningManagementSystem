"use client";

import { Layout , Compass, List, BarChart, SquareDashedBottom, Home} from "lucide-react";
import SidebarItem from "./SidebarItem";
import { usePathname } from "next/navigation";

const guestRoutes = [
    {
        icon : Home,
        label : "Home",
        href : "/"
    },
    {
        icon : SquareDashedBottom,
        label : "Dashboard",
        href : "/indidash"
    },
    {
        icon : Compass,
        label : "Browse",
        href : "/search"
    }
]

const teacherRoutes = [
    {
        icon : List,
        label : "Courses",
        href : "/teacher/courses"
    },
    {
        icon : BarChart,
        label : "Analytics",
        href : "/teacher/analytics"
    }
]


const SidebarRoutes = () => {
    const pathname = usePathname()

    const isTeacherPage = pathname?.includes("/teacher");

    const Routes = isTeacherPage ? teacherRoutes : guestRoutes

  return (
    <div className="flex flex-col w-full">
        {
            Routes.map((route)=>(
                <SidebarItem
                    key={route.href}
                    icon = {route.icon}
                    label = {route.label}
                    href={route.href}             
                />
            ))
        }
    </div>
  )
}

export default SidebarRoutes