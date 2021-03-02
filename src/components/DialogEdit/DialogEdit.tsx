import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export interface DataEducation {
  school?: string;
  description?: {
    [x: string]: string;
  };
  id?: number;
  location?: string;
}
export interface DataJob {
  title?: {
    [x: string]: string;
  };
  company?: string;
  id?: number;
}

export interface Props {
  open: boolean;
  handleClose: () => void;
  handleAccept: (data: DataEducation) => void;
  location?: string;
  school?: string;
  title?: string;
  company?: string;
  description?: string;
  id?: number;
  idLanguage: string;
  type: string;
}

const DialogEdit: React.FC<Props> = ({
  open,
  handleClose,
  handleAccept,
  location,
  school,
  title,
  company,
  description,
  id,
  idLanguage,
  type,
}) => {
  const [locationState, setLocationState] = useState<string>("");
  const [schoolState, setSchoolState] = useState<string>("");
  const [titleState, setTitleState] = useState<string>("");
  const [companyState, setCompanyState] = useState<string>("");
  const [descriptionState, setDescriptionState] = useState<string>("");
  useEffect(() => {
    if (location) {
      setLocationState(location);
    }
  }, [location]);
  useEffect(() => {
    if (school) {
      setSchoolState(school);
    }
  }, [school]);
  useEffect(() => {
    if (title) {
      setTitleState(title);
    }
  }, [title]);
  useEffect(() => {
    if (company) {
      setCompanyState(company);
    }
  }, [company]);
  useEffect(() => {
    if (description) {
      setDescriptionState(description);
    }
  }, [description]);
  const dataEducation = {
    school: schoolState,
    description: { [idLanguage]: descriptionState },
    location: locationState,
    id,
  };
  const dataJob = {
    title: { [idLanguage]: titleState },
    company: companyState,
    id,
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Update</DialogTitle>
      <DialogContent>
        <DialogContentText></DialogContentText>
        {type === "school" && (
          <>
            <TextField
              autoFocus
              margin="dense"
              id="location"
              label="Location"
              type="email"
              fullWidth
              value={locationState}
              onChange={(e) => setLocationState(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="school"
              label="School"
              type="email"
              fullWidth
              value={schoolState}
              onChange={(e) => setSchoolState(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="description"
              label="Description"
              type="email"
              fullWidth
              value={descriptionState}
              onChange={(e) => setDescriptionState(e.target.value)}
            />
          </>
        )}

        {type === "job" && (
          <>
            <TextField
              autoFocus
              margin="dense"
              id="title"
              label="Title"
              type="email"
              fullWidth
              value={titleState}
              onChange={(e) => setTitleState(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Company"
              type="email"
              fullWidth
              value={companyState}
              onChange={(e) => setCompanyState(e.target.value)}
            />
          </>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button
          onClick={() => {
            handleAccept(type === "school" ? dataEducation : dataJob);
            handleClose();
          }}
          color="primary"
        >
          {id !== null && id !== undefined ? 'Update': 'Add'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogEdit;
