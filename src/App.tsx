import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard/indext";
import { Header } from "./components/Header/indext";
import { NewTransactionModal } from "./components/NewTransactionModal/indext";
import { GlobalStyle } from "./styles/global";

import { TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement('#root')

export function App() {

	const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

    function handleOpenTransactionModal() {
        setIsNewTransactionModalOpen(true)
    }

    function handleCloseNewTransactionModal() {
        setIsNewTransactionModalOpen(false)
    }

	return (
		<TransactionsProvider>

			<Header onOpenNewTransactionModal={handleOpenTransactionModal} />
			<Dashboard />

			<NewTransactionModal
				isOpen={isNewTransactionModalOpen}
				onRequestClose={handleCloseNewTransactionModal}
			/>
			
			<GlobalStyle />
		</TransactionsProvider>
	);
}

