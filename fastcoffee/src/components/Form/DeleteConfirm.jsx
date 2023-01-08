import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { DialogActions, DialogContentText } from "@mui/material";


// import RouteDialogs from "./Routelog";
import "./EditDrink.css";
import { MenuItems } from "../../pages/DashboardPage/Outlets/Menu";
import * as api from "../../controller/data/drinks";


export default function DeleteDrink(props) {
    const { setDialogState, initialValues } = props;
    const { re_render } = useContext(MenuItems);
    const handleCloseDialog = () => {
        setDialogState(false);
        re_render();
    };

    const itemID = initialValues.id;
    //------------------------useState--------------------

    //--------------------Handler

    const handleDelete = () => {
        try {
            api.deleteDrink(itemID);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Box className="">
            <DialogContentText>
                Are you sure you want to delete this item ?
            </DialogContentText>
            <DialogActions>
                <Button
                    variant="outlined"
                    onClick={() => {
                        handleCloseDialog();
                    }}
                >
                    Cancel
                </Button>
                <Button
                    variant="contained"
                    onClick={() => {
                        handleDelete()
                        handleCloseDialog();
                    }}
                >
                    Delete
                </Button>
            </DialogActions>
        </Box>
    );
}