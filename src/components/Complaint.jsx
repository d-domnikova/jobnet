import PropTypes from "prop-types";

const Complaint = ({ complaint }) => {
    const { Complainant, TargetPost, Description, Status, SubmittedAt } = complaint;

    const cardStyle = {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        margin: '8px 0',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
    };

    const headerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '8px',
    };

    const nameStyle = {
        fontSize: '16px',
        fontWeight: 'bold',
    };

    const descriptionStyle = {
        marginTop: '8px',
        fontSize: '14px',
    };

    const statusStyle = {
        padding: '4px 8px',
        borderRadius: '4px',
        fontWeight: 'bold',
        color: Status === 'Resolved' ? 'green' : 'red',
        backgroundColor: Status === 'Resolved' ? '#e0f7e9' : '#fdecea',
    };

    return (
        <div style={cardStyle}>
            <div style={headerStyle}>
                <span style={nameStyle}>{Complainant.name || 'Anonymous'}</span>
                <span style={statusStyle}>{Status}</span>
            </div>
            <div style={descriptionStyle}>
                <p><strong>Target Post:</strong> {TargetPost?.title || 'Unknown Post'}</p>
                <p><strong>Description:</strong> {Description}</p>
                <p><strong>Submitted At:</strong> {new Date(SubmittedAt).toLocaleString()}</p>
            </div>
        </div>
    );
};

Complaint.propTypes = {
    complaint: PropTypes.shape({
        Complainant: PropTypes.shape({
            name: PropTypes.string,
        }).isRequired,
        TargetPost: PropTypes.shape({
            title: PropTypes.string,
        }),
        Description: PropTypes.string.isRequired,
        Status: PropTypes.oneOf(['Pending', 'Resolved', 'Rejected']).isRequired,
        SubmittedAt: PropTypes.string.isRequired,
    }).isRequired,
};

export default Complaint;
