import { type IconProps } from "react-toastify";

export const getToastType = ({ type }: IconProps) => {
	switch (type) {
		case "error": {
			return <TimesCircleIcon sx={{ color: "white" }} />;
		}
		case "success": {
			return <CheckCircleSmall sx={{ color: "white" }} />;
		}
	}
};
