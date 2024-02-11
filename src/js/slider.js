// Logos slider

const sliderContainer = document.querySelector('.clients__slider')
const sliderCopy = sliderContainer.querySelector('.clients__slider-slide').cloneNode(true)
sliderContainer.appendChild(sliderCopy)


// Security section's slider
const securitySlider = document.querySelector('.security-slider__wrapper')
const securitySlides = document.querySelectorAll('.security-slider__slide')
const securitySliderNavigationUp = document.querySelector('.slide-up')
const securitySliderNavigationDown = document.querySelector('.slide-down')

let isMobile = window.matchMedia("(max-width: 767px)").matches

const slidesLength = isMobile ? securitySlides.length : securitySlides.length / 2

let activeSlideIndex = 0

function changeSlide(direction)
{
    const width = 363;
    if (direction === 'down')
    {
        activeSlideIndex++
        if (activeSlideIndex > slidesLength - 1)
        {
            activeSlideIndex = 0
        }
    } else if (direction === 'up')
    {
        activeSlideIndex--
        if (activeSlideIndex < 0)
        {
            activeSlideIndex = slidesLength - 1
        }
    }
    securitySlider.style.transform = `translateX(-${(width * activeSlideIndex)}px)`;
}

securitySliderNavigationUp.addEventListener('click', () => changeSlide('down'))
securitySliderNavigationDown.addEventListener('click', () => changeSlide('up'))

// Tabs

const tabs = document.querySelectorAll('.tabs__btn'),
      tabsContent = document.querySelectorAll('.employee__tabcontent'),
      tabsParent = document.querySelector('.tabs__header');

function hideTabContent()
{
    tabsContent.forEach(item =>
    {
        item.classList.add('hide')
        item.classList.remove('show', 'fade')
    })

    tabs.forEach(item =>
    {
        item.classList.remove('tabs__btn-active')
    })
}

function showTabContent(i = 0)
{
    tabsContent[i].classList.add('show', 'fade')
    tabsContent[i].classList.remove('hide')
    tabs[i].classList.add('tabs__btn-active')
}

hideTabContent()
showTabContent()

tabsParent.addEventListener('click', (event) =>
{
    const target = event.target

    if (target && target.classList.contains('tabs__btn'))
    {
        tabs.forEach((item, i) =>
        {
            if (target == item)
            {
                hideTabContent()
                showTabContent(i)
            }
        })
    }
})