let hero = {
    id: 01,
    img: img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTksN6D6xq-5F_iXFAiX3VNaRD_RmtauMVajg&usqp=CAU",
    name: 'Hero',
    hp: 100,
    atk: 5,
}

let boss = {
    id: 02,
    img: src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOoGpYBOWoy04WzXrWGcMTiPvklqVjuVDxAQ&usqp=CAU",
    name: 'Satan',
    hp: 100,
    atk: 1,
}

function drawHero(){
    let template = ''
    if(hero.hp > 0){
        template += /*html*/
        `
        <div class="col">
                    <div class="card">
                        Hero Here
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTksN6D6xq-5F_iXFAiX3VNaRD_RmtauMVajg&usqp=CAU" alt="">
                        <div class="progress">
                            <div class="progress-bar" style = "width: 100%" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">HP</div>
                          </div>
                          <span>Stats:</span>
                    </div>
                </div>
        
        `
    }
    document.getElementById('hero-field').innerHTML = template
  
}

function drawBoss(){
    let template = ''
    if(hero.hp > 0){
        template += /*html*/
        `
        <div class="card">
        <img onclick="attackBoss()" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOoGpYBOWoy04WzXrWGcMTiPvklqVjuVDxAQ&usqp=CAU" alt="">
        <div class="progress">
            <div id='boss-bar' class="progress-bar" style = "width: 100%" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">HP</div>
          </div>
          <span>Stats:</span>
  </div>
  `
    }
    document.getElementById('boss-field').innerHTML = template
  
}

function updateHealth(name) {
    let health = document.getElementById('boss-field')
    let healthBar = health.querySelector('.progress-bar').style.width = boss.hp + "%"

    
}

function attackBoss() {
    boss.hp-= hero.atk;  
    updateHealth(boss)  
}


drawHero()
drawBoss()