import { TransactionTable } from "../TransactionTable/indext";
import { Container } from "../Dashboard/styles";
import { Summary } from "../Summary";

export function Dashboard() {
    return (
        <Container>
            <Summary />
            <TransactionTable />
        </Container>
    )
}