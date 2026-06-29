import Link from "next/link";

export default function Home() {
    return (
        <main
            style={{
                padding: 40,
                fontFamily: "Arial",
            }}
        >
            <h1>Thermal Print Test</h1>

            <p>Pilih halaman yang ingin diuji.</p>

            <ul>
                <li>
                    <Link href="/single">
                        Single Print Page
                    </Link>
                </li>

                <li>
                    <Link href="/multiple">
                        Multiple Print Page
                    </Link>
                </li>
            </ul>
        </main>
    );
}