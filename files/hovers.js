let hovers = document.querySelectorAll('.hovers')

hovers.forEach( (e) => {
    e.addEventListener('mouseover', (b) => {
        let target = b.currentTarget
        let tClass = target.classList[0]
        const tStyle = document.querySelector(`.${tClass}`)
            tStyle.style.transition = "0.2s"
            tStyle.style.backgroundColor = "rgba(0, 0, 0, 0.5)";

        if (tClass == 'btn-one') {
            tStyle.style.marginTop = '-5px'
            tStyle.style.marginBottom = '5px'
            tStyle.style.boxShadow = "3px 3px rgb(163, 74, 0)"
            tStyle.style.backgroundColor = "white"
            tStyle.style.transition = '0.2s'
        }

        if (tClass == 'btn-two') {
            tStyle.style.marginTop = '-5px'
            tStyle.style.marginBottom = '5px'
            tStyle.style.backgroundColor = "transparent"
            tStyle.style.boxShadow = "3px 3px rgb(163, 74, 0)"
            tStyle.style.transition = '0.2s'
        }

        if (tClass == 'premium-btn') {
            tStyle.style.transition = "0.3s"
            tStyle.style.backgroundColor = "rgb(255, 123, 35)";
        }

        if (tClass == 'premium-btn2') {
            tStyle.style.transition = "0.3s"
            tStyle.style.backgroundColor = "rgb(255, 123, 35)";
        }

        if (tClass == 'premium-btn3') {
            tStyle.style.transition = "0.3s"
            tStyle.style.backgroundColor = "rgb(255, 123, 35)";
            tStyle.style.borderColor = 'rgb(255, 123, 35)'
        }

        if (tClass == 'premium-btn-side') {
            tStyle.style.transition = "0.3s"
            tStyle.style.borderColor = '#FF9612'
            tStyle.style.backgroundColor = "white";
            tStyle.style.color = '#FF9612'
        }

        if (tClass == 'premium-btn-side2') {
            tStyle.style.transition = "0.3s"
            tStyle.style.borderColor = '#FF9612'
            tStyle.style.backgroundColor = "white";
            tStyle.style.color = '#FF9612'
        }
    })
})

hovers.forEach( (e) => {
    e.addEventListener('mouseout', (b) => {
        let target = b.currentTarget
        let tClass = target.classList[0]
        const tStyle = document.querySelector(`.${tClass}`)
            tStyle.style.transition = "0.2s"
            tStyle.style.backgroundColor = "white";
            tStyle.style.backgroundColor = "rgba(0, 0, 0, 0.0)";

        if (tClass == 'btn-one') {
            tStyle.style.marginTop = '0px'
            tStyle.style.marginBottom = '0px'
            tStyle.style.backgroundColor = 'white'
            tStyle.style.transition = '0.2s'
            tStyle.style.boxShadow = "none"
        }

        if (tClass == 'btn-two') {
            tStyle.style.marginTop = '0px'
            tStyle.style.marginBottom = '0px'
            tStyle.style.transition = '0.2s'
            tStyle.style.boxShadow = 'none'
        }

        if (tClass == 'premium-btn') {
            tStyle.style.transition = "0.3s"
            tStyle.style.backgroundColor = "rgb(255, 102, 0)";
        }

        if (tClass == 'premium-btn2') {
            tStyle.style.transition = "0.3s"
            tStyle.style.backgroundColor = "rgb(255, 102, 0)";
        }

        if (tClass == 'premium-btn3') {
            tStyle.style.transition = "0.3s"
            tStyle.style.backgroundColor = "rgb(255, 102, 0)";
            tStyle.style.borderColor = 'rgb(255, 102, 0)'
        }

        if (tClass == 'premium-btn-side') {
            tStyle.style.transition = "0.3s"
            tStyle.style.backgroundColor = "rgb(255, 102, 0)";
            tStyle.style.borderColor = 'rgb(255, 102, 0)'
            tStyle.style.backgroundColor = "white";
            tStyle.style.color = 'rgb(255, 102, 0)'
        }

        if (tClass == 'premium-btn-side2') {
            tStyle.style.transition = "0.3s"
            tStyle.style.backgroundColor = "rgb(255, 102, 0)";
            tStyle.style.borderColor = 'rgb(255, 102, 0)'
            tStyle.style.color = 'rgb(255, 102, 0)'
            tStyle.style.backgroundColor = "white";
        }
    })
})

function openMenu() {
    let menuOpened = document.querySelector('.menu-opened')

    if (menuOpened.style.width == '300px') {
        menuOpened.style.width = '0px'
    } else {
        menuOpened.style.width = '300px'
    }
}