

function ProfileCard(props){

    const { titulo, marca, img } = props;
    return(
        <div className="card">
            <div className="card-img">
                <figure className="image is-1by1">
                    <img src={img} alt="Presentacion"/>
                </figure>
            </div>
            <div className="card-content">
                <div className="media-content">
                    <h2 className="title is-4">{marca}</h2>
                    <h3 className="subtitle is-4">{titulo}</h3>
                </div>
            </div>
            
        </div>
    )
}

export default ProfileCard;