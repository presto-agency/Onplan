const scenarioPlanning = document.querySelector('.scenario-planning');
if (scenarioPlanning) {
    (function turnCross() {
        let crosses = document.querySelectorAll('.open-menu');
        crosses.forEach(cross => {
            cross.onclick = () => {
                let activeBtn = document.querySelector('.frequently__content> .active')
                cross.classList.toggle('active')
                if (activeBtn) {
                    activeBtn.classList.remove('active')
                }
            }
        })
    }());
}