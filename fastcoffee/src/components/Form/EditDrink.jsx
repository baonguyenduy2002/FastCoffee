import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Slider from '@mui/material/Slider';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";


// import RouteDialogs from "./Routelog";
import "./EditDrink.css";



let initialFValues = {
    id: 0,
    imageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    des: undefined,
    emId: undefined,
    collector: undefined,
    startDatetime: undefined,
    endDatetime: undefined,
    workingArea: undefined,
    mcps: [],
    vehicle: undefined,
    route: false,
    status: false,
};

const formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

function valuetext(value) {
    return formatter.format(value);
}

export default function EditDrink(props) {
    const { dialogState, setDialogState, handleCreate, initialValues } = props;
    const handleCloseDialog = () => {
        setDialogState(false);
    };
    const [price, setPrice] = useState(initialValues.price);
    const [name, setName] = useState(initialValues.name);
    const [des, setDes] = useState(initialValues.description)

    const handleChangePrice = (event, newValue) => {
        if (typeof newValue === 'number') {
            setPrice(newValue);
        }
    }

    const handleChangeName = (event, newValue) => {
        setName(event.target.value)
    }

    const handleChangeDes = (event, newValue) => {
        setDes(event.target.value)
    }

    //------------------------useState--------------------

    //--------------------Haddler

    const doCreate = async (data) => {
        handleCreate(data);
    };

    return (
        <Box className="">
            <Grid
                container
                spacing={2}
                direction="row"
                // alignItems="center"
                justifyContent="center"
            >
                <Grid item md={8}>
                    <TextField
                        placeholder="Name"
                        style={{ width: 600, marginTop: 8, marginBottom: 8 }}
                        id="name"
                        label="Drinks Name"
                        value={name}
                        onChange={handleChangeName}
                    />
                    <TextField
                        placeholder="Description"
                        style={{ width: 600, marginTop: 8, marginBottom: 8 }}
                        multiline={true}
                        rows={5}
                        id="descrition"
                        label="Drinks Name"
                        value={des}
                        onChange={handleChangeDes}
                    />
                </Grid>
                <Grid item md={4} className="second-grid">
                    <div className="Price" style={{ marginTop: 8, marginBottom: 8 }} >
                        <Typography gutterBottom>Price</Typography>
                        <Slider
                            value={price}
                            aria-label="Price"
                            min={10000}
                            step={1000}
                            max={300000}
                            defaultValue={50000}
                            getAriaValueText={valuetext}
                            valueLabelFormat={valuetext}
                            onChange={handleChangePrice}
                            valueLabelDisplay="auto"
                        />
                    </div>
                    <Stack
                        direction="row-reverse"
                        spacing={2}
                        style={{ marginTop: 20, marginLeft: 10 }}
                    >
                        <Button
                            variant="contained"
                            onClick={() => {
                                // doCreate(initialFValues);
                                handleCloseDialog();
                            }}
                        >
                            Edit
                        </Button>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
}