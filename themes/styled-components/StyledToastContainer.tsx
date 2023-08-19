import { alpha, styled } from "@mui/material";
import { ToastContainer as ToastifyContainer } from "react-toastify";

import colorScheme from "../../colors/colorScheme";

export const StyledToastContainer = styled(ToastifyContainer)`
	&&&.Toastify__toast-container {
		margin-right: 16px;
	}
	.Toastify__toast-icon {
		width: 24px;
		margin-inline-end: 8px;
	}
	.Toastify__toast {
		border-radius: 8px;
		backdrop-filter: blur(4px);
		min-height: 40px;
		min-width: 332px;
	}
	.Toastify__toast-body {
		font-family: FbGofanSansHebEng;
		font-weight: 400;
		font-size: 14px;
		line-height: 24px;
		color: white;
	}
	.Toastify__toast-theme--light.Toastify__toast--success {
		background: ${alpha(colorScheme.success.main, 0.8)};
	}
	.Toastify__toast-theme--light.Toastify__toast--error {
		background: ${alpha(colorScheme.error.main, 0.8)};
	}
	@media only screen and (max-width: 480px) {
		.Toastify__toast-container {
			width: 98vw;
			margin: 0 4px 10px;
		}
		.Toastify__toast {
			margin: 0 16px 20px;
		}
	}
`;
