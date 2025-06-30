# 🎯 Juego del Alfabeto

Un juego web interactivo inspirado en el clásico "Stop" o "Tutti Frutti", donde debes pensar palabras que empiecen con cada letra del alfabeto según una temática aleatoria.

## 📝 Descripción del Juego

- **Objetivo**: Hacer clic en las letras del alfabeto mientras piensas en palabras que cumplan con la temática dada
- **Mecánica**: Cada vez que haces clic en una letra, el temporizador se reinicia y esa letra se deshabilita
- **Victoria**: Completa todas las 26 letras antes de que se acabe el tiempo
- **Game Over**: Si el temporizador llega a 0, las letras permanecen bloqueadas hasta que hagas RESET

## 🚀 Cómo Desplegar el Juego

### Prerrequisitos
- Python 3.x instalado en tu sistema
- Navegador web moderno (Chrome, Firefox, Safari, Edge)

### Opción 1: Ejecutar Localmente

1. **Descarga o clona los archivos**
   ```bash
   # Si tienes git instalado
   git clone [URL_DEL_REPOSITORIO]
   cd TestGame
   
   # O simplemente descarga los archivos y colócalos en una carpeta
   ```

2. **Navega al directorio del juego**
   ```bash
   cd TestGame
   ```

3. **Inicia el servidor HTTP local**
   ```bash
   python3 -m http.server 8000
   ```
   
   Si usas Python 2:
   ```bash
   python -m SimpleHTTPServer 8000
   ```

4. **Abre tu navegador**
   - Ve a: `http://localhost:8000`
   - ¡Ya puedes jugar! 🎮

### Opción 2: Acceder desde tu Celular (Misma Red WiFi)

1. **Ejecuta el servidor** (pasos 1-3 de arriba)

2. **Encuentra tu IP local**
   ```bash
   # En Mac/Linux
   ifconfig | grep "inet " | grep -v 127.0.0.1
   
   # En Windows
   ipconfig
   ```

3. **Conéctate desde tu celular**
   - Asegúrate de que tu celular esté en la **misma red WiFi**
   - Abre el navegador en tu celular
   - Ve a: `http://[TU_IP_LOCAL]:8000`
   - Ejemplo: `http://192.168.1.18:8000`

### Opción 3: Acceso desde Internet con Ngrok

Si quieres compartir el juego temporalmente con amigos:

1. **Instala ngrok**
   ```bash
   # En Mac con Homebrew
   brew install ngrok/ngrok/ngrok
   
   # En Windows/Linux - descarga desde: https://ngrok.com/download
   ```

2. **Ejecuta el servidor local** (pasos 1-3 de la Opción 1)

3. **En otra terminal, ejecuta ngrok**
   ```bash
   ngrok http 8000
   ```

4. **Copia la URL pública**
   - Ngrok te dará una URL como: `https://abc123.ngrok.io`
   - Esta URL funciona desde **cualquier lugar del mundo**
   - Compártela con amigos o úsala en cualquier dispositivo

5. **Para detener ngrok**
   - Presiona `Ctrl+C` en la terminal de ngrok

> **💡 Tip**: La URL de ngrok cambia cada vez que lo reinicias. Para URLs permanentes necesitas una cuenta ngrok gratuita.

### Opción 4: GitHub Pages (URL Permanente y Gratuita) ⭐

**La mejor opción para una URL fija y permanente:**

1. **Sube tu código a GitHub**
   ```bash
   # Inicializa git en tu proyecto
   git init
   git add .
   git commit -m "Juego del Alfabeto - versión inicial"
   
   # Crea un repositorio en GitHub.com y luego:
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
   git push -u origin main
   ```

2. **Activa GitHub Pages**
   - Ve a tu repositorio en GitHub.com
   - Haz clic en **Settings** (Configuración)
   - Baja hasta la sección **Pages**
   - En **Source**, selecciona **Deploy from a branch**
   - Selecciona **main** como branch y **/ (root)** como folder
   - Haz clic en **Save**

3. **¡Ya tienes tu URL permanente!**
   - GitHub te dará una URL como: `https://TU_USUARIO.github.io/TU_REPOSITORIO/`
   - El juego estará disponible **24/7** desde cualquier lugar
   - **Totalmente gratis** y sin limitaciones

4. **Actualizar el juego**
   ```bash
   # Cada vez que hagas cambios:
   git add .
   git commit -m "Descripción de los cambios"
   git push
   # Los cambios se reflejarán automáticamente en 1-2 minutos
   ```

> **🚀 Ventajas de GitHub Pages**: URL permanente, HTTPS automático, sin costo, fácil actualización, perfecto para compartir.

## 🎮 Cómo Jugar

### Controles
- **Tiempo**: Ajusta los segundos iniciales (1-999)
- **START**: Inicia el juego
- **RESET**: Reinicia todo (letras y temática)
- **🎲 Nueva**: Cambia la temática (solo cuando no estés jugando)

### Estrategia
1. Lee la temática cuidadosamente
2. Piensa rápido en palabras para cada letra
3. Haz clic en las letras conforme vayas pensando las palabras
4. El tiempo se reinicia con cada clic, ¡úsalo a tu favor!

### Ejemplos de Temáticas
- **"Nombres de personas"**: Ana, Bruno, Carmen, Diego...
- **"Objetos de la casa"**: Aspiradora, Báscula, Cama, Ducha...
- **"Frutas"**: Aguacate, Banana, Cereza, Durazno...

## 🛠️ Estructura del Proyecto

```
TestGame/
├── index.html      # Estructura principal del juego
├── style.css       # Estilos y diseño responsive
├── script.js       # Lógica del juego y temáticas
└── README.md       # Este archivo
```

## 🎨 Características

✅ **Responsive**: Se adapta a móviles, tablets y desktop  
✅ **200+ Temáticas**: Variedad de categorías accesibles  
✅ **Interfaz Moderna**: Diseño glassmorphism con gradientes  
✅ **Efectos Visuales**: Animaciones y feedback visual  
✅ **Sin Dependencias**: Solo HTML, CSS y JavaScript vanilla  
✅ **GitHub Pages Ready**: Listo para desplegar con URL permanente  

## 🔧 Personalización

### Agregar Nuevas Temáticas
Edita el archivo `script.js` y añade nuevas temáticas al array `this.themes`:

```javascript
this.themes = [
    // ... temáticas existentes
    "Tu nueva temática aquí",
    "Otra temática personalizada"
];
```

### Cambiar Colores
Modifica las variables CSS en `style.css`:

```css
/* Cambiar gradiente de fondo */
background: linear-gradient(135deg, #TU_COLOR_1 0%, #TU_COLOR_2 100%);

/* Cambiar colores de botones */
background: linear-gradient(45deg, #TU_COLOR_1, #TU_COLOR_2);
```

## 🐛 Solución de Problemas

### El servidor no inicia
- Verifica que Python esté instalado: `python3 --version`
- Prueba con `python` en lugar de `python3`
- Cambia el puerto si 8000 está ocupado: `python3 -m http.server 8001`

### No puedo acceder desde mi celular
- Verifica que ambos dispositivos estén en la misma red WiFi
- Desactiva temporalmente el firewall de tu computadora
- Prueba con la IP específica en lugar de localhost

### Problemas con Ngrok
- Si ngrok no funciona, verifica que el servidor local esté corriendo primero
- La URL de ngrok expira después de unas horas en la versión gratuita
- Si la conexión es lenta, es normal con la versión gratuita de ngrok
- Para mejores velocidades, considera crear una cuenta gratuita en ngrok.com

### Problemas con GitHub Pages
- Los cambios pueden tardar 1-10 minutos en reflejarse
- Si el sitio no carga, verifica que el archivo se llame exactamente `index.html`
- La URL será: `https://TU_USUARIO.github.io/NOMBRE_DEL_REPOSITORIO/`
- Si obtienes error 404, espera unos minutos y revisa la configuración en Settings > Pages

### El juego se ve mal en móvil
- Usa un navegador moderno (Chrome, Safari)
- Verifica que JavaScript esté habilitado
- Intenta rotar la pantalla para refrescar el layout

## 🎯 Tips de Desarrollo

Si quieres modificar el juego:

1. **Debugging**: Abre las herramientas de desarrollador (F12)
2. **Tiempo de prueba**: Usa tiempos cortos (2-3 segundos) para probar rápido
3. **Reset frecuente**: Usa RESET para probar diferentes temáticas
4. **Mobile First**: Siempre prueba en móvil después de cambios en CSS

## 📱 Compatibilidad

- ✅ Chrome 70+
- ✅ Firefox 65+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ iOS Safari 12+
- ✅ Chrome Mobile 70+

## 🆘 Soporte

Si tienes problemas:

1. Verifica la consola del navegador (F12 → Console)
2. Asegúrate de que todos los archivos estén en el mismo directorio
3. Intenta con un navegador diferente
4. Reinicia el servidor con `Ctrl+C` y vuelve a ejecutar el comando

---

¡Disfruta jugando y desafiando tu vocabulario! 🎮✨ 