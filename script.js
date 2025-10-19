// ANIMACAO
var lastO = document.querySelectorAll(".hidden");
var Slast = document.querySelectorAll(".Shidden");

var myObserver = new IntersectionObserver((abacate) => {
    if (window.innerWidth <= 768) {
        console.log("Script desativado no mobile");
        return; // Sai do script se for mobile
    } else {
    abacate.forEach((contar) => {
        if (contar.isIntersecting) {
            contar.target.classList.add('show');
        } else {
            contar.target.classList.remove('show');
        }
    })}
});

var observaSite = new IntersectionObserver((obsSite) => {
    if (window.innerWidth <= 768) {
        console.log("Script desativado no mobile");
        return; // Sai do script se for mobile
    } else {
    console.log(obsSite);
    obsSite.forEach((contarR) => {
        if (contarR.isIntersecting) {
            contarR.target.classList.add('apareceSite');
        } else {
            contarR.target.classList.remove('apareceSite');
        }
    })}
});


lastO.forEach((lastO) => myObserver.observe(lastO));
Slast.forEach((Slast) => observaSite.observe(Slast));
// ANIMACAO

var S1 = document.getElementById("projetosD");
var S2 = document.getElementById("projetosD2");
var S3 = document.getElementById("projetosD3");
var S4 = document.getElementById("projetosD4");
var siteAgora = 1;
function setinhaD() {
    siteAgora += 1;
    if (siteAgora == 5) {
        siteAgora = 1;
    }
    if (siteAgora == 1) {
        S1.style.display = "flex";
    } else {
        S1.style.display = "none";
    }
    if (siteAgora == 2) {
        S2.style.display = "flex";
    } else {
        S2.style.display = "none";
    }
    if (siteAgora == 3) {
        S3.style.display = "flex";
    } else {
        S3.style.display = "none";
    }
    if (siteAgora == 4) {
        S4.style.display = "flex";
    } else {
        S4.style.display = "none";
    }
}
function setinhaE() {
    siteAgora -= 1;
    if (siteAgora == 0) {
        siteAgora = 4;
    }
    if (siteAgora == 4) {
        S4.style.display = "flex";
    } else {
        S4.style.display = "none";
    }
    if (siteAgora == 3) {
        S3.style.display = "flex";
    } else {
        S3.style.display = "none";
    }
    if (siteAgora == 2) {
        S2.style.display = "flex";
    } else {
        S2.style.display = "none";
    }
    if (siteAgora == 1) {
        S1.style.display = "flex";
    } else {
        S1.style.display = "none";
    }
}
document.getElementById('Home').addEventListener('click', function () {
    document.getElementById('contain').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('Sobre').addEventListener('click', function () {
    document.getElementById('textReal').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('Portfolio').addEventListener('click', function () {
    document.getElementById('projetosD').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('Certificado').addEventListener('click', function () {
    document.getElementById('CertificadoArea').scrollIntoView({ behavior: 'smooth' });
});

function abrirGit() {
    window.open("https://github.com/PedroEustaq");
}
function abrirAcademico() {
    window.open("https://github.com/PedroEustaq/Projetos-Academicos-Geral");
}
function abrirIn() {
    window.open("https://www.linkedin.com/in/pedroeu/");
}
function abrirCert() {
    window.open("Certificados.pdf");
}
var psou = document.getElementById("pSou")
var btn = document.getElementById("chat")

const texto = "Pedro é um desenvolvedor júnior com foco em HTML5, CSS3, JavaScript e PHP. Busca se tornar um desenvolvedor sênior, criando soluções práticas que fazem a diferença no dia a dia de pessoas e empresas."; // O texto que será digitado
const elemento = document.getElementById("pSou");
let indice = 0;

async function resumir() {

    btn.style.animationName = 'escreverChat';
    psou.style.animationName = 'sumirR';  // Reseta a animação
    await esperar(1200); // Aguarda 2 segundos
    psou.innerHTML = ""
    digitar()
}
function mouseENT() {
    btn.style.animation = 'none';  // Reseta a animação
    void btn.offsetWidth;          // Trigger de reflow
    btn.style.animation = 'CYOanim 0.5s forwards';
    btn.style.animationFillMode = 'forwards';  // Aplica a animação reversa
}



function digitar() {
    if (indice < texto.length) {
        elemento.textContent += texto.charAt(indice);
        indice++;
        setTimeout(digitar, 50); // Velocidade da digitação em milissegundos
    }
}

function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function clickfront() {
    window.open("https://www.frontendmentor.io/profile/PedroEustaq")
}

// ===== THEME SWITCH FUNCTIONALITY =====

// Função para alternar entre modo claro e escuro
function toggleTheme() {
    const body = document.body;
    const themeSwitch = document.getElementById('theme-switch');
    
    // Alternar a classe light-mode no body
    body.classList.toggle('light-mode');
    
    // Salvar preferência no localStorage
    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
        console.log('Modo claro ativado');
    } else {
        localStorage.setItem('theme', 'dark');
        console.log('Modo escuro ativado');
    }
}

// Função para carregar tema salvo
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    const themeSwitch = document.getElementById('theme-switch');
    
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        themeSwitch.checked = true; // Switch ativo para modo claro
    } else {
        document.body.classList.remove('light-mode');
        themeSwitch.checked = false; // Switch inativo para modo escuro
    }
}

// Adicionar evento ao switch quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    // Carregar tema salvo
    loadTheme();
    
    // Adicionar evento de clique ao switch
    const themeSwitch = document.getElementById('theme-switch');
    if (themeSwitch) {
        themeSwitch.addEventListener('change', toggleTheme);
        console.log('Switch de tema carregado e configurado');
    } else {
        console.error('Elemento theme-switch não encontrado!');
    }
    
    // Teste: verificar se a classe está sendo aplicada
    setTimeout(() => {
        console.log('Classe do body:', document.body.className);
        console.log('Switch checked:', themeSwitch ? themeSwitch.checked : 'não encontrado');
    }, 100);
});

// Função adicional para detectar preferência do sistema
function detectSystemTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        // Se não houver preferência salva, usar preferência do sistema
        if (!localStorage.getItem('theme')) {
            document.body.classList.add('light-mode');
            document.getElementById('theme-switch').checked = false;
        }
    }
}

// Detectar preferência do sistema ao carregar
document.addEventListener('DOMContentLoaded', detectSystemTheme);

