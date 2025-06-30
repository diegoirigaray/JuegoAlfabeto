class AlphabetGame {
    constructor() {
        this.letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        this.usedLetters = new Set();
        this.gameActive = false;
        this.timer = null;
        this.currentTime = 0;
        this.initialTime = 10;
        this.currentTheme = '';
        
        // Base de datos de temáticas
        this.themes = [
            // Lugares y espacios
            "Cosas que se encuentran en una casa",
            "Cosas que se encuentran en una cocina",
            "Cosas que se encuentran en un dormitorio",
            "Cosas que se encuentran en una escuela",
            "Cosas que se encuentran en un supermercado",
            "Cosas que se encuentran en una oficina",
            "Cosas que se encuentran en un parque",
            "Cosas que se encuentran en una playa",
            "Cosas que se encuentran en un hospital",
            "Cosas que se encuentran en un restaurante",
            "Cosas que se encuentran en una tienda",
            "Cosas que se encuentran en un gimnasio",
            "Cosas que se encuentran en una biblioteca",
            "Cosas que se encuentran en un jardín",
            "Cosas que se encuentran en la calle",
            "Cosas que se encuentran en un baño",
            "Cosas que se encuentran en una farmacia",
            "Cosas que se encuentran en un cine",
            "Cosas que se encuentran en una peluquería",
            "Cosas que se ven en la ciudad",

            // Animales (más generales)
            "Animales domésticos",
            "Animales salvajes",
            "Animales que vuelan",
            "Animales que nadan",
            "Animales que viven en la granja",
            "Animales que son mascotas",
            "Insectos",
            "Pájaros",
            "Peces",
            "Mamíferos",
            "Animales grandes",
            "Animales pequeños",
            "Animales que dan miedo",
            "Animales que son tiernos",
            "Animales que hacen ruido",

            // Comida y bebidas (más accesibles)
            "Frutas",
            "Verduras",
            "Carnes",
            "Postres",
            "Bebidas",
            "Comidas que se comen en el desayuno",
            "Comidas que se comen calientes",
            "Comidas que se comen frías",
            "Snacks y botanas",
            "Comidas dulces",
            "Comidas saladas",
            "Comidas que se hornean",
            "Comidas que se fríen",
            "Comidas que llevan queso",
            "Comidas rápidas",
            "Comidas saludables",
            "Condimentos y especias",
            "Comidas típicas mexicanas",
            "Comidas que se preparan fácil",
            "Alimentos rojos",

            // Objetos cotidianos
            "Objetos de la casa",
            "Herramientas",
            "Objetos que se usan para cocinar",
            "Objetos que se usan para limpiar",
            "Objetos que se usan para escribir",
            "Objetos que funcionan con electricidad",
            "Objetos que son redondos",
            "Objetos que se pueden romper",
            "Objetos de vidrio",
            "Objetos de madera",
            "Objetos de metal",
            "Objetos de plástico",
            "Objetos que cortan",
            "Objetos que iluminan",
            "Objetos grandes",
            "Objetos pequeños",
            "Objetos caros",
            "Objetos baratos",
            "Objetos antiguos",
            "Objetos modernos",

            // Ropa y accesorios
            "Ropa de vestir",
            "Ropa de invierno",
            "Ropa de verano",
            "Zapatos",
            "Accesorios",
            "Ropa interior",
            "Ropa deportiva",
            "Ropa de trabajo",
            "Joyas",
            "Sombreros y gorras",

            // Deportes y actividades
            "Deportes",
            "Deportes con pelota",
            "Deportes de agua",
            "Deportes de invierno",
            "Ejercicios",
            "Juegos",
            "Pasatiempos",
            "Actividades de tiempo libre",
            "Actividades al aire libre",
            "Actividades en casa",

            // Profesiones (más comunes)
            "Profesiones",
            "Trabajos",
            "Profesiones que ayudan",
            "Profesiones que requieren uniforme",
            "Profesiones artísticas",
            "Profesiones de la salud",
            "Profesiones de la educación",
            "Profesiones técnicas",
            "Profesiones de servicio",
            "Profesiones peligrosas",

            // Características y propiedades
            "Cosas que hacen ruido",
            "Cosas que brillan",
            "Cosas que huelen bien",
            "Cosas que huelen mal",
            "Cosas que son suaves",
            "Cosas que son duras",
            "Cosas que son frías",
            "Cosas que son calientes",
            "Cosas que dan miedo",
            "Cosas que dan alegría",
            "Cosas que son pesadas",
            "Cosas que son livianas",
            "Cosas que son rápidas",
            "Cosas que son lentas",
            "Cosas que son largas",
            "Cosas que son cortas",

            // Palabras y conceptos
            "Nombres de personas",
            "Nombres de mujer",
            "Nombres de hombre",
            "Apellidos",
            "Colores",
            "Números",
            "Adjetivos",
            "Verbos (acciones)",
            "Emociones",
            "Partes del cuerpo",
            "Palabras que riman con 'amor'",
            "Palabras largas",
            "Palabras cortas",

            // Entretenimiento
            "Películas",
            "Programas de TV",
            "Canciones",
            "Artistas famosos",
            "Personajes de caricaturas",
            "Superhéroes",
            "Instrumentos musicales",
            "Géneros musicales",
            "Bailes",
            "Festivales",

            // Transporte y vehículos
            "Vehículos",
            "Medios de transporte",
            "Partes de un carro",
            "Marcas de carros",
            "Cosas que tienen ruedas",
            "Cosas que vuelan",
            "Cosas que navegan",

            // Naturaleza y clima
            "Fenómenos naturales",
            "Estados del clima",
            "Cosas de la naturaleza",
            "Plantas",
            "Flores",
            "Árboles",
            "Minerales",
            "Materiales naturales",

            // Lugares del mundo
            "Países",
            "Ciudades",
            "Estados de México",
            "Lugares turísticos",
            "Lugares famosos",

            // Tecnología y modernidad
            "Aparatos electrónicos",
            "Aplicaciones de celular",
            "Redes sociales",
            "Videojuegos",
            "Dispositivos móviles",
            "Inventos útiles",
            "Máquinas",

            // Situaciones y eventos
            "Cosas que pasan en una fiesta",
            "Cosas que se hacen en vacaciones",
            "Cosas que se regalan",
            "Cosas que se coleccionan",
            "Cosas que se pierden fácilmente",
            "Cosas que se rompen fácilmente",
            "Cosas que duran mucho",
            "Cosas que se usan una vez",
            "Cosas que se comparten",
            "Cosas que se aprenden",

            // Conceptos abstractos (más fáciles)
            "Cualidades positivas",
            "Defectos",
            "Virtudes",
            "Miedos comunes",
            "Cosas que nos hacen felices",
            "Cosas que nos ponen tristes",
            "Cosas importantes en la vida",
            "Cosas que nos dan energía",
            "Cosas que nos relajan",
            "Cosas que recordamos de la infancia"
        ];
        
        this.initializeElements();
        this.createLetterCircle();
        this.bindEvents();
        this.selectRandomTheme();
        this.setupResizeHandler();
    }
    
    initializeElements() {
        this.timerDisplay = document.getElementById('timer');
        this.timeInput = document.getElementById('timeInput');
        this.startBtn = document.getElementById('startBtn');
        this.resetBtn = document.getElementById('resetBtn');
        this.lettersCircle = document.getElementById('lettersCircle');
        this.themeText = document.getElementById('themeText');
        this.newThemeBtn = document.getElementById('newThemeBtn');
    }
    
    selectRandomTheme() {
        const randomIndex = Math.floor(Math.random() * this.themes.length);
        this.currentTheme = this.themes[randomIndex];
        this.updateThemeDisplay();
    }
    
    updateThemeDisplay() {
        if (this.themeText) {
            this.themeText.textContent = this.currentTheme;
        }
    }
    
    generateNewTheme() {
        if (this.gameActive) {
            return; // No permitir cambios durante el juego
        }
        
        // Evitar que salga la misma temática
        let newTheme;
        do {
            const randomIndex = Math.floor(Math.random() * this.themes.length);
            newTheme = this.themes[randomIndex];
        } while (newTheme === this.currentTheme && this.themes.length > 1);
        
        this.currentTheme = newTheme;
        this.updateThemeDisplay();
    }
    
    setupResizeHandler() {
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                this.repositionLetters();
            }, 250);
        });
        
        // También manejar cambios de orientación en móviles
        window.addEventListener('orientationchange', () => {
            setTimeout(() => {
                this.repositionLetters();
            }, 100);
        });
    }
    
    repositionLetters() {
        // Limpiar letras existentes
        this.lettersCircle.innerHTML = '';
        
        // Recrear círculo con nuevas dimensiones
        this.createLetterCircle();
        
        // Restaurar estado de letras usadas
        this.usedLetters.forEach(letter => {
            const letterBtn = document.querySelector(`[data-letter="${letter}"]`);
            if (letterBtn) {
                letterBtn.classList.add('disabled');
            }
        });
    }
    
    createLetterCircle() {
        // Calcular dimensiones dinámicamente basado en el contenedor
        const container = this.lettersCircle.parentElement;
        const containerSize = Math.min(container.offsetWidth, container.offsetHeight);
        const centerX = containerSize / 2;
        const centerY = containerSize / 2;
        const radius = containerSize * 0.38; // 38% del tamaño del contenedor para más espacio
        
        this.letters.forEach((letter, index) => {
            const angle = (index * 360 / this.letters.length) * (Math.PI / 180);
            const x = centerX + radius * Math.cos(angle - Math.PI / 2);
            const y = centerY + radius * Math.sin(angle - Math.PI / 2);
            
            const letterBtn = document.createElement('button');
            letterBtn.className = 'letter-btn';
            letterBtn.textContent = letter;
            
            // Ajustar posición basado en el tamaño del botón
            const btnSize = Math.max(35, containerSize * 0.1); // Mínimo 35px, máximo 10% del contenedor
            letterBtn.style.left = `${x - btnSize/2}px`;
            letterBtn.style.top = `${y - btnSize/2}px`;
            letterBtn.dataset.letter = letter;
            
            letterBtn.addEventListener('click', () => this.handleLetterClick(letter));
            
            this.lettersCircle.appendChild(letterBtn);
        });
    }
    
    bindEvents() {
        this.startBtn.addEventListener('click', () => this.startGame());
        this.resetBtn.addEventListener('click', () => this.resetGame());
        this.timeInput.addEventListener('change', () => this.updateInitialTime());
        this.newThemeBtn.addEventListener('click', () => this.generateNewTheme());
    }
    
    updateInitialTime() {
        const value = parseInt(this.timeInput.value);
        if (value >= 1 && value <= 999) {
            this.initialTime = value;
            if (!this.gameActive) {
                this.currentTime = this.initialTime;
                this.updateTimerDisplay();
            }
        }
    }
    
    startGame() {
        if (this.gameActive) return;
        
        this.gameActive = true;
        this.currentTime = this.initialTime;
        this.startBtn.disabled = true;
        this.newThemeBtn.disabled = true;
        
        this.startTimer();
        this.updateTimerDisplay();
    }
    
    startTimer() {
        this.timer = setInterval(() => {
            this.currentTime--;
            this.updateTimerDisplay();
            
            if (this.currentTime <= 0) {
                this.gameOver();
            }
        }, 1000);
    }
    
    stopTimer() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }
    
    updateTimerDisplay() {
        this.timerDisplay.textContent = this.currentTime.toString().padStart(2, '0');
        
        // Agregar clase de advertencia cuando quedan 5 segundos o menos
        if (this.currentTime <= 5 && this.currentTime > 0) {
            this.timerDisplay.classList.add('warning');
        } else {
            this.timerDisplay.classList.remove('warning');
        }
    }
    
    handleLetterClick(letter) {
        if (!this.gameActive || this.usedLetters.has(letter)) return;
        
        // Marcar letra como usada
        this.usedLetters.add(letter);
        
        // Deshabilitar visualmente el botón
        const letterBtn = document.querySelector(`[data-letter="${letter}"]`);
        letterBtn.classList.add('disabled');
        
        // Reiniciar el temporizador
        this.currentTime = this.initialTime;
        this.updateTimerDisplay();
        
        // Verificar si se han usado todas las letras
        if (this.usedLetters.size === this.letters.length) {
            this.gameWin();
        }
    }
    
    gameOver() {
        this.gameActive = false;
        this.stopTimer();
        this.startBtn.disabled = false;
        this.newThemeBtn.disabled = false;
        
        // Efecto de parpadeo
        document.body.classList.add('flash-game-over');
        setTimeout(() => {
            document.body.classList.remove('flash-game-over');
        }, 1000);
        
        // NO rehabilitar las letras automáticamente - solo con RESET
    }
    
    gameWin() {
        this.gameActive = false;
        this.stopTimer();
        this.startBtn.disabled = false;
        this.newThemeBtn.disabled = false;
        
        // Efecto de celebración
        this.celebrateWin();
    }
    
    celebrateWin() {
        // Cambiar temporalmente el color de fondo para celebrar
        document.body.style.background = 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)';
        setTimeout(() => {
            document.body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        }, 2000);
    }
    
    resetGame() {
        this.gameActive = false;
        this.stopTimer();
        this.startBtn.disabled = false;
        this.newThemeBtn.disabled = false;
        this.currentTime = this.initialTime;
        this.updateTimerDisplay();
        this.timerDisplay.classList.remove('warning');
        
        this.resetLetters();
        this.selectRandomTheme(); // Nueva temática cada vez que se resetea
    }
    
    resetLetters() {
        this.usedLetters.clear();
        const letterBtns = document.querySelectorAll('.letter-btn');
        letterBtns.forEach(btn => {
            btn.classList.remove('disabled');
        });
    }
}

// Inicializar el juego cuando la página se carga
document.addEventListener('DOMContentLoaded', () => {
    new AlphabetGame();
});

// Agregar algunos efectos de sonido simulados (opcional)
function playSound(type) {
    // Aquí podrías agregar efectos de sonido reales si quisieras
    console.log(`Playing ${type} sound`);
} 