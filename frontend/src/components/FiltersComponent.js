import { Button, Grid, Stack, TextField, useMediaQuery, useTheme } from "@mui/material";
import ChecklistIcon from '@mui/icons-material/Checklist';
import ClearIcon from '@mui/icons-material/Clear';
import { useEffect, useState } from "react";
import SelectFilter from "./SelectFilterComponent";

export default function Filters() {
    const [cities, setCities] = useState([]);
    const [citiesSelected, setCitiesSelected] = useState([]);

    const [departments, setDepartments] = useState([]);
    const [departmentsSelected, setDepartmentsSelected] = useState([]);

    const [areas, setAreas] = useState([]);
    const [areasSelected, setAreasSelected] = useState([]);

    const [score, setScore] = useState();

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    useEffect(() => { }, []);

    return (
        <Stack
            sx={{
                border: 2,
                borderColor: '#0e423a',
                borderRadius: 2,
                mb: 3,
                p: 2
            }}
        >
            <Grid container spacing={1}>
                <Grid item xs={isMobile ? 12 : 6}>
                    <SelectFilter
                        label="Villes"
                        selectedValues={citiesSelected}
                        setSelectedValues={setCitiesSelected}
                        values={cities}
                    />
                </Grid>
                <Grid item xs={isMobile ? 12 : 6}>
                    <SelectFilter
                        label="Départements"
                        selectedValues={departmentsSelected}
                        setSelectedValues={setDepartmentsSelected}
                        values={departments}
                    />
                </Grid>
                <Grid item xs={isMobile ? 12 : 6}>
                    <SelectFilter
                        label="Régions"
                        selectedValues={areasSelected}
                        setSelectedValues={setAreasSelected}
                        values={areas}
                    />
                </Grid>
                <Grid item xs={isMobile ? 12 : 6}>
                    <TextField
                        label="Note"
                        type="number"
                        value={score}
                        onClick={event => setScore(event.target.value)}
                        sx={{ width: '100%' }}
                    />
                </Grid>
            </Grid>
            <Stack direction={'row'} sx={{ justifyContent: 'flex-end', mt: 3 }}>
                <Button
                    color='inherit'
                    endIcon={<ChecklistIcon />}
                    size="small"
                    variant='contained'
                    sx={{
                        bgcolor: '#ffffff',
                        border: 2,
                        borderColor: '#108272',
                        borderRadius: 2,
                        color: '#108272',
                        ml: 1
                    }}
                >
                    Filtrer
                </Button>
                <Button
                    color='inherit'
                    endIcon={<ClearIcon />}
                    size="small"
                    variant='contained'
                    sx={{
                        bgcolor: '#ffffff',
                        border: 2,
                        borderColor: '#7f0d00',
                        borderRadius: 2,
                        color: '#7f0d00',
                        ml: 1
                    }}
                >
                    Réinitialiser
                </Button>
            </Stack>
        </Stack>
    );
}
