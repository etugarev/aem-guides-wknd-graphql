/*
Copyright 2024 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it.
*/

// environment variable for configuring the experiment client
const {
    REACT_APP_AB_TESTING,
    REACT_APP_AB_TESTING_PATH,
    REACT_APP_AB_TESTING_EXPERIMENT
} = process.env;

const experiment = () => {
    if (REACT_APP_AB_TESTING === "on") {
        if (REACT_APP_AB_TESTING_PATH) {
            let path = REACT_APP_AB_TESTING_PATH.split(";")[0];
            let variations = REACT_APP_AB_TESTING_PATH.split(";")[1];
            return {"experiment" : REACT_APP_AB_TESTING_EXPERIMENT, "path": path, "variations": variations};
        }
    } else {
        return {};
    }
}

export default experiment;