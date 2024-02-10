// Autopark Tabs

const tabs = document.querySelectorAll('.auto__tabs-btn'),
      tabsContent = document.querySelectorAll('.auto__tabcontent'),
      tabsParent = document.querySelector('.auto__tabs');

function hideTabContent()
{
    tabsContent.forEach(item =>
    {
        item.classList.add('hide')
        item.classList.remove('show', 'fade')
    })
    tabs.forEach(item =>
    {
        item.classList.remove('auto__tabs-btn_active')
    })
}

function showTabContent(i = 0)
{
    tabsContent[i].classList.add('show', 'fade')
    tabsContent[i].classList.remove('hide')
    tabs[i].classList.add('auto__tabs-btn_active')
}

hideTabContent()
showTabContent()

tabsParent.addEventListener('click', (event) =>
{
    const target = event.target

    if (target && target.classList.contains('auto__tabs-btn'))
    {
        tabs.forEach((item, i) =>
        {
            console.log(item);
            if (target == item)
            {
                hideTabContent()
                showTabContent(i)
            }
        })
    }
})