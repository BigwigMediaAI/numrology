"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Button from "../../../../components/Button";
import { Eye, Trash2 } from "lucide-react";

interface Lead {
  _id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  marked: boolean;
  createdAt: string;
}

export default function LeadsPage() {
  const router = useRouter();

  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  // Filter by search term
  const filteredLeads = leads.filter((lead) =>
    lead.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredLeads.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const currentData = filteredLeads.slice(startIndex, startIndex + pageSize);

  const fetchLeads = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/leads`);
      const data = await res.json();
      setLeads(data.data || []);
    } catch (err) {
      console.error("Error fetching leads:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const deleteLead = async (id: string) => {
    if (!confirm("Delete this lead?")) return;

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/api/leads/${id}`,
        { method: "DELETE" }
      );
      const data = await res.json();
      alert(data.message);
      fetchLeads();
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  const toggleMarked = async (id: string, current: boolean) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/api/leads/mark/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ marked: !current }),
        }
      );

      const data = await res.json();
      if (data.success) {
        setLeads((prev) =>
          prev.map((l) => (l._id === id ? { ...l, marked: !current } : l))
        );
      }
    } catch (error) {
      console.error("Mark update error:", error);
    }
  };

  return (
    <div className="min-h-screen text-white p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Leads</h1>
        <p className="text-gray-400 mt-1 text-sm">Customer inquiries</p>
        <hr className="mt-4 border-gray-700" />
      </div>

      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/3 px-4 py-2 rounded-lg bg-[#111827] border border-gray-600 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

      {loading ? (
        <p className="text-gray-400">Loading leads...</p>
      ) : currentData.length === 0 ? (
        <p className="text-gray-400 text-center py-10">No leads found.</p>
      ) : (
        <div className="rounded-lg border border-[#1f2937] overflow-hidden">
          {/* Desktop table */}
          <table className="hidden md:table w-full text-sm text-left">
            <thead className="bg-[#1f2937] text-gray-300 uppercase text-xs">
              <tr>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Phone</th>
                <th className="px-4 py-3">Message</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Action</th>
              </tr>
            </thead>

            <tbody>
              {currentData.map((lead) => (
                <tr
                  key={lead._id}
                  className="border-b border-gray-700 hover:bg-[#111827]"
                >
                  <td className="px-4 py-3">{lead.name}</td>
                  <td className="px-4 py-3">{lead.email}</td>
                  <td className="px-4 py-3">{lead.phone}</td>
                  <td className="px-4 py-3">{lead.message}</td>
                  <td className="px-4 py-3">
                    {new Date(lead.createdAt).toLocaleString()}
                  </td>

                  <td className="px-4 py-3 flex items-center gap-3">
                    {/* <Button text="View" onClick={() => setSelectedLead(lead)} /> */}
                    {/* <button
                      onClick={() => setSelectedLead(lead)}
                      className="text-[var(--button-color)] px-3 py-2 rounded text-xs cursor-pointer"
                    >
                      <Eye />
                    </button> */}
                    <input
                      type="checkbox"
                      checked={lead.marked}
                      onChange={() => toggleMarked(lead._id, lead.marked)}
                      className="w-5 h-5 cursor-pointer accent-blue-600"
                    />

                    <button
                      onClick={() => deleteLead(lead._id)}
                      className="text-red-600 px-3 py-2 rounded text-xs cursor-pointer"
                    >
                      <Trash2 />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Mobile cards */}
          <div className="md:hidden space-y-4">
            {currentData.map((lead) => (
              <div
                key={lead._id}
                className="p-4 border border-gray-700 rounded-lg bg-[#111827]"
              >
                <p>
                  <b>Name:</b> {lead.name}
                </p>
                <p>
                  <b>Email:</b> {lead.email}
                </p>
                <p>
                  <b>Phone:</b> {lead.phone}
                </p>

                <div className="mt-4 flex gap-3">
                  <input
                    type="checkbox"
                    checked={lead.marked}
                    onChange={() => toggleMarked(lead._id, lead.marked)}
                    className="w-5 h-5 cursor-pointer accent-blue-600"
                  />

                  {/* <Button text="View" onClick={() => setSelectedLead(lead)} /> */}
                  <button
                    onClick={() => deleteLead(lead._id)}
                    className="text-red-600 rounded text-xs "
                  >
                    <Trash2 />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-6 flex justify-between items-center">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            className="px-3 py-1 rounded bg-gray-700 hover:bg-gray-600"
            disabled={currentPage === 1}
          >
            Prev
          </button>

          <p className="text-gray-400 text-sm">
            Page {currentPage} of {totalPages}
          </p>

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            className="px-3 py-1 rounded bg-gray-700 hover:bg-gray-600"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}

      {/* Lead Details Modal */}
      {/* {selectedLead && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-[#1f2937] p-6 w-11/12 md:w-1/2 rounded-lg relative">
            <button
              onClick={() => setSelectedLead(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              ✕
            </button>

            <h2 className="text-xl font-semibold mb-3">Lead Details</h2>

            <p>
              <b>Name:</b> {selectedLead.name}
            </p>
            <p>
              <b>Email:</b> {selectedLead.email}
            </p>
            <p>
              <b>Phone:</b> {selectedLead.phone}
            </p>
            <p>
              <b>Message:</b> {selectedLead.message}
            </p>
            <p className="mt-2 text-gray-400 text-sm">
              <b>Received:</b>{" "}
              {new Date(selectedLead.createdAt).toLocaleString()}
            </p>

            <div className="mt-6 text-right">
              <Button text="Close" onClick={() => setSelectedLead(null)} />
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
}
