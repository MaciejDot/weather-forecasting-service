import { CardContent, Typography, Card } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import React from "react";
import useTypedStyles from "../hooks/useTypedStyles";
import { basicClasses } from "../theme/basicClasses";

interface TemperatureDetailsProps{
    isLoading: boolean,
    isError: boolean
    weatherKind?: string[],
    highTemp?: number,
    lowTemp?: number,
    temp?: number
}

const TemperatureDetails = (props: TemperatureDetailsProps)=>{
    const classes = useTypedStyles(basicClasses);
    return (<Card className={classes.weatherDataCard}>
        <CardContent>
            <div className={classes.verticalCenteredContent}>
        {props.isLoading ? <Skeleton animation="wave" height={50}/> : 
        <Typography variant='subtitle1' align='center'>
            {props.isError ? '--' : (props.weatherKind?.length && props.weatherKind.reduce((a,b)=>`${a},${b}`))??'--'}
        </Typography>}
        {props.isLoading ? <Skeleton animation="wave" height={50}/> : 
        <Typography variant='h5' align='center'>
                {props.isError ? '--':props.temp?.toFixed(0)??'--'} °C
        </Typography>}
        {props.isLoading ? <Skeleton animation="wave" height={50}/> : 
        <Typography variant='h6' align='center'>
            H:{props.isError ? '--':props.highTemp?.toFixed(0)??'--'}°C&nbsp;L:{props.isError ? '--':props.lowTemp?.toFixed(0)??'--'}°C
        </Typography>
        }
        </div>
        </CardContent>
    </Card>)}

export default TemperatureDetails