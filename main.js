let hero = {
    id: 01,
    img: img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTksN6D6xq-5F_iXFAiX3VNaRD_RmtauMVajg&usqp=CAU",
    name: 'Hero',
    hp: 100,
    atk: 10,
    level: 1,
    gold: 0
}

let boss = {
    id: 02,
    img: src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOoGpYBOWoy04WzXrWGcMTiPvklqVjuVDxAQ&usqp=CAU",
    name: 'Satan',
    hp: 100,
    atk: 5,
    level: 1
}

function drawHero(){
    let template = ''
    if(hero.hp > 0){
        template += /*html*/
        `
        <div class="col">
                    <div class="card">
                        <img onclick="healHero()" class="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTksN6D6xq-5F_iXFAiX3VNaRD_RmtauMVajg&usqp=CAU" alt="">
                        <div class="progress">
                            <div class="progress-bar" style = "width: 100%" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">HP</div>
                          </div>
                          <span>Attack: ${hero.atk}</span>
                          <span>Gold: ${hero.gold}</span>
                          <span>Level: ${hero.level}</span>
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
        <img class="img-fluid" onclick="attackBoss()" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOoGpYBOWoy04WzXrWGcMTiPvklqVjuVDxAQ&usqp=CAU" alt="">
        <div class="progress">
        <div id='boss-bar' class="progress-bar" style = "width: 100%" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">HP<div>
          </div>
            <span>Attack: ${boss.atk}</span>
            <span>Gold: ${boss.gold}</span>
            <span>Level: ${boss.level}</span>
        </div>
  `
    }
    document.getElementById('boss-field').innerHTML = template
  
}

function startGame(){
    hero.hp = 100
    boss.hp = 100
    boss.atk = 5
    drawHero()
    drawBoss()
    
}

function updateHealth(name) {
    let health = document.getElementById('boss-field')
    let healthBar = health.querySelector('.progress-bar').style.width = boss.hp + "%"
}

function updateHero(params) {
    let health = document.getElementById('hero-field')
    let healthBar = health.querySelector('.progress-bar').style.width = hero.hp + "%"
}

function attackBoss() {
    boss.hp-= hero.atk;  
    updateHealth(boss)  
    bossFelledChecker()
}
function healHero(){
    if(hero.hp < 100 && hero.hp > 1){
        hero.hp += 5
    }
    updateHero(hero)
    console.log(hero.hp);
}

function bossAttack(){
    hero.hp -= boss.atk
    updateHero(hero)
}
function bossFelledChecker(){
    if(boss.hp <= 0 && boss.level == 1){
        boss.level = 2
        hero.gold += 20
        levelUp()
        drawHero()
    }
    if(boss.hp <= 0 && boss.level == 2){
        boss.level = 3
        hero.gold += 50
        levelUp()
        drawHero()
    }
}
function levelUp(){
    if(boss.level == 2){
        boss.atk = 10;
        boss.hp = 150;
    }
    if(boss.level == 3){
        boss.atk = 25;
        boss.hp = 250;
    }
}
    



setInterval(bossAttack, 2000)

console.log(hero.hp);