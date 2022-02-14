import "./sidebar.css"
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonIcon from '@mui/icons-material/Person';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AssessmentIcon from '@mui/icons-material/Assessment';
import EmailIcon from '@mui/icons-material/Email';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ReportIcon from '@mui/icons-material/Report';
export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">DashBoard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                    <LineStyleIcon className="sidebarIcon"/>
                    Home
                    </li>
                    <li className="sidebarListItem">
                    <TimelineIcon className="sidebarIcon"/>
                    Analytics
                    </li>
                    <li className="sidebarListItem">
                    <TrendingUpIcon className="sidebarIcon"/>
                    Sales
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                    <PersonIcon className="sidebarIcon"/>
                    Users
                    </li>
                    <li className="sidebarListItem">
                    <StorefrontIcon className="sidebarIcon"/>
                    Products
                    </li>
                    <li className="sidebarListItem">
                    <AttachMoneyIcon className="sidebarIcon"/>
                    Transactions
                    </li>
                    <li className="sidebarListItem">
                    <AssessmentIcon className="sidebarIcon"/>
                    Report
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notifications</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                    <EmailIcon className="sidebarIcon"/>
                    Mail
                    </li>
                    <li className="sidebarListItem">
                    <DynamicFeedIcon className="sidebarIcon"/>
                    Feedback
                    </li>
                    <li className="sidebarListItem">
                    <ChatBubbleOutlineIcon className="sidebarIcon"/>
                    Messages
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Staff</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                    <ManageAccountsIcon className="sidebarIcon"/>
                    Manage
                    </li>
                    <li className="sidebarListItem">
                    <TimelineIcon className="sidebarIcon"/>
                    Analitics
                    </li>
                    <li className="sidebarListItem">
                    <ReportIcon className="sidebarIcon"/>
                    Report
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
