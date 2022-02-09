const scenarioPlanning = document.querySelector('.scenario-planning');
if (scenarioPlanning) {
    (function turnCross() {
        let crosses = document.querySelectorAll('.open-menu');
        crosses.forEach(cross => {
            cross.onclick = () => {
                let activeBtn = document.querySelector('.frequently__content> .active')
                if (!activeBtn) {
                    cross.classList.add('active')
                }
                else {
                    activeBtn.classList.remove('active')
                    cross.classList.add('active')
                }
            }
        })
    }());
}