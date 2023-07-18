import FingerprintIcon from "@mui/icons-material/Fingerprint";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import ReduceCapacityIcon from "@mui/icons-material/ReduceCapacity";

const addEmployeeRouteList = [
  {
    Title: "New Joining",
    Route: "newJoining",
    icon: <NoteAddIcon fontSize="large" className="m-admn-optn-n-i" />,
  },
  {
    Title: "Resign",
    Route: "resign",
    icon: <PersonRemoveIcon fontSize="large" className="m-admn-optn-n-i" />,
  },
  {
    Title: "Re-joining",
    Route: "re-joining",
    icon: <ReduceCapacityIcon fontSize="large" className="m-admn-optn-n-i" />,
  },
  {
    Title: "Attendance",
    Route: "attendance",
    icon: <FingerprintIcon fontSize="large" className="m-admn-optn-n-i" />,
  },
];

export default addEmployeeRouteList;
