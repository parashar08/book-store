import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

function App() {
    return (
        <div className="mx-2 md:mx-16">
            <Navbar />
            <main className="min-h-screen px-4 py-6 mx-auto max-w-screen-2xl font-primary">
                <Outlet />
            </main>
            <footer>Footer</footer>
        </div>
    );
}

export default App;
