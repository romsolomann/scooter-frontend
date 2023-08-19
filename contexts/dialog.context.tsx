import React, {
	type ComponentClass,
	type FunctionComponent,
	type PropsWithChildren,
	useCallback,
	useRef,
	useState,
} from "react";
import Dialog from "@mui/material/Dialog";
import useIsMobileScreen from "../hooks/useWindowSize";
import { type DialogProps } from "@mui/material/Dialog/Dialog";
import { Fade } from "@mui/material";

type DialogPropsManager = Omit<DialogProps, "open">;

interface OpenDialogOptions {
	DialogProps?: DialogPropsManager;

	DialogContentProps?: object;
}

interface DialogContextProps {
	closeDialog: (afterClose?: () => void) => void;

	openDialog: (
		Component: FunctionComponent<any> | ComponentClass<any> | string,
		options?: OpenDialogOptions
	) => void;
}

export const DialogContext = React.createContext<DialogContextProps>({
	closeDialog: () => {},

	openDialog: () => {},
});

/**

   * Represents DialogProvider Context + Dialog component.

   * @example Open a dialog. DialogContentComponent is a functional or class component.

   * const {openDialog} = useDialogProvider()

   * if (shouldOpenDialog) {

   * 	openDialog(DialogContentComponent, options)

   * }

   *

   */

export function DialogProvider({ children }: PropsWithChildren<unknown>) {
	const isMobileScreen = useIsMobileScreen();

	const [currentDialogComponent, setCurrentDialogComponent] = useState<
		FunctionComponent<any> | ComponentClass<any> | string
	>();

	const [currentDialogContentProps, setCurrentDialogContentProps] =
		useState<any>(undefined);

	const [currentDialogProps, setCurrentDialogProps] =
		useState<DialogPropsManager>();

	const [open, setOpen] = useState(false);

	/**

     * Ref to hold actual onDialogExited logic.

     * In case openDialog() from useDialogProvider() is called inside another dialog

     * we close current dialog and open elements dialog inside onExited callback of Dialog's transition.

     */

	const onExitedInner = useRef<() => void>();

	const closeDialog = useCallback((afterClose?: () => void) => {
		// eslint-disable-next-line no-extra-boolean-cast
		if (!!afterClose) {
			onExitedInner.current = () => {
				// afterClose();
				onExitedInner.current = undefined;
			};
		} else {
			onExitedInner.current = undefined;
		}

		setOpen(false);

		// setCurrentDialogContentProps(undefined);

		// setCurrentDialogProps(undefined);
	}, []);

	const onDialogExited = useCallback(() => {
		if (onExitedInner.current) {
			onExitedInner.current();
		}
	}, []);

	const openDialog = useCallback(
		(
			DialogContentComponent:
				| FunctionComponent<any>
				| ComponentClass<any>
				| string,
			options?: OpenDialogOptions
		) => {
			if (!DialogContentComponent) {
				console.error(
					"Need to pass DialogContentComponent to openDialog callback!"
				);

				return;
			}

			const { DialogProps, DialogContentProps } = options ?? {};

			function setCurrents() {
				setCurrentDialogComponent(() => {
					return DialogContentComponent;
				});

				setCurrentDialogProps(DialogProps);

				setCurrentDialogContentProps(DialogContentProps);
			}

			setOpen((open) => {
				if (!open) {
					setCurrents();

					return true;
				} else {
					onExitedInner.current = () => {
						setOpen(true);

						setCurrents();
					};

					return false;
				}
			});
		},

		[]
	);

	return (
		<DialogContext.Provider
			value={{
				closeDialog,

				openDialog,
			}}
		>
			{children}

			<Dialog
				open={open}
				onClose={(ev: any, reason: any) => {
					if (ev.which === 27) return;
					if (reason !== "backdropClick") {
						closeDialog();
					}
					closeDialog();
				}}
				fullScreen={!!isMobileScreen}
				scroll={isMobileScreen ? "body" : "paper"}
				TransitionComponent={Fade}
				transitionDuration={{ appear: 700, enter: 700, exit: 700 }}
				// disableBackdropClick
				TransitionProps={{ onExited: onDialogExited }}
				maxWidth={"lg"}
				sx={{ overflowY: "inherit" }}
				{...currentDialogProps}
			>
				{currentDialogComponent !== undefined &&
					React.createElement(
						currentDialogComponent,
						currentDialogContentProps
					)}
			</Dialog>
		</DialogContext.Provider>
	);
}
