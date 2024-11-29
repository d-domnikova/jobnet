import {useEffect, useState} from 'react';
import Complaint from "src/components/Complaint.jsx";
import axios from "axios";
import Post from "src/pages/Post.jsx";

const ModeratorMain = () => {
    const [complaints, setComplaints] = useState([]);
    const [selectedComplaint, setSelectedComplaint] = useState(null);

    useEffect(() => {
        axios.get("https://localhost:6969/api/complaints")
            .then(response => setComplaints(response.data))
            .catch(error => console.error('Error fetching complaints:', error));
    }, []);

    const handleViewComplaint = (id) => {
        const complaint = complaints.find(c => c.id === id);
        setSelectedComplaint(complaint);
    };

    const handleRejectComplaint = (id) => {
        console.log('Reject complaint ID:', id);
        // You can add API call logic to reject complaint here
    };

    return (
        <div className="chat-container">
            <div className="message-list">
                {complaints.map((complaint) => (
                    <Complaint
                        key={complaint.id}
                        userName={complaint.complainant.name}
                        previewText={complaint.description.substring(0, 50) + '...'}
                        unreadCount={0}
                        onClick={() => handleViewComplaint(complaint.id)}
                    />
                ))}
            </div>

            <div className="message-content">
                {selectedComplaint ? (
                    <>
                        <h2>Details of Complaint</h2>
                        <Post post={selectedComplaint.targetPost} />
                        <p><strong>Description:</strong> {selectedComplaint.description}</p>
                        <p><strong>Status:</strong> {selectedComplaint.status}</p>
                        <p><strong>Submitted At:</strong> {new Date(selectedComplaint.submittedAt).toLocaleString()}</p>
                    </>
                ) : (
                    <p>Please select a complaint to view details.</p>
                )}
            </div>

            <div className="message-actions">
                <button onClick={() => handleRejectComplaint(selectedComplaint?.id)} className="action-button">Відхилити</button>
                <button onClick={() => handleViewComplaint(selectedComplaint?.id)} className="action-button">Переглянути</button>
            </div>
        </div>
    );
};

export default ModeratorMain;
