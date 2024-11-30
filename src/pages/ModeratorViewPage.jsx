import React, { useState, useEffect } from 'react';
import Post from "src/components/Post.jsx";
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ComplaintDetailsPage = () => {
    const [targetPost, setTargetPost] = useState(null);
    const { complaintId } = useParams(); // Extract complaintId from URL

    useEffect(() => {
        // Fetch complaint and target post from backend
        const fetchComplaint = async () => {
            try {
                const response = await axios.get(`/api/complaints/${complaintId}`);
                const { targetPost } = response.data;
                setTargetPost(targetPost);
            } catch (error) {
                console.error("Error fetching complaint data:", error);
            }
        };

        fetchComplaint();
    }, [complaintId]);

    if (!targetPost) {
        return <div>Loading...</div>; // Show loading state while data is being fetched
    }

    return (
        <div>
            <h1>Complaint Details</h1>
            <Post
                header={targetPost.title}
                username={targetPost.authorName} // Assuming TargetPost has an authorName field
                avatar={targetPost.authorAvatar} // Assuming TargetPost has an authorAvatar field
                likes={targetPost.likesCount || 0}
                comments={targetPost.commentsCount || 0}
                bannerImage={targetPost.bannerImage} // Assuming TargetPost has a bannerImage field
                body={targetPost.content} // Assuming TargetPost has a content field
                tags={targetPost.tags || []} // Assuming TargetPost has tags field
            />
        </div>
    );
};

export default ComplaintDetailsPage;
