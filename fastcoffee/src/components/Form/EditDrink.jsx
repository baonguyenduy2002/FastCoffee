import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Slider from '@mui/material/Slider';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { startOfToday, endOfToday } from "date-fns";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import { format } from "date-fns";


// import RouteDialogs from "./Routelog";
import "./EditDrink.css";



// let initialFValues = {
//     id: 0,
//     imageUrl:
//         "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//     des: undefined,
//     emId: undefined,
//     collector: undefined,
//     startDatetime: undefined,
//     endDatetime: undefined,
//     workingArea: undefined,
//     mcps: [],
//     vehicle: undefined,
//     route: false,
//     status: false,
// };

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


function valuetext(value) {
    return `${value}°C`;
}


export default function AddDrink(props) {
    const { dialogState, setDialogState, handleCreate } = props;
    const handleCloseDialog = () => {
        setDialogState(false);
    };
    const [value, setValue] = React.useState(10);

    const handleChange = (event, newValue) => {
        if (typeof newValue === 'number') {
            setValue(newValue);
        }
    }

    const employeeList = [
        {
            id: "CO1124",
            name: "Ali Ahmaa",
            type: "Collector",
            workingStatus: true,
            dob: "14/05/1996",
            address: "142 To Hien Thanh, ward 14, district 10",
            email: "aliahmad@gmail.com",
        },
        {
            id: "CO1125",
            name: "John Wick",
            type: "Janitor",
            workingStatus: true,
            dob: "14/06/1996",
            address: "142 To Hien Thanh, ward 14, district 10",
            email: "johnwick@gmail.com",
        },
    ];

    const MCPList = [
        {
            id: 1,
            name: "MCP1",
        },
        {
            id: 2,
            name: "MCP2",
        },
        {
            id: 3,
            name: "MCP3",
        },
        {
            id: 4,
            name: "MCP4",
        },
    ];

    const VehicleList = [
        {
            id: 1,
            name: "CH01",
        },
        {
            id: 2,
            name: "CH02",
        },
        {
            id: 3,
            name: "CH03",
        },
        {
            id: 4,
            name: "CH04",
        },
        {
            id: 5,
            name: "CH05",
        },
    ];

    const AreaList = [
        {
            id: 1,
            name: "Area 1",
        },
        {
            id: 2,
            name: "Area 2",
        },
        {
            id: 3,
            name: "Area 3",
        },
        {
            id: 4,
            name: "Area 4",
        },
        {
            id: 5,
            name: "Area 5",
        },
    ];

    function getOptionList(employee) {
        return {
            name: employee.name,
            id: employee.id,
        };
    }

    //------------------------useState--------------------
    const optionEm = employeeList.map(getOptionList);
    const optionVehicle = VehicleList.map(getOptionList);
    const optionArea = AreaList.map(getOptionList);
    const [startDate, setStartDate] = useState(startOfToday());
    const [endDate, setEndDate] = useState(endOfToday());

    //--------------------Haddler
    const handleChangeStartDate = (newValue) => {
        setStartDate(newValue);
    };

    const handleChangeEndDate = (newValue) => {
        setEndDate(newValue);
    };

    const doCreate = async (data) => {
        handleCreate(data);
    };

    const [checkedMCP, setCheckedMCPs] = useState([]);

    const handleCheck = (id) => {
        setCheckedMCPs((prev) => {
            const isCheckedMCP = checkedMCP.includes(id);
            if (isCheckedMCP) {
                return checkedMCP.filter((item) => item !== id);
            } else {
                return [...prev, id];
            }
        });
    };

    return (
        <Box className="">
            <Grid
                container
                spacing={5}
                direction="row"
                alignItems="center"
                justifyContent="center"
            >
                <Grid item xs={6}>
                    <TextField
                        placeholder="description"
                        style={{ width: 300, marginTop: 8, marginBottom: 8 }}
                        id="des"
                        label="Task Description"
                        value={initialFValues.des}
                        onChange={(event, newValue) => {
                            initialFValues.des = event.target.value;
                        }}
                    />
                    <Slider
                        value={value}
                        aria-label="Temperature"
                        min={5}
                        step={1}
                        max={30}
                        getAriaValueText={valuetext}
                        valueLabelFormat={valuetext}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                    />
                </Grid>
                <Grid item xs={4}>
                    <div className="MCPsBox">
                        alo
                    </div>
                </Grid>
            </Grid>
        </Box>
    );
}