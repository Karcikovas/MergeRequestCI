import React from 'react';
import './EditDashboard.scss';
import Button from '../components/Button/Button'

const EditDashboard = () => (
        <div className="edit-settings">
            <h2>Edit Your Settings here:</h2>

            <div className="edit-settings-form">
                <div className="edit-settings-input-row">
                    BoardName:<input/>
                </div>

                <div className="edit-settings-input-row">
                    Team Name:<input/>
                </div>

                <div className="edit-settings-input-row">
                    Project ID:<input/>
                </div>
            </div>

            <div className="edit-settings-actions">
                <Button>Save</Button>
                <Button>Cancel</Button>
            </div>
        </div>
)

export default EditDashboard
