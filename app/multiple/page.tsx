import PrintBarang from '../components/PrintBarang';
import PrintTrigger from "../components/PrintTrigger";

export default function Page() {
    return (
        <>
            <PrintBarang page={1} />

            <div className="page-break" />

            <PrintBarang page={2} />

            <div className="page-break" />

            <PrintBarang page={3} />

            <PrintTrigger />
        </>
    );
}