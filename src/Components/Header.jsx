function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <p className="text-sm font-medium text-indigo-600">Administration Portal</p>
        <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Product Dashboard
        </h1>
        <p className="mt-2 text-slate-600">
          Manage products, track inventory, and keep your catalog up to date.
        </p>
      </div>
    </header>
  );
}

export default Header;
