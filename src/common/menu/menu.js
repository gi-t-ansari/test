import { MdInbox, MdOutlineInbox } from "react-icons/md";
import { TiStarFullOutline, TiStarOutline } from "react-icons/ti";
import {
  IoSend,
  IoSendOutline,
  IoDocumentOutline,
  IoDocumentSharp,
} from "react-icons/io5";
import {
  RiDeleteBin6Line,
  RiDeleteBin6Fill,
  RiSpam2Line,
  RiSpam2Fill,
} from "react-icons/ri";
import { APP_URL } from "../../config";

export const MAIN_MENU = [
  {
    name: "Inbox",
    url: APP_URL.INBOX,
    icon: MdOutlineInbox,
    selectedIcon: MdInbox,
  },
  {
    name: "Starred",
    url: APP_URL.STARRED,
    icon: TiStarOutline,
    selectedIcon: TiStarFullOutline,
  },
  {
    name: "Sent",
    url: APP_URL.SENT,
    icon: IoSendOutline,
    selectedIcon: IoSend,
  },
  {
    name: "Drafts",
    url: APP_URL.DRAFTS,
    icon: IoDocumentOutline,
    selectedIcon: IoDocumentSharp,
  },
  {
    name: "Trash",
    url: APP_URL.TRASH,
    icon: RiDeleteBin6Line,
    selectedIcon: RiDeleteBin6Fill,
  },
  {
    name: "Spam",
    url: APP_URL.SPAM,
    icon: RiSpam2Line,
    selectedIcon: RiSpam2Fill,
  },
];
