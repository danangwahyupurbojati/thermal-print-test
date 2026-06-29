import PrintBarang from "../components/PrintBarang";
import PrintTrigger from "../components/PrintTrigger";

export default function Page() {
    return (
        <>
            <PrintTrigger />

            <PrintBarang page={1} />
        </>
    );
}