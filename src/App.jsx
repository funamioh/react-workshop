// Backend API endpoint: https://matcha-and-keyboard-f549965e60e7.herokuapp.com/api/v1/cafes
import Navbar from "./components/Navbar"

export default function App() {
  return (
    <div className="app-frame">
<Navbar />
<div className="app-body">
  <Sidebar />
  <CafeList />
</div>
</div>
  );
}
