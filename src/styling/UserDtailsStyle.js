import {makeStyles} from "@material-ui/core/styles";

export const useEditStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            marginBottom : 20,
            width: 100,
        },
    },
}));