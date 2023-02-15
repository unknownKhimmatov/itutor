import React, { useState } from 'react'

export default function CommentPost() {

    const [rating, setRating] = useState(0)

    // Catch Rating value
    // const handleRating = (rate: number) => {
    //     setRating(rate)


    // }
    // <Rating onClick={handleRating} />


    return (
        <>
            <div className='commentpost'>
                <div className="title-post title">
                    <h3>
                        Оставить отзыв
                    </h3>
                </div>
                <div className="main-post">
                    <textarea placeholder='Оставить комментарий'></textarea>
                    <div className="bottom-post">
                        <div className="stars title">
                            <span>Поставить оценку </span> <i>{rating}</i>
                        </div>
                        <div className="post-button">
                            <button>Оставить</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
