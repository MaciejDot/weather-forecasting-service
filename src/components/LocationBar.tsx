import { IconButton, Grid, Typography } from "@material-ui/core";
import { ArrowBackIos } from "@material-ui/icons";
import { Link } from "react-router-dom";
interface LocationBarProps {
    label: string
}
const LocationBar = (props: LocationBarProps) => {
    return <Grid container>
        <Grid item xs={1}>
            <IconButton
                component={Link} to='/'
            >
                <ArrowBackIos />
            </IconButton>
        </Grid>
        <Grid item xs={10}>
            <Typography variant='h5' align='center'>
                {props.label}
            </Typography>
        </Grid>
    </Grid>
}
export default LocationBar;