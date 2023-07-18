import FingerprintIcon from "@mui/icons-material/Fingerprint";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import BadgeIcon from '@mui/icons-material/Badge';
import AddchartIcon from '@mui/icons-material/Addchart';

const adminRouteList = [
  {
    Title: "Add Employee",
    Route: "addEmployee",
    icon: <PersonAddIcon fontSize="large" className="m-admn-optn-n-i" />,
  },
  {
    Title: "Attendance",
    Route: "attendance",
    icon: <FingerprintIcon fontSize="large" className="m-admn-optn-n-i" />,
  },
  {
    Title: "Salary of Employee",
    Route: "salaryOfEmployee",
    icon: <CurrencyRupeeIcon fontSize="large" className="m-admn-optn-n-i" />,
  },
  {
    Title: "Salary Increment",
    Route: "salaryIncrement",
    icon: <AddchartIcon fontSize="large" className="m-admn-optn-n-i" />,
  },
  {
    Title: "Leave From",
    Route: "leaveFrom",
    icon: <InsertDriveFileIcon fontSize="large" className="m-admn-optn-n-i" />,
  },
  {
    Title: "Report",
    Route: "report",
    icon: <BadgeIcon fontSize="large" className="m-admn-optn-n-i" />,
  },
];

export default adminRouteList;
