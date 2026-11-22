import { NavLink } from "react-router-dom";
import letterF from "../assets/letter-f.png";

function Navigation() {
    return (
        <nav className="bg-slate-800 rounded-4xl shadow-md mx-auto">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <NavLink to="/" className="flex items-center gap-2">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white">
                        <img src={letterF} alt="FootwearAdmin icon" className="h-7 w-7 object-contain" />
                    </span>
                    <span className="text-white text-lg font-semibold">FootwearAdmin</span>
                </NavLink>
                <div className="space-x-4">
                 
                    <NavLink
                        to="/products"
                        className={({ isActive }) =>
                            isActive ? "text-white font-semibold" : "text-gray-300 hover:text-white"
                        }
                    >
                        Products
                    </NavLink>
                    <NavLink
                        to="/add-product"
                        className={({ isActive }) =>
                            isActive ? "text-white font-semibold" : "text-gray-300 hover:text-white"
                        }
                    >
                        Add Product
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
