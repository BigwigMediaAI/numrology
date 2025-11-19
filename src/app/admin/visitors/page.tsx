"use client";

import { useEffect, useState } from "react";

interface Visitor {
  _id: string;
  ip: string;
  country: string;
  city: string;
  region: string;
  browser: string;
  device: string;
  page: string;
  createdAt: string;
}

export default function VisitorsPage() {
  const [visitors, setVisitors] = useState<Visitor[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const [selectedVisitor, setSelectedVisitor] = useState<Visitor | null>(null);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  // Filter Search (IP, City, Country)
  const filtered = visitors.filter((v) => {
    const text = `${v.ip} ${v.city} ${v.country} ${v.browser}`
      .toLowerCase()
      .trim();
    return text.includes(searchTerm.toLowerCase());
  });

  const totalPages = Math.ceil(filtered.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const currentData = filtered.slice(startIndex, startIndex + pageSize);

  const fetchVisitors = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/api/visitors`
      );
      const data = await res.json();
      setVisitors(data.data || []);
    } catch (err) {
      console.error("Error fetching visitors:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVisitors();
  }, []);

  return (
    <div className="min-h-screen text-white p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Visitors</h1>
        <p className="text-gray-400 mt-1 text-sm">Website traffic logs</p>
        <hr className="mt-4 border-gray-700" />
      </div>

      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by IP, City, Country..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/3 px-4 py-2 rounded-lg bg-[#111827] border border-gray-600 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

      {loading ? (
        <p className="text-gray-400">Loading visitors...</p>
      ) : currentData.length === 0 ? (
        <p className="text-gray-400 text-center py-10">No visitors found.</p>
      ) : (
        <div className="rounded-lg border border-[#1f2937] overflow-hidden">
          {/* Desktop Table */}
          <table className="hidden md:table w-full text-sm text-left">
            <thead className="bg-[#1f2937] text-gray-300 uppercase text-xs">
              <tr>
                <th className="px-4 py-3">IP</th>
                <th className="px-4 py-3">Location</th>
                <th className="px-4 py-3">Browser</th>
                <th className="px-4 py-3">Device</th>
                <th className="px-4 py-3">Page</th>
                <th className="px-4 py-3">Visited</th>
              </tr>
            </thead>

            <tbody>
              {currentData.map((v) => (
                <tr
                  key={v._id}
                  className="border-b border-gray-700 hover:bg-[#111827]"
                >
                  <td className="px-4 py-3">{v.ip}</td>
                  <td className="px-4 py-3">
                    {v.city}, {v.region}, {v.country}
                  </td>
                  <td className="px-4 py-3">{v.browser}</td>
                  <td className="px-4 py-3">{v.device}</td>
                  <td className="px-4 py-3">{v.page}</td>
                  <td className="px-4 py-3">
                    {new Date(v.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {currentData.map((v) => (
              <div
                key={v._id}
                className="p-4 border border-gray-700 rounded-lg bg-[#111827]"
              >
                <p>
                  <b>IP:</b> {v.ip}
                </p>
                <p>
                  <b>Location:</b> {v.city}, {v.region}, {v.country}
                </p>
                <p>
                  <b>Browser:</b> {v.browser}
                </p>
                <p>
                  <b>Device:</b> {v.device}
                </p>
                <p>
                  <b>Page:</b> {v.page}
                </p>
                <p className="text-gray-400 text-xs mt-2">
                  {new Date(v.createdAt).toLocaleString()}
                </p>
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
    </div>
  );
}
