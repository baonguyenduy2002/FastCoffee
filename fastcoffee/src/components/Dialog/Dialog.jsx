import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { DialogContent } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';



import AddDrink from "../Form/AddDrink";

const CustomDialog = styled(Dialog)(({ theme }) => ({
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

export default function AddDialogs(props) {
	const { openAddPopup, setOpenAddPopup, handleCreate } = props;
	// const { openAddPopup, setOpenAddPopup } = props;

	const handleClose = () => {
		setOpenAddPopup(false);
	};

	const doCreate = async (data) => {
		handleCreate(data);
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
			open={openAddPopup}
		>
			<CustomDialogTitle id="customized-dialog-title" onClose={handleClose}>
				Add Employee
			</CustomDialogTitle>
			{/* <span style={{ marginLeft: 100, paddingBottom: 25 }}> */}
			<span style={{ margin: 30 }}>
				{/* <AddTaskForm
					dialogState={openAddPopup}
					setDialogState={setOpenAddPopup}
					handleCreate={doCreate}
				/> */}

				<DialogContent>
					<AddDrink 
						dialogState={openAddPopup}
						setDialogState={setOpenAddPopup}
					>
					</AddDrink>

				</DialogContent>
			</span>
		</CustomDialog>
	);
}