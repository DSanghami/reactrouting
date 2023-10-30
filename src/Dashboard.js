import { Link } from 'react-router-dom';
import './src/Dashboard.css';

function Dashboard(){
    return (
    <div>
        <b>ReactJS</b>
        <nav>
            <ul>
                <li><Link to = "/">Dashboard</Link></li>
                <li><Link to = "/Home">Home</Link></li>
                <li><Link to = "/AboutUs">About Us</Link></li>
                <li><Link to = "/Contact">Contact</Link></li>
                <li><Link to = "/Registration">Registration</Link></li>
            </ul>
        </nav>
    </div>)
}

export default Dashboard;