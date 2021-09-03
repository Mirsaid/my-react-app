const CardItems = (probs) =>{
    return (
        
            <div className="item">
                <a className="ui tiny image">
                    <img src={probs.avatar} />
                </a>
                <div className="content">
                    <a className="header">
                       <p> {probs.header}</p>
                    </a>
                    <div className="description">
                        <p>{probs.description}</p>
                    </div>

                </div>
            </div>

        
    )
}

export default CardItems