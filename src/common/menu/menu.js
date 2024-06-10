import { APP_URL } from "../../config";
import {
  MdOutlineSpaceDashboard,
  MdSpaceDashboard,
  MdOutlineClass,
  MdClass,
  MdOutlineAccountCircle,
  MdAccountCircle,
} from "react-icons/md";
import {
  PiStudentDuotone,
  PiStudentFill,
  PiChalkboardTeacherDuotone,
  PiChalkboardTeacherFill,
} from "react-icons/pi";
import { IoPeopleOutline, IoPeopleSharp } from "react-icons/io5";
import { BsEnvelopePaper, BsEnvelopePaperFill } from "react-icons/bs";

export const ADMIN_MENU = [
  {
    name: "Dashboard",
    url: APP_URL.DASHBOARD,
    icon: MdOutlineSpaceDashboard,
    selectedIcon: MdSpaceDashboard,
  },
  {
    name: "Students",
    url: APP_URL.STUDENTS,
    icon: PiStudentDuotone,
    selectedIcon: PiStudentFill,
  },
  {
    name: "Teachers",
    url: APP_URL.TEACHERS,
    icon: PiChalkboardTeacherDuotone,
    selectedIcon: PiChalkboardTeacherFill,
  },
  {
    name: "Classes",
    url: APP_URL.CLASSES,
    icon: MdOutlineClass,
    selectedIcon: MdClass,
  },
  {
    name: "Attendance",
    url: APP_URL.ATTENDANCE,
    icon: IoPeopleOutline,
    selectedIcon: IoPeopleSharp,
  },
  {
    name: "Fees",
    url: APP_URL.FEES,
    icon: IoPeopleOutline,
    selectedIcon: IoPeopleSharp,
  },
  {
    name: "Notice",
    url: APP_URL.NOTICE,
    icon: BsEnvelopePaper,
    selectedIcon: BsEnvelopePaperFill,
  },
  {
    name: "Account",
    url: APP_URL.ACCOUNT,
    icon: MdOutlineAccountCircle,
    selectedIcon: MdAccountCircle,
  },
  {
    name: "Fees",
    url: APP_URL.FEES,
    icon: IoPeopleOutline,
    selectedIcon: IoPeopleSharp,
  },
  {
    name: "Notice",
    url: APP_URL.NOTICE,
    icon: BsEnvelopePaper,
    selectedIcon: BsEnvelopePaperFill,
  },
  {
    name: "Account",
    url: APP_URL.ACCOUNT,
    icon: MdOutlineAccountCircle,
    selectedIcon: MdAccountCircle,
  },
];
