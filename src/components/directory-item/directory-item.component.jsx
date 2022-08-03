import { useNavigate } from "react-router-dom";
import "./directory-item.styles.scss";

const DirectoryItem = ({ category, id }) => {
    const { imageUrl, title } = category;
    const navigate = useNavigate();
    return (
        <div key={id} className="directory-item-container">
            <div
                className="background-image"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
            />
            <div className="body" onClick={() => navigate(`shop/${title}`)}>
                <h2>{title}</h2>
                <p>Shop Nowish</p>
            </div>
        </div>
    );
};

export default DirectoryItem;
