import axios from 'axios';
import { baseURL } from '../app.config';
import { differenceInDays, format } from 'date-fns';
import {
    Avatar,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Grid,
    IconButton,
    Stack,
    Typography,
    useMediaQuery,
    useTheme
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DownloadIcon from '@mui/icons-material/Download';
import PlusOneIcon from '@mui/icons-material/PlusOne';
import SortIcon from '@mui/icons-material/Sort';
import StarIcon from '@mui/icons-material/Star';
import { useEffect, React, useState } from "react";
import Filters from './FiltersComponent';

export default function TravelsList() {
    const [addFilters, setAddFilters] = useState(false);
    const [travels, setTravels] = useState([]);
    const [travelsDisplayed, setTravelsDisplayed] = useState([]);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const filterBasedOnScore = (score) => {
        if (score === -1) return travels;
        return travels.filter(travel => travel.score === score);
    }

    const filterBasedOnDate = (filteredTravels, startDate, endDate) => {
        if (startDate === "" && endDate === "") return filteredTravels;

        startDate = startDate ? format(new Date(startDate), "yyyy-MM-dd") : false;
        endDate = endDate ? format(new Date(endDate), "yyyy-MM-dd") : false;

        return filteredTravels.filter(travel => {
            const start_date = startDate ? format(new Date(travel.start_date), "yyyy-MM-dd") : false;
            const end_date = endDate ? format(new Date(travel.end_date), "yyyy-MM-dd") : false;

            if (startDate && endDate) {
                return (end_date <= endDate) && (start_date >= startDate);
            }
            return endDate ? (end_date <= endDate) : (start_date >= startDate);
        });
    }

    const filterBasedOnRegions = (filteredTravels, regions) => {
        if (regions.length === 0) return filteredTravels;
        return filteredTravels.filter(travel => regions.includes(travel.region_id));
    }

    const filterBasedOnDepartments = (filteredTravels, departments) => {
        if (departments.length === 0) return filteredTravels;
        return filteredTravels.filter(travel => departments.includes(travel.department_id));
    }

    const applyFilters = (startDate, endDate, departments, regions, score) => {
        let filteredTravels = filterBasedOnScore(score);
        filteredTravels = filterBasedOnDate(filteredTravels, startDate, endDate);
        filteredTravels = filterBasedOnRegions(filteredTravels, regions);
        filteredTravels = filterBasedOnDepartments(filteredTravels, departments);
        setTravelsDisplayed(filteredTravels);
    }

    const deleteTravel = async (id) => {
        await axios.delete(`${baseURL}/travel/?id=${id}`);
        window.location.reload();
    }

    useEffect(() => {
        (async () => {
            try {
                const resp_travels = await axios.get(`${baseURL}/travel/?id=1`);
                setTravels(resp_travels.data.data);
                setTravelsDisplayed(resp_travels.data.data);
            } catch (e) {
                console.error(e.response.data.error);
            }
        })();
    }, []);

    return (
        <Stack sx={{ marginLeft: 30, width: '80%' }}>
            <Typography
                variant="h4"
                sx={{
                    color: '#0e423a',
                    m: 5,
                    textAlign: 'center',
                    textDecorationLine: 'underline',
                }}
            >
                Voyages réalisés
            </Typography>
            <Stack direction={'row'} sx={{ justifyContent: 'flex-end', mb: 3 }}>
                <Button
                    color='inherit'
                    endIcon={<SortIcon />}
                    size="small"
                    variant='contained'
                    onClick={() => setAddFilters(!addFilters)}
                    sx={{
                        bgcolor: '#ffffff',
                        border: 2,
                        borderColor: '#0e423a',
                        borderRadius: 2,
                        color: '#737373',
                        ml: 1
                    }}
                >
                    Filtrer
                </Button>
                <Button
                    color='inherit'
                    endIcon={<PlusOneIcon />}
                    size="small"
                    variant='contained'
                    sx={{
                        bgcolor: '#ffffff',
                        border: 2,
                        borderColor: '#0e423a',
                        borderRadius: 2,
                        color: '#737373',
                        ml: 1
                    }}
                >
                    Ajouter
                </Button>
                <Button
                    color='inherit'
                    endIcon={<DownloadIcon />}
                    size="small"
                    variant='contained'
                    sx={{
                        bgcolor: '#ffffff',
                        border: 2,
                        borderColor: '#0e423a',
                        borderRadius: 2,
                        color: '#737373',
                        ml: 1
                    }}
                >
                    Télécharger
                </Button>
            </Stack>

            {addFilters && <Filters applyFilters={applyFilters} />}

            {travelsDisplayed.length === 0 && (
                <Stack direction={'column'}>
                    <Typography variant="h6" sx={{ mb: 1, ml: 1 }}>
                        Pas encore de voyages réalisés.
                    </Typography>
                    <Button
                        size="small"
                        startIcon={<AddPhotoAlternateIcon />}
                        sx={{
                            color: '#084da1',
                            width: 250,
                        }}
                    >
                        Créer mon premier voyage
                    </Button>
                </Stack>
            )}

            <Grid container spacing={2}>
                {travelsDisplayed.map((travel, index) => (
                    <Grid item key={index} xs={isMobile ? 12 : 4}>
                        <Card
                            sx={{
                                bgcolor: '#ebf4f4',
                                borderRadius: 5,
                                boxShadow: 4,
                                pb: 1,
                                pr: 1
                            }}>
                            <CardHeader
                                avatar={
                                    <Avatar sx={{ bgcolor: '#108272' }}>
                                        {travel.label.charAt(0)}
                                    </Avatar>
                                }
                                title={`${travel.label}`}
                                subheader={`${travel.comment || "Pas de commentaire"}`}
                                sx={{ fontSize: '1.3rem' }}
                            />
                            <CardContent>
                                <Typography
                                    color="text.secondary"
                                    variant="body1"
                                >
                                    Durée : {-differenceInDays(travel.start_date, travel.end_date)} jours
                                </Typography>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Typography
                                        color="text.secondary"
                                        sx={{ mt: 1 }}
                                        variant="body1"
                                    >
                                        Note :
                                    </Typography>
                                    <Typography sx={{ mt: '14px' }}>
                                        {Array.from({ length: travel.score }, (_, key) => (
                                            <StarIcon key={key} sx={{ color: '#dcda8b' }} />
                                        ))}
                                    </Typography>
                                </div>
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'flex-end', padding: 0 }}>
                                <IconButton
                                    title="Supprimer définitivement"
                                    onClick={() => deleteTravel(travel.id)}
                                    sx={{ color: '#7f0d00' }}
                                >
                                    <DeleteForeverIcon />
                                </IconButton>
                                <IconButton
                                    title="Plus d'informations"
                                    sx={{ color: '#108272' }}
                                >
                                    <AddIcon />
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Stack>
    );
}
