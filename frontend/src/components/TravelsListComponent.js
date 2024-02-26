import axios from 'axios';
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
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DownloadIcon from '@mui/icons-material/Download';
import PlusOneIcon from '@mui/icons-material/PlusOne';
import SortIcon from '@mui/icons-material/Sort';
import StarIcon from '@mui/icons-material/Star';
import { useEffect, React, useState } from "react";

const baseURL = `http://localhost:5000`;

export default function TravelsList() {
    const [travels, setTravels] = useState([]);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));


    useEffect(() => {
        (async () => {
            const resp_travels = await axios.get(`${baseURL}/travel/?id=1`);
            setTravels(resp_travels.data.data);
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
            <Grid container spacing={2}>
                {travels.map((travel, index) => (
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
                                    Durée : {travel.lifetime} jours
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
                                    sx={{ color: '#7f0d00' }}
                                >
                                    <DeleteForeverIcon />
                                </IconButton>
                                <IconButton title="Plus d'informations" sx={{ color: '#108272' }}>
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
