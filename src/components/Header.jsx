import { NavLink } from 'react-router-dom';
export default function Header() {
  return (
    <div>
      <div className="header text-center">
        <h1 className="text-4xl">
          <NavLink to="/">IncoEx Tracker</NavLink>
        </h1>
        <small>An app for Tracking Income & Expense</small>
      </div>
      <div>
        <ul className="flex justify-around bg-red-500 text-2xl p-2 rounded-md text-teal-200">
          <li className="pages">
            <NavLink
              to="/income"
              className={(navInfo) =>
                navInfo.isActive ? 'text-white underline' : ''
              }
            >
              Income
            </NavLink>
          </li>
          <li className="pages">
            <NavLink
              to="/expense"
              className={(navInfo) =>
                navInfo.isActive ? 'text-white underline' : ''
              }
            >
              Expense
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
