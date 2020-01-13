import React from 'react';
import { Formik } from 'formik';
import './EditDashboard.scss';
import Button from '../components/Button/Button'

const EditDashboard = () => (
        <div className="edit-settings">
            <h2>Edit Your Settings here:</h2>

            <Formik
                validateOnChange={false}
                onSubmit={this.onSubmit}
                initialValues={{
                    projectId: '',
                }}

                render={(formProps) => {
                    const {
                        values,
                        handleSubmit,
                        setFieldValue,
                    } = formProps;
                    const { projectId } = values;

                    return (
                        <form onSubmit={handleSubmit} ref={this.form}>
                            <div className="login-modal-input-row">
                                <input
                                    type={projectId ? 'text' : 'password'}
                                    value={projectId}
                                    onChange={(e) => setFieldValue('password', e.target.value)}
                                />
                            </div>

                            <div>
                                <Button>
                                    Submit
                                </Button>
                            </div>
                        </form>
                    );
                }}
            />
        </div>
)

export default EditDashboard
