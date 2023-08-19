import { useEffect } from "react";
import { useRouter } from "next/router";
import { type ToastContainerProps, toast } from "react-toastify";
import { StyledToastContainer } from "../../themes/styled-components/StyledToastContainer";

interface IProps {
	rtl?: boolean;
	closeButton?: ToastContainerProps["closeButton"];
	autoClose?: ToastContainerProps["autoClose"];
	position?: ToastContainerProps["position"];
	hideProgressBar?: ToastContainerProps["hideProgressBar"];
	icon?: ToastContainerProps["icon"];
}

export const ToastContainer = (props: IProps): JSX.Element => {
	const router = useRouter();

	useEffect(() => {
		router.events.on("routeChangeStart", () => toast.dismiss());
	}, [router]);

	return <StyledToastContainer {...props} />;
};
