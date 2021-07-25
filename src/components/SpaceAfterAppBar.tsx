import useTypedStyles from "../hooks/useTypedStyles";
import { basicClasses } from "../theme/basicClasses";

export const SpaceAfterAppBar =()=>{
    const classes = useTypedStyles(basicClasses);
    return <div className={classes.spaceAfterAppBar}/>
}