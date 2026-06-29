import PrintBarang from '../components/PrintBarang';

export default function Page() {
    return (
        <>
            <PrintBarang page={1} />

            <div className="page-break" />

            <PrintBarang page={2} />

            <div className="page-break" />

            <PrintBarang page={3} />
        </>
    );
}