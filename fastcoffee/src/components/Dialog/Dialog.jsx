import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
// import AddTaskForm from "./AddTaskForm";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
	"& .MuiDialogContent-root": {
		padding: theme.spacing(2),
	},
	"& .MuiDialogActions-root": {
		padding: theme.spacing(1),
	},
	"& .MuiBackdrop-root": {
		backgroundColor: "rgba(0,0,0,0.2)",
	}
}));

function BootstrapDialogTitle(props) {
	const { children, onClose, ...other } = props;

	return (
		<DialogTitle sx={{ m: 0, p: 2 }} {...other}>
			{children}
			{onClose ? (
				<IconButton
					aria-label="close"
					onClick={onClose}
					sx={{
						position: "absolute",
						right: 8,
						top: 8,
						color: (theme) => theme.palette.grey[500],
					}}
				>
					<CloseIcon />
				</IconButton>
			) : null}
		</DialogTitle>
	);
}

BootstrapDialogTitle.propTypes = {
	children: PropTypes.node,
	onClose: PropTypes.func.isRequired,
};

export default function AddDialogs(props) {
	// const { openAddPopup, setOpenAddPopup, handleCreate } = props;
	const { openAddPopup, setOpenAddPopup } = props;

	const handleClose = () => {
		setOpenAddPopup(false);
	};

	// const doCreate = async (data) => {
	// 	handleCreate(data);
	// };

	return (
		<BootstrapDialog
			PaperProps={{
				style: { borderRadius: 20 },
			}}
			// PaperComponent ={{
			// 	style: { background: "transparent" },
			// }}
			maxWidth="lg"
			onClose={handleClose}
			aria-labelledby="customized-dialog-title"
			open={openAddPopup}
		>
			<BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
				Add Employee
			</BootstrapDialogTitle>
			{/* <span style={{ marginLeft: 100, paddingBottom: 25 }}> */}
			<span style={{ margin: 30 }}>
				{/* <AddTaskForm
					dialogState={openAddPopup}
					setDialogState={setOpenAddPopup}
					handleCreate={doCreate}
				/> */}

				asdfdsafadsfafjaiwheasdfasdfadsfadsf
				asdfasdfasd
			</span>
		</BootstrapDialog>
	);
}