const datas = [
    { id: "K001", nama: "Rudy Paningal", email: "rudyp@mail.com", alamat: "Jl.Kemboja no.45", jabatan: "Staff" },
    { id: "K002", nama: "Suliwa Yudha", email: "suliwa@mail.com", alamat: "Jl.mawar no.5", jabatan: "Kepala Bagian" },
    { id: "K003", nama: "Rafly Putra", email: "rafly123@mail.com", alamat: "Jl.patriot no.2", jabatan: "Staff" },
    { id: "K004", nama: "Annisa Widya", email: "nisawidya@mail.com", alamat: "Jl.Klingkit no.1", jabatan: "Staff" },
    { id: "K005", nama: "Daril Insan", email: "darilin@mail.com", alamat: "Jl.ahmad dahlan no.8", jabatan: "Staff" },
];

const dataJabatan = [
    { id: "K001", jabatan: "Staff" },
    { id: "K002", jabatan: "Kepala Bagian" },
    { id: "K003", jabatan: "Staff" },
    { id: "K004", jabatan: "Staff" },
    { id: "K005", jabatan: "Staff" },
];

function renderTable() {
    const tableBody = document.getElementById("tbody");
    tableBody.innerHTML = ""; // Bersihkan isi tabel sebelumnya

    datas.forEach((data, idx) => {
        const row = `
            <tr class="bg-white border-b ">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    ${idx + 1}
                </th>
                <td class="px-6 py-4">${data.id}</td>
                <td class="px-6 py-4">${data.nama}</td>
                <td class="px-6 py-4">${data.email}</td>
                <td class="px-6 py-4">${data.alamat}</td>
                <td class="px-6 py-4">${data.jabatan}</td>
                <td class="px-6 py-4">
                    <button class="bg-green-400 p-2 text-white rounded-sm">Update</button>
                    <button class="bg-red-400 p-2 text-white rounded-sm">Delete</button>
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

// Panggil fungsi ini untuk merender tabel saat halaman dimuat
renderTable();

function renderTableJabatan() {
    const tableBody = document.getElementById("tbodyJabatan");
    tableBody.innerHTML = ""; // Bersihkan isi tabel sebelumnya

    
    
    datas.forEach((data, idx) => {
        const row = `
            <tr class="bg-white border-b ">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    ${idx + 1}
                </th>
                <td class="px-6 py-4">${data.id}</td>
                <td class="px-6 py-4">${data.alamat}</td>
                <td class="px-6 py-4">${data.jabatan}</td>
                <td class="px-6 py-4">
                    <button class="bg-green-400 p-2 text-white rounded-sm">Update</button>
                    <button class="bg-red-400 p-2 text-white rounded-sm">Delete</button>
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

// Panggil fungsi ini untuk merender tabel saat halaman dimuat
renderTableJabatan();

