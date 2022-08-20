import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import * as React from "react";

export const loader: LoaderFunction = async ({ params }) => {
  let invoice;
  if (params.invoiceId === "1") {
    invoice = {
      description: "Invoice 1",
      status: "paid",
      date: "2020-01-01",
    };
  } else if (params.invoiceId === "2") {
    invoice = {
      description: "Invoice 2",
      status: "unpaid",
      date: "2020-02-01",
    };
  } else if (params.invoiceId === "3") {
    invoice = {
      description: "Invoice 3",
      status: "pastdue",
      date: "2020-03-01",
    };
  } else {
    throw new Error("Invalid invoiceId");
  }
  return json({ invoice });
};

export default function EditVehicleForm() {
  const { invoice } = useLoaderData();

  const [invoiceStatus, setInvoiceStatus] = React.useState(
    invoice?.status || "unpaid"
  );

  return (
    <Form method="post" style={{ padding: "2rem;" }}>
      <label>Description</label>
      <input type="text" value={invoice.description} />

      <br />
      <label
        htmlFor="status"
        className="block text-sm font-medium text-gray-700"
      >
        Status
      </label>
      <select
        id="status"
        name="status"
        className="mt-1 block w-full rounded-md border border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        defaultValue={invoiceStatus}
        onChange={(e) => setInvoiceStatus(e.target.value)}
      >
        <option value="paid">Paid</option>
        <option value="unpaid">Unpaid</option>
        <option value="pastdue">Past Due</option>
      </select>
    </Form>
  );
}
