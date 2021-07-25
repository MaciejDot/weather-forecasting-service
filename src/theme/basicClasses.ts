import { Theme } from "@material-ui/core";

export const basicClasses = (theme: Theme) => ({
    root: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
    },
    rightSeparationBorder: {
        borderRight: 'solid',
        borderRightWidth: '0.5px',
        borderColor: theme.palette.type === 'dark' ? 'rgba(150, 150, 150, 0.12)' : 'rgba(100, 100, 100, 0.12)'
    },
    bottomSeparationBorder: {
        borderBottom: 'solid',
        borderBottomWidth: '0.5px',
        borderColor: theme.palette.type === 'dark' ? 'rgba(150, 150, 150, 0.12)' : 'rgba(100, 100, 100, 0.12)'
    },
    marginTopCentering: {
        marginTop: '12px'
    }
})