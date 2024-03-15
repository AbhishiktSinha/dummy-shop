
export default function ProductRating({rating}) {

    const fullStarCount = Math.floor(Number(rating) / 1);
    const isHalfStar = (Number(rating) % 1) > 0.5;

    // console.log('full stars:', fullStarCount)

    const starsList = [];
    for (let i = 0; i < fullStarCount; i++) {
        starsList.push(<FullStar key={i}/>)
    }
    isHalfStar && starsList.push(<HalfStar key={rating}/>)
    
    for (let i = 0; i < 5-(fullStarCount + (isHalfStar ? 1 : 0)); i++) {
        starsList.push(<EmtpyStar/>)
    }


    return (
        <div className="rating">{starsList}</div>
    )
}

function HalfStar() {
    return (<span 
        className="rating-star material-symbols-rounded"
        >star_half</span>
        )
}

function FullStar() {
    return (
        <span 
            className="rating-star material-symbols-rounded" 
            >
                star
        </span>
    )
}

function EmtpyStar() {
    return (
        <span className="empty-star rating-star material-symbols-rounded">star</span>
    )
}