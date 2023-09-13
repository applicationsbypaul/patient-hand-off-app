import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-neutral text-neutral-content">
      <div className="flex-1">
        <Link href="/" className="btn btn-primary normal-case text-xl">
          HandOffApp
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/about">Handoffs</Link>
          </li>
          <li>
            <details>
              <summary>Admin</summary>
              <ul className="p-2 bg-base-100">
                <li>
                  <Link href="/manageEmployees">Employees</Link>
                </li>
                <li>
                  <a>Patients</a>
                </li>
                <li>
                  <Link href="/">HOME</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
