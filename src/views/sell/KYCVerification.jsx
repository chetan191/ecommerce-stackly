"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Stack,
  Typography,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { styled } from "@mui/system";

const StyledUpload = styled("label")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  border: "2px dashed #c77dff",
  borderRadius: "12px",
  padding: "14px 16px",
  cursor: "pointer",
  color: "#555",
  fontSize: "14px",
  "&:hover": {
    borderColor: "#6a0dad",
  },
});

const KYCVerification = ({ nextStep, prevStep }) => {
  const [idProof, setIdProof] = useState(null);
  const [businessProof, setBusinessProof] = useState(null);
  const [additionalDoc, setAdditionalDoc] = useState(null);
  const [isIndividual, setIsIndividual] = useState(false);
  const [confirm, setConfirm] = useState(false);

  const handleSubmit = () => {
    if (!idProof) {
      alert("Please upload your ID Proof!");
      return;
    }
    if (!isIndividual && !businessProof) {
      alert("Please upload Business Proof or select Individual option!");
      return;
    }
    if (!confirm) {
      alert("Please confirm document validity!");
      return;
    }
    nextStep();
  };

  return (
    <Box>
      {/* Heading */}
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ color: "purple", mb: 1 }}
      >
        KYC / Verification
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Upload your identity and business proof document to continue
      </Typography>

      <Stack
        spacing={3}
        sx={{ width: { xs: "90vw", md: "50vw" }, maxWidth: "600px" }}
      >
        {/* ID Proof */}
        <Box>
          <Typography variant="subtitle1" fontWeight="500">
            ID Proof (Passport / National ID / Driving License)
          </Typography>
          <Typography variant="caption" color="text.secondary">
            *Upload a valid government-issued ID
          </Typography>

          <input
            id="id-proof"
            type="file"
            hidden
            accept="image/*,.pdf"
            onChange={(e) => setIdProof(e.target.files[0])}
          />
          <StyledUpload htmlFor="id-proof">
            {idProof ? idProof.name : "Choose a file"}
            <span style={{ color: "#6a0dad", fontWeight: "600" }}>Browse</span>
          </StyledUpload>
        </Box>

        {/* Business Proof */}
        <Box>
          <Typography variant="subtitle1" fontWeight="500">
            Business Proof (business registration or tax certificate){" "}
            <Typography component="span" color="text.secondary">
              optional
            </Typography>
          </Typography>
          <Typography variant="caption" color="text.secondary">
            *Upload Business registration / VAT / Tax ID Document
          </Typography>

          <input
            id="business-proof"
            type="file"
            hidden
            accept="image/*,.pdf"
            onChange={(e) => setBusinessProof(e.target.files[0])}
          />
          <StyledUpload htmlFor="business-proof">
            {businessProof ? businessProof.name : "Choose a file"}
            <span style={{ color: "#6a0dad", fontWeight: "600" }}>Browse</span>
          </StyledUpload>
        </Box>

        {/* OR Individual Option */}
        <Typography align="center" color="text.secondary">
          or
        </Typography>
        <FormControlLabel
          control={
            <Checkbox
              checked={isIndividual}
              onChange={(e) => setIsIndividual(e.target.checked)}
            />
          }
          label="I am selling as an individual (no business registration)."
        />

        {/* Additional Docs */}
        <Box>
          <Typography variant="subtitle1" fontWeight="500">
            Additional Documents (if any){" "}
            <Typography component="span" color="text.secondary">
              optional
            </Typography>
          </Typography>
          <Typography variant="caption" color="text.secondary">
            *Upload other supporting document
          </Typography>

          <input
            id="additional-doc"
            type="file"
            hidden
            accept="image/*,.pdf"
            onChange={(e) => setAdditionalDoc(e.target.files[0])}
          />
          <StyledUpload htmlFor="additional-doc">
            {additionalDoc ? additionalDoc.name : "Choose a file"}
            <span style={{ color: "#6a0dad", fontWeight: "600" }}>Browse</span>
          </StyledUpload>
        </Box>

        {/* Confirmation */}
        <Box>
          <Typography variant="subtitle1" sx={{ color: "purple", mb: 1 }}>
            Confirmation
          </Typography>
          <FormControlLabel
            control={
              <Checkbox
                checked={confirm}
                onChange={(e) => setConfirm(e.target.checked)}
              />
            }
            label="I confirm that the documents uploaded are valid and issued by the respective authority."
          />
        </Box>

        {/* Buttons */}
        <Stack direction="row" spacing={2} mt={2}>
          <Button
            variant="outlined"
            onClick={prevStep}
            sx={{ borderRadius: "8px", py: 1.2 }}
            fullWidth
          >
            Back
          </Button>
          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(90deg, #6a0dad, #3b0066)",
              "&:hover": {
                background: "linear-gradient(90deg, #3b0066, #6a0dad)",
              },
              borderRadius: "25px",
              py: 1.4,
              fontWeight: "bold",
              fontSize: "16px",
              textTransform: "none",
              height: "52px",
            }}
            onClick={handleSubmit}
            fullWidth
          >
            Continue
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default KYCVerification;