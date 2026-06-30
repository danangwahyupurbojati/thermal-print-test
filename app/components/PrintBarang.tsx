/* eslint-disable @next/next/no-img-element */
'use client';

import './print.css';

export default function PrintBarang({ page = 1 }) {
    const now = new Date();

    const printData = {
        company_name: 'PT Optik Melawai',
        plant_code_tujuan: 'JKT01',
        nomor_kirim: `KRM2506000${page}`,
        nomor_referensi: `REF2506000${page}`,
        created_at: '29/06/2026',
        store_code_tujuan: 'GPG01',
        nik_pengirim: 'EMP001',
        items: [
            {
                item_name: 'Frame Rayban',
                qty: 2,
            },
            {
                item_name: 'Lens Essilor',
                qty: 1,
            },
            {
                item_name: 'Cleaning Kit',
                qty: 3,
            },
            {
                item_name: 'Contact Lens',
                qty: 5,
            },
            {
                item_name: 'Sunglasses',
                qty: 1,
            },
        ],
    };

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         window.print();
    //     }, 1000);

    //     return () => clearTimeout(timer);
    // }, []);

    return (
        <main className="wrapperPrint">
            <section className="top-header">
                <div className="header-title">
                    Kirim Barang [NON SO]
                </div>
                <div className="barcodeContainer">
                    <img
                        src={`https://barcode.tec-it.com/barcode.ashx?data=${printData.nomor_kirim}&code=Code128`}
                        alt=""
                    />
                    <div>{printData.nomor_kirim}</div>
                </div>

                <div className="barcodeContainer">
                    <img
                        src={`https://barcode.tec-it.com/barcode.ashx?data=${printData.nomor_referensi}&code=Code128`}
                        alt=""
                    />
                    <div>{printData.nomor_referensi}</div>
                </div>

            </section>

            <section className="address">
                <strong>{printData.company_name}</strong>
                <div>
                    Optik Melawai - Giant Pondok Gede
                    <br />
                    Graha Pondok Gede Blok A
                    <br />
                    Bekasi
                </div>
                <div>NPWP : 01.309.872.8-432.001</div>
                <div>Telp : 021-84995489</div>

            </section>

            <section className="detail">

                <div className="row">
                    <span>Plant</span>
                    <span>{printData.plant_code_tujuan}</span>
                </div>

                <div className="row">
                    <span>No Kirim</span>
                    <span>{printData.nomor_kirim}</span>
                </div>

                <div className="row">
                    <span>No Ref</span>
                    <span>{printData.nomor_referensi}</span>
                </div>

                <div className="row">
                    <span>Tanggal</span>
                    <span>{printData.created_at}</span>
                </div>

                <div className="row">
                    <span>Tgl Proses</span>
                    <span>{now.toLocaleString()}</span>
                </div>

            </section>

            <table>

                <thead>

                    <tr>
                        <th style={{ width: '15%' }}>No</th>
                        <th>Description</th>
                        <th style={{ width: '20%' }}>Qty</th>
                    </tr>

                </thead>

                <tbody>

                    {printData.items.map((item, i) => (
                        <tr key={i}>

                            <td>{i + 1}</td>

                            <td>{item.item_name}</td>

                            <td className="right">
                                {item.qty}
                            </td>

                        </tr>
                    ))}

                </tbody>

            </table>

            <div className="total">

                <span>TOTAL ITEM</span>

                <span>{printData.items.length}</span>

            </div>

            <div className="footer">

                <div>

                    Pengirim

                    <br />

                    <br />

                    {printData.nik_pengirim}

                </div>

                <div>

                    Penerima

                    <br />

                    <br />

                    (______________)

                </div>

            </div>
           <div className="cut-space">
              &nbsp;
            </div>
        </main>
    );
}
