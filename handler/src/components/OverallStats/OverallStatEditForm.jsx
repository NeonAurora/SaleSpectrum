import React, { useReducer, useContext } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  Grid,
  Button,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import { useTheme } from "@mui/system";
import FormContext from "components/FormContext";  // Import the created context

// Utility function to deeply set a value in an object based on a key path
const setDeepValue = (obj, path, value) => {
  let i;
  path = path.split('.');
  for (i = 0; i < path.length - 1; i++) {
    if (obj[path[i]] === undefined) {
      if (isNaN(path[i + 1])) {
        obj[path[i]] = {};
      } else {
        obj[path[i]] = [];
      }
    }
    obj = obj[path[i]];
  }
  obj[path[i]] = value;
};

function dataReducer(state, action) {
  switch (action.type) {
    case 'SET_VALUE': {
      const newState = JSON.parse(JSON.stringify(state));
      setDeepValue(newState, action.keyPath, action.value);
      return newState;
    }
    default:
      return state;
  }
}

const SingleField = ({name}) => {
  const { updatedData, handleInputChange } = useContext(FormContext);  // Use the context

  return (
    <Grid item xs={12} sm={6} md={4}>
        <FormControl variant="outlined" fullWidth margin="normal">
            <InputLabel>{name}</InputLabel>
            <OutlinedInput
                name={name}
                value={updatedData[name]} // Use value from context
                onChange={(e) => handleInputChange(name, e.target.value)} // Directly call handleInputChange
                label={name}
            />
        </FormControl>
    </Grid>
  );
};

const ArrayField = ({keyName, value}) => {
  const { updatedData, handleInputChange } = useContext(FormContext); // Use the context
  const theme = useTheme();

  return (
    <Grid item xs={12}>
        <Card sx={{ marginBottom: 2, backgroundColor: theme.palette.background.alt }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>{keyName}</Typography>
                <Grid container spacing={2}>
                    {value.map((item, index) =>
                        Object.entries(item).map(([itemKey,]) =>
                            <SingleField
                                name={`${keyName}[${index}][${itemKey}]`}
                                onChange={(e) => handleInputChange(`${keyName}[${index}][${itemKey}]`, e.target.value)} // Directly call handleInputChange
                            />
                        )
                    )}
                </Grid>
            </CardContent>
        </Card>
    </Grid>
  );
};

const ObjectField = ({keyName, value}) => {
  const { updatedData, handleInputChange } = useContext(FormContext); // Use the context
  const theme = useTheme();

  return (
    <Grid item xs={12}>
        <Card sx={{ marginBottom: 2, backgroundColor: theme.palette.background.alt }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>{keyName}</Typography>
                <Grid container spacing={2}>
                    {Object.entries(value).map(([objectKey, ]) =>
                        <SingleField
                            name={`${keyName}.${objectKey}`}
                            onChange={(e) => handleInputChange(`${keyName}.${objectKey}`, e.target.value)} // Directly call handleInputChange
                        />
                    )}
                </Grid>
            </CardContent>
        </Card>
    </Grid>
  );
};

const OverallStatEditForm = ({ documentData, onConfirm }) => {
  const [updatedData, dispatch] = useReducer(dataReducer, documentData);
  const theme = useTheme();

  const handleInputChange = (keyPath, value) => {
    dispatch({ type: 'SET_VALUE', keyPath: keyPath, value: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm(updatedData);
  };

  return (
    <FormContext.Provider value={{ updatedData, handleInputChange }}>  // Provide the context
      <Box component="form" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {Object.entries(updatedData).map(([key, value]) => {
            if (key === "_id") {
              return null;
            }

            if (Array.isArray(value)) {
              return <ArrayField key={key} keyName={key} value={value} />;
            }

            if (typeof value === "object" && value !== null) {
              return <ObjectField key={key} keyName={key} value={value} />;
            }

            return <SingleField key={key} name={key} />;
          })}
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Confirm
            </Button>
          </Grid>
        </Grid>
      </Box>
    </FormContext.Provider>
  );
};

export default OverallStatEditForm;
