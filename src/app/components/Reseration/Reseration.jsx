"use client";
import {
  Box,
  TextField,
  Button,
  Typography,
  Grid,
} from "@mui/material";
import Tooltip from "@mui/material/Tooltip";

export default function ReservationSection() {
  return (
    <section id="Reservation">
      <Box
        sx={{
          py: 10,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          marginTop: "60px",
          marginBottom: "40px",
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: "1500px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{
              mb: 3,
              color: "#fdc00e",
              fontWeight: 700,
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
            }}
          >
            Make a Reservation
          </Typography>

          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: { xs: "column", md: "row" },
            }}
            container
            spacing={3}
          >
            {["Name", "Email", "Phone"].map((label, i) => (
              <Grid
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                size={{ xs: 9, md: 4 }}
                key={i}
              >
                <TextField
                  fullWidth
                  label={label}
                  variant="outlined"
                  InputLabelProps={{ style: { color: "#fff" } }}
                  InputProps={{
                    style: { color: "#fff" },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root fieldset": {
                      borderColor: "#fdc00e",
                      borderRadius: "19px",
                    },
                    "& .MuiInputBase-input": {
                      padding: "40px",
                    },
                  }}
                />
              </Grid>
            ))}
            {["Ocassion", "Preferred Food", "Branch"].map((label, i) => (
              <Grid size={{ xs: 9, md: 4 }} key={i}>
                <TextField
                  fullWidth
                  label={label}
                  variant="outlined"
                  InputLabelProps={{ style: { color: "#fff" } }}
                  InputProps={{
                    style: { color: "#fff" },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root fieldset": {
                      borderColor: "#fdc00e",
                      borderRadius: "19px",
                    },
                    "& .MuiInputBase-input": {
                      padding: "40px", // المساحة الداخلية
                    },
                  }}
                />
              </Grid>
            ))}

            {["Number if Persons", "Booking Data", "Booking Type"].map(
              (label, i) => (
                <Grid item size={{ xs: 9, md: 4 }} key={i}>
                  <TextField
                    fullWidth
                    color="primary"
                    label={label}
                    variant="outlined"
                    InputLabelProps={{ style: { color: "#fff" } }}
                    InputProps={{
                      style: { color: "#fff" },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root fieldset": {
                        borderColor: "#fdc00e",
                        borderRadius: "19px",
                      },
                      "& .MuiInputBase-input": {
                        padding: "40px", // المساحة الداخلية
                      },
                    }}
                  />
                </Grid>
              )
            )}

            <Grid item size={{ xs: 9, md: 12 }}>
              <TextField
                fullWidth
                color="primary"
                label="Spacial Request"
                variant="outlined"
                InputLabelProps={{ style: { color: "#fff" } }}
                InputProps={{
                  style: { color: "#fff" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root fieldset": {
                    borderColor: "#fdc00e",
                    borderRadius: "19px",
                  },
                  "& .MuiInputBase-input": {
                    padding: "60px",
                  },
                  marginTop: "30px",
                  marginBottom: "30px",
                }}
              />{" "}
              <Tooltip
                title="Reserve"
                placement="bottom"
                componentsProps={{
                  tooltip: {
                    sx: {
                      backgroundColor: "#fdc00e",
                      color: "#032c3f",
                      fontSize: "14px",
                      borderRadius: "8px",
                      boxShadow: 2,
                    },
                  },
                  arrow: {
                    sx: {
                      color: "#fdc00e",
                    },
                  },
                }}
                arrow
              >
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 2,
                    bgcolor: "#fdc00e",
                    color: "#032c3f",
                    fontWeight: 600,
                    py: 1.5,
                    "&:hover": { bgcolor: "#ffcf4a" },
                  }}
                >
                  Reserve Now
                </Button>
              </Tooltip>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </section>
  );
}
