const Card = (probs) =>{
    // console.log(probs.children)
    return (
        <div className="ui card">
            <div className="content">{probs.children}</div>
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic green button">Approve</div>
                    <div className="ui basic red button">Deny</div>

                </div>
            </div>
        </div>
    
        )
}

export default Card