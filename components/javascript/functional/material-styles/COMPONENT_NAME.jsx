import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import styles from "./COMPONENT_NAME.styles";

const useStyles = makeStyles(styles);

const COMPONENT_NAME = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        </div>
    );
};

export default COMPONENT_NAME;
