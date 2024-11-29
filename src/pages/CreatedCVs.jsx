import Resume from "src/components/Resume.jsx";
import AddButton from "src/components/AddButton.jsx";


const SavedCVs = () => {

    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",  // Centers the items horizontally
        gap: "20px",           // Adds space between the items
        padding: "20px",       // Adds padding around the container
    };

    return (
        <div>
            <div style={containerStyle}>
                {resumes.map((resume) => (
                    <Resume key={resume.id} id={resume.id} title={resume.title} uername={resume.username}
                            description={resume.description}/>
                ))}
            </div>
            <AddButton onClick="/resume/:action/:id?"/>
        </div>
    );
};

export default SavedCVs;
