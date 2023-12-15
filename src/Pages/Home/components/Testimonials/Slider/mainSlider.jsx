import React, { useEffect, useState } from 'react'
import { CardSlider } from './Card';
import { TESTIMONIALS } from 'constant/content';
import { Box, Button } from '@mui/material';
import "./Slider.css"


const App = () => {
    const [moveClass, setMoveClass] = useState('');
    const [carouselItems, setCarouselItems] = useState(TESTIMONIALS);

    useEffect(() => {
        document.documentElement.style.setProperty('--num', carouselItems.length);
    }, [carouselItems]);

    const handleAnimationEnd = () => {
        if (moveClass === 'prev') {
            shiftNext([...carouselItems]);
        } else if (moveClass === 'next') {
            shiftPrev([...carouselItems]);
        }
        setMoveClass('');
    };

    const shiftPrev = (copy) => {
        let lastcard = copy.pop();
        copy.splice(0, 0, lastcard);
        setCarouselItems(copy);
    };

    const shiftNext = (copy) => {
        let firstcard = copy.shift();
        copy.splice(copy.length, 0, firstcard);
        setCarouselItems(copy);
    };

    return (
        <div className="carouselwrapper">
            <ul onAnimationEnd={handleAnimationEnd} className={`${moveClass} carousel`}>
                {carouselItems.map((t, index) =>
                    <CardSlider
                        img={t.imgUrl}
                        description={t.description}
                        key={t.head + index}
                        person={t.person}
                    />
                )}
            </ul>
            <Box mt={4}>
                <Button
                    variant='contained'
                    sx={{
                        p: '3px',
                        borderRadius: '20px',
                        m: 1,
                        px: 2,
                        bgcolor: 'orange',
                        "&:hover": {
                            bgcolor: 'white',
                            color: 'orange',
                            boxShadow: '3px 5px 25px gray'
                        }
                    }}
                    onClick={() => setMoveClass('next')} className="prev">
                    Prev
                </Button>
                <Button
                    variant='contained'
                    sx={{
                        p: '3px',
                        borderRadius: '20px',
                        m: 1,
                        px: 2,
                        bgcolor: 'orange',
                        "&:hover": {
                            bgcolor: 'white',
                            color: 'orange',
                            boxShadow: '3px 5px 25px gray'
                        }
                    }}
                    onClick={() => setMoveClass('prev')} className="next">
                    Next
                </Button>
            </Box>
        </div>
    );
};


export default App;