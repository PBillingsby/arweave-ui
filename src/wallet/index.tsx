import React, { FC, useEffect, useState } from 'react';

export interface IArweaveWalletProps {
	buttonText: string;
}

declare global {
	interface Window {
		arweaveWallet: any;
	}
}

export const ArweaveWallet: FC<IArweaveWalletProps> = ({
	buttonText,
	...props
}) => {
	const [wallet, setWallet] = useState<string>("")
	useEffect(() => {
		setWallet("falsdjflksdahf")
	}, [wallet])

	const connect = async () => {
		try {
			console.log("HEY")
			const address = await global.window.arweaveWallet.connect("ACCESS_ALL_ADDRESSES");
		}
		catch (error) {
			console.error("Refresh to try again.");
		}
	}
	return <button {...props} onClick={() => connect()}>{buttonText}</button>;
};