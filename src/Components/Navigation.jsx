import letterF from "../assets/letter-f.png";

function Navigation() {
  return (
    <nav className="bg-slate-800 rounded-4xl shadow-md mx-auto">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white">
                    <img src={letterF} alt="FootwearAdmin icon" className="h-7 w-7 object-contain" />
                </span>
                <span className="text-white text-lg font-semibold">FootwearAdmin</span>
            </div>
            <div className="space-x-4">
                <a href="#" className="text-gray-300 hover:text-white">Home</a>
                <a href="#" className="text-gray-300 hover:text-white">Products</a>
            </div>
        </div>
    </nav>
  );
}

export default Navigation;