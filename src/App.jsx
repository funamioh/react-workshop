// Backend API endpoint: https://matcha-and-keyboard-f549965e60e7.herokuapp.com/api/v1/cafes
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import CafeList from "./components/CafeList/CafeList";

export default function App() {
  const cafes = [
    {
      "picture": "https://laptopfriendly.co/images/places/tokyo/ddsk-saigon-kitchen/ddsk-saigon-kitchen--tokyo.jpg",
        "title": "DDSK SAIGON KITCHEN",
        "hours": {
            "Mon": [
                "11:00 \u2013 15:00",
                "17:00 \u2013 22:00"
            ],
            "Tue": [
                "11:00 \u2013 15:00",
                "17:00 \u2013 22:00"
            ],
            "Wed": [
                "11:00 \u2013 15:00",
                "17:00 \u2013 22:00"
            ],
            "Thu": [
                "11:00 \u2013 15:00",
                "17:00 \u2013 22:00"
            ],
            "Fri": [
                "11:00 \u2013 15:00",
                "17:00 \u2013 22:00"
            ],
            "Sat": [
                "11:00 \u2013 22:00",
                ""
            ],
            "Sun": [
                "11:00 \u2013 22:00",
                ""
            ]
        },
        "address": "ss, 135-0061, Tokyo",
        "criteria": []
    },
    {
        "picture": "https://laptopfriendly.co/images/places/tokyo/common/common--tokyo.jpg",
        "title": "COMMON",
        "hours": {
            "Mon": [
                "08:00 \u2013 23:00"
            ],
            "Tue": [
                "08:00 \u2013 23:00"
            ],
            "Wed": [
                "08:00 \u2013 23:00"
            ],
            "Thu": [
                "08:00 \u2013 23:00"
            ],
            "Fri": [
                "08:00 \u2013 23:00"
            ],
            "Sat": [
                "08:00 \u2013 23:00"
            ],
            "Sun": [
                "08:00 \u2013 23:00"
            ]
        },
        "address": "106-0032, Tokyo",
        "criteria": [
            "Stable Wi-Fi",
            "Power sockets",
            "Quiet",
            "Coffee",
            "Food"
        ]
    }
  ];
  return (
    <div className="app-frame">
<Navbar />
<div className="app-body">
  <Sidebar />
  <CafeList cafes={cafes} />
</div>
</div>
  );
}
