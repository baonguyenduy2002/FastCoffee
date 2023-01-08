import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { DialogContent } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";


import EditDrink from "../Form/EditDrink";
import DeleteDrink from "../Form/DeleteConfirm";

const CustomDialog = styled(Dialog)(({ theme }) => ({
	// "& .MuiDialogContent-root": {
	// 	padding: theme.spacing(2),
	// },
	// "& .MuiDialogActions-root": {
	// 	padding: theme.spacing(1),
	// },
	"& .MuiBackdrop-root": {
		backgroundColor: 'rgba(0,0,0,0.3)',
	}
}));

function CustomDialogTitle(props) {
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

CustomDialogTitle.propTypes = {
	children: PropTypes.node,
	onClose: PropTypes.func.isRequired,
};

export function EditDialogs(props) {
	// const { openAddPopup, setOpenAddPopup, handleCreate } = props;
	const { openPopup, setOpenPopup, initialValues } = props;

	const handleClose = () => {
		setOpenPopup(false);
	};

	return (
		<CustomDialog
			PaperProps={{
				style: { borderRadius: 20 },
			}}
			// PaperComponent ={{
			// 	style: { background: "transparent" },
			// }}
			maxWidth="lg"
			onClose={handleClose}
			aria-labelledby="customized-dialog-title"
			open={openPopup}
		>
			<CustomDialogTitle id="customized-dialog-title" onClose={handleClose}>
				Edit Drinks
			</CustomDialogTitle>
			{/* <span style={{ marginLeft: 100, paddingBottom: 25 }}> */}
			<span style={{ margin: 30 }}>
				{/* <AddTaskForm
					dialogState={openAddPopup}
					setDialogState={setOpenAddPopup}
					handleCreate={doCreate}
				/> */}

				<DialogContent>
					<EditDrink
						initialValues={initialValues}
						dialogState={openPopup}
						setDialogState={setOpenPopup}
					/>
				</DialogContent>
			</span>
		</CustomDialog>
	);
}

export function DeleteDialogs(props) {
	// const { openAddPopup, setOpenAddPopup, handleCreate } = props;
	const { openPopup, setOpenPopup, initialValues } = props;

	const handleClose = () => {
		setOpenPopup(false);
	};

	return (
		<CustomDialog
			PaperProps={{
				style: { borderRadius: 20 },
			}}
			// PaperComponent ={{
			// 	style: { background: "transparent" },
			// }}
			maxWidth="lg"
			onClose={handleClose}
			aria-labelledby="customized-dialog-title"
			open={openPopup}
		>
			<CustomDialogTitle id="customized-dialog-title" onClose={handleClose}>
				Delete Drink
			</CustomDialogTitle>
			{/* <span style={{ marginLeft: 100, paddingBottom: 25 }}> */}
			<DialogContent>
				<DeleteDrink
					initialValues={initialValues}
					dialogState={openPopup}
					setDialogState={setOpenPopup}
				/>
			</DialogContent>

		</CustomDialog>
	);
}