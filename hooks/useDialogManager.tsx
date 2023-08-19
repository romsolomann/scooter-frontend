import { useContext } from "react";
import { DialogContext } from "../contexts/dialog.context";

export function useDialogManager() {
	return useContext(DialogContext);
}
