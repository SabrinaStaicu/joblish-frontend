import React from 'react';
import Button from "@material-ui/core/Button";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import {nameValidation, required, validEmail} from "../../util/Validations";
import CheckButton from "react-validation/build/button";

const JobApplicationModal = ({successful, closeModal, submitForm, getApplicantName, applicantName, applicantEmail, getApplicantEmail, notes, getNotes, checkBtn, message, form}) => {

    return (
        <>
            <div style={{textAlign: "right"}}>
                <Button variant="contained" color="secondary" onClick={closeModal}>X</Button>
            </div>
            {message && (
                <div className="form-group">
                    <div
                        className={
                            successful ? "alert alert-success" : "alert alert-danger"
                        }
                        role="alert"
                    >
                        {message}
                    </div>
                </div>
            )}
            <Form noValidate onSubmit={submitForm} ref={form}>
                <br/>
                <label>Full name</label>
                <Input
                    className="form-control"
                    type="text"
                    placeholder="Enter full name"
                    onChange={getApplicantName}
                    value={applicantName}
                    validations={[required, nameValidation]}
                />
                <br/>
                <label>Email address</label>
                <Input
                    className="form-control"
                    type="email"
                    placeholder="Enter email"
                    onChange={getApplicantEmail}
                    validations={[required, validEmail]}
                    value={applicantEmail}
                />
                <br/>
                <label>Notes</label>
                <Input
                    className = "form-control"
                    type="text"
                    placeholder="Note for the recruiter"
                    onChange={getNotes}
                    value={notes}
                    validations={[required]}
                />
                <br/>
                <div style={{textAlign: "center"}}>
                    <Button variant="contained" color="primary" type="submit">Apply</Button>
                </div>
                <CheckButton style={{ display: "none" }} ref={checkBtn} />
            </Form>
        </>
    );
};

export default JobApplicationModal;