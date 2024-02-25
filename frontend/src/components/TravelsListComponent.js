import axios from 'axios';
import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Grid,
    IconButton,
    Typography,
    useMediaQuery,
    useTheme
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
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
        <Grid container spacing={2} sx={{ marginLeft: 30, width: '80%' }}>
            {travels.map((travel, index) => (
                <Grid item key={index} xs={isMobile ? 12 : 4}>
                    <Card
                        sx={{
                            bgcolor: '#e9f8ff',
                            borderRadius: 5,
                            boxShadow: 4,
                            m: 1,
                            pb: 1,
                            pr: 1
                        }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: '#0c437a' }}>
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
                            <IconButton sx={{ color: '#7f0d00' }}>
                                <DeleteForeverIcon />
                            </IconButton>
                            <IconButton sx={{ color: '#00437f' }}>
                                <AddIcon />
                            </IconButton>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}
