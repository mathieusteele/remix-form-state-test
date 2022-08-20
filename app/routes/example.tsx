import { Link, Outlet } from "@remix-run/react";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Invoices</h1>

      <div style={{ display: "flex" }}>
        <div style={{ width: "20rem;", backgroundColor: "#ccc" }}>
          <ul>
            <li>
              <Link to="1">Go to invoice 1</Link>
            </li>
            <li>
              <Link to="2">Go to invoice 2</Link>
            </li>
            <li>
              <Link to="3">Go to invoice 3</Link>
            </li>
          </ul>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
