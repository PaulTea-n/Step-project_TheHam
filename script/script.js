const titleTabs = document.querySelectorAll('.title-item');
const itemTabs = document.querySelectorAll('.content-item');

titleTabs.forEach(onTitleTabClick);

function onTitleTabClick(item) {
    item.addEventListener('click', function() {
        let currentTitleTabs = item;
        let tabNameId = currentTitleTabs.getAttribute("data-item");
        let currentTabId = document.querySelector(tabNameId);

        if (!currentTitleTabs.classList.contains('active')) {
            titleTabs.forEach((item) => {
                item.classList.remove('active');
            });

            itemTabs.forEach((item) => {
                item.classList.remove('active');
            });

            currentTitleTabs.classList.add('active');
            currentTabId.classList.add('active');
        }
    });
}

document.querySelector('.title-item').click();

// -----------------------------------------

categoryPlate = () => {
    const fullPlate = document.querySelector('.category-img-plate');

    const plates = document.querySelectorAll('.category-plate-item');

    const imges = document.querySelectorAll('.category-img-plate-item');

    const load = document.querySelector('.load-more-btn');


    plates.forEach((elem) => {
        elem.addEventListener('click', () => {
            const setCategory = (arr, countStop, randomMath) => {
                const randomiz = () => {
                    return Math.floor(Math.random() * (randomMath));
                };

                const clearActive = document.querySelector('.category-plate-item.active-category');
                clearActive.classList.remove('active-category');

                elem.classList.add('active-category');

                let i = 0;

                imges.forEach((elem) => {
                    elem.style.display = 'none';
                    elem.dataset.showed = '';
                });

                while (i < countStop) {
                    let numb = randomiz();

                    if (arr[numb] && imges[numb].dataset.showed !== '1') {
                        arr[numb].dataset.showed = '1';
                        arr[numb].style.display = 'inline-block';
                        i++;
                    }
                }
            };
            const imgArr = document.querySelectorAll(`.category-img-plate-item[data-category="${elem.dataset.category}"]`);

            load.style.display = 'inline-block';

            fullPlate.classList.remove('category-img-plate-load-more');

            if (elem.dataset.category === 'All') {
                setCategory(imges, 12, 36);
            }
            if (elem.dataset.category !== 'All') {
                setCategory(imgArr, imgArr.length, imgArr.length);
            }
        });
    });

    load.addEventListener('click', () => {


        fullPlate.classList.add('category-img-plate-load-more');

        const randomiz = () => {
            return Math.floor(Math.random() * (36));
        };

        let i = 0;

        while (i < 12) {
            let numb = randomiz();

            if (imges[numb] && imges[numb].dataset.showed !== '1') {
                imges[numb].dataset.showed = '1';
                imges[numb].style.display = 'inline-block';
                i++;
            }
        }

        load.style.display = 'none';
    })

};
categoryPlate();



// -----------------------------------------------------------

const slider = () => {
    const leftBtn = document.querySelector('.left-slide');
    const rightBtn = document.querySelector('.right-slide');
    const slides = document.querySelectorAll('.reviewer-img');
    const slidesArr = Array.prototype.slice.call(slides);
    const reviews = document.querySelectorAll('.review-text');
    const bigReview = document.querySelectorAll('.big-reviewer');

    let countIndex = slides.length - 1;
    let countSlide = 2;

    const clearActive = () => {
        const clearActiveReviewer = document.querySelector('.active-reviewer');
        const clearActiveReview = document.querySelector('.active-review');
        const clearActiveBigReview = document.querySelector('.active-big-review');

        clearActiveReviewer.classList.remove('active-reviewer');
        clearActiveReview.classList.remove('active-review');
        clearActiveBigReview.classList.remove('active-big-review')
    };

    const setActive = (index) => {
        slides[index].classList.add('active-reviewer');
        reviews.forEach((elem) => {
            if (elem.dataset.review === slides[index].dataset.review) {
                elem.classList.add('active-review');
            }
        });
        bigReview.forEach((elem) => {
            if (elem.dataset.review === slides[index].dataset.review) {
                elem.classList.add('active-big-review');
            }
        })
    };

    slides.forEach((elem) => {
        elem.addEventListener('click', () => {
            clearActive();

            countSlide = slidesArr.indexOf(elem);

            setActive(countSlide);
        })
    });

    leftBtn.addEventListener('click', () => {
        clearActive();

        if (countSlide === 0) {
            countSlide = countIndex;
        } else {
            countSlide -= 1;
        }
        setActive(countSlide);
    });

    rightBtn.addEventListener('click', () => {
        clearActive();

        if (countSlide === countIndex) {
            countSlide = 0;
        } else {
            countSlide += 1;
        }
        setActive(countSlide);
    })

};

slider();