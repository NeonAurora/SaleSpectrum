import React from "react";
import {
  Box,
  TextField,
  Typography,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import { useTheme } from "@mui/system";

const TempStatSearchForm = ({ documentData }) => {
  const theme = useTheme();

  const renderField = (name, value) => (
    <Grid item xs={12} sm={6} md={4}>
      <TextField
        label={name}
        variant="outlined"
        fullWidth
        margin="normal"
        value={value}
        InputProps={{
          readOnly: true,
        }}
      />
    </Grid>
  );

  return (
    <Box component="form" sx={{ color: 'white' }}>
      <Grid container spacing={2}>
        {Object.entries(documentData).map(([key, value]) => {
          if (key === "_id") {
            return null;
          }

          if (typeof value === "object" && value !== null) {
            return (
              <Grid item xs={12}>
                <Card sx={{ marginBottom: 2, backgroundColor: theme.palette.background.alt }}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {key}
                    </Typography>
                    <Grid container spacing={2}>
                      {Object.entries(value).map(([objectKey, objectValue]) =>
                        renderField(`${key}.${objectKey}`, objectValue)
                      )}
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            );
          }

          return renderField(key, value);
        })}
      </Grid>
    </Box>
  );
};

export default TempStatSearchForm;
