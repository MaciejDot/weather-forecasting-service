import { Typography } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

interface WeatherDataAndDescriptionProps {
    description: string
    data: string
    isLoading: boolean
}

const WeatherDataAndDescription = (props: WeatherDataAndDescriptionProps) => {
    return <>
        <Typography variant='subtitle1' align='center'>
            {props.description}
        </Typography>
        {props.isLoading ?<Skeleton animation='wave' height={50}/>:<Typography variant="h6" align='center'>
            {props.data}
        </Typography>}
    </>
}

export default WeatherDataAndDescription;