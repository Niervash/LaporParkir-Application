import React from "react";

export const TableBerandaParkirLiar = ({ data }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Jenis Kendaraan
            </th>
            <th scope="col" className="px-6 py-3">
              Tanggal dan Waktu
            </th>
            <th scope="col" className="px-6 py-3">
              Latitude
            </th>
            <th scope="col" className="px-6 py-3">
              Longitude
            </th>
            <th scope="col" className="px-6 py-3">
              Lokasi
            </th>
            <th scope="col" className="px-6 py-3">
              Deskripsi Masalah
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Bukti
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((data, index) => (
            <tr
              key={index}
              className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
            >
              <td className="px-6 py-4">{data.jenis_kendaraan}</td>
              <td className="px-6 py-4">
                {new Date(data.tanggaldanwaktu).toLocaleString()}
              </td>
              <td className="px-6 py-4">{data.latitude}</td>
              <td className="px-6 py-4">{data.longitude}</td>
              <td className="px-6 py-4">{data.lokasi}</td>
              <td className="px-6 py-4">{data.deskripsi_masalah}</td>
              <td className="px-6 py-4">{data.status}</td>
              <td className="px-6 py-4">
                <a
                  href={data.bukti}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue-600 hover:underline"
                >
                  Lihat
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
