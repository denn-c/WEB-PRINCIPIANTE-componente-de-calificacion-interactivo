# Componente de calificación interactivo

Esta es una solución al [desafío del componente de calificación interactivo en Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI).

## Tabla de contenido

- [Resumen](#resumen)
  - [El reto](#el-reto)
  - [Captura de pantalla](#captura-de-pantalla)
  - [Enlaces](#enlaces)
- [Mi proceso](#mi-proceso)
  - [Construido con](#construido-con)
  - [Que aprendí](#que-aprendí)
  - [Desarrollo continuo](#desarrollo-continuo)
  - [Recursos útiles](#recursos-útiles)
- [Autor](#autor)
- [Agradecimientos](#agradecimientos)


## Visión general

### El reto

Los usuarios deben ser capaces de:

- Ver el diseño óptimo según el tamaño de pantalla de su dispositivo
- Ver estados de desplazamiento para elementos interactivos

### Captura de pantalla

![Vista previa del diseño para el desafío de codificación del componente de calificación interactivo](asset/images/vista-previa-1.png)
![Vista previa del diseño para el desafío de codificación del componente de calificación interactivo](asset/images/vista-previa-2.png)



### Enlaces

- URL de la solución: [https://github.com/denn-c/WEP-PRINCIPIANTE-component-de-calificacion-interactivo](https://github.com/denn-c/WEP-PRINCIPIANTE-component-de-calificacion-interactivo)
- URL del sitio en vivo: [https://denn-c.github.io/WEP-PRINCIPIANTE-component-de-calificacion-interactivo/](https://denn-c.github.io/WEP-PRINCIPIANTE-component-de-calificacion-interactivo/)

## Mi proceso

### Construido con

- Marcado HTML5 semántico
- Propiedades personalizadas de CSS
- Caja flexible

### Que aprendí

Diseñar, crear y mantener sitios web, proporcionando en el proceso un portal online coherente y fácil de usar para los clientes, compañeros de trabajo y otras partes implicadas. Incorporan contenido, imágenes, gráficos, vídeos y otras utilidades para crear sitios atractivos con los que los usuarios querrán interactuar.  

Fragmentos de código con mayor relevancia en este proyecto.

**HTML**

```html
<div class="rating__scores">
        <input value="1" class="rating__radio" type="radio" name="score" id="uno">
        <label for="uno" class="rating__score">1</label>
        <input value="2" class="rating__radio" type="radio" name="score" id="dos">
        <label for="dos" class="rating__score">2</label>
        <input value="3" class="rating__radio" type="radio" name="score" id="tres">
        <label for="tres" class="rating__score">3</label>
        <input value="4" class="rating__radio" type="radio" name="score" id="cuatro">
        <label for="cuatro" class="rating__score">4</label>
        <input value="5" class="rating__radio" type="radio" name="score" id="cinco">
        <label for="cinco" class="rating__score">5</label>
      </div>
```
**CSS**
```css
.rating__score{
  margin-top: 1em;
  width: 3em;
  height: 3em;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--Medium-Grey);
  border-radius: 100%;
  color: var(--Light-Grey);
  cursor: pointer;
  transition: all .2s;
}
```
**JS**
```js
$button.addEventListener('click', e => {
    $radio.forEach(element => {
        if (element.checked) {
            $main.classList.add('main--active')
            $score.textContent = element.value
        } else {
            element.nextElementSibling.classList.add('rating__score--active')
            setTimeout(() => {
                element.nextElementSibling.classList.remove('rating__score--active')
            }, 500);
        }
    })
})
```
### Desarrollo continuo

- **Crear la codificación que da vida a un sitio web** y ayudar a que funcione según lo exigido por el host.  
- **Diseñar no solo el aspecto de un sitio web**, sino también su funcionamiento para el usuario final.  
- **Responsabilizarse de qué funciones se pueden realizar** cuando un usuario llega a la página web.  
- **Utilizar los últimos mecanismos y aplicaciones** para que el sitio funcione de la forma más fluida y eficiente posible.  
- **Probar sitios nuevos y existentes** y corregir posibles errores que puedan surgir.  

### Recursos útiles

- [Conceptos básicos de HTML](https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/HTML_basics) - Esto me ayudó en escoger las etiquetas necesarias para maquetado del HTML. Me gustó mucho este patrón y lo usaré en el futuro.
- [CSS básico](https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/CSS_basics)  Esto me ayudó en escoger las etiquetas necesarias para maquetado del CSS. Me gustó mucho este patrón y lo usaré en el futuro.

## Autor

- Facebook - [Dennys Chuyma](https://www.facebook.com/dennys.chuyma)
- Twitter - [denn](https://twitter.com/dennyschuyma)
- Mentor de frontend - [@denn-c](https://www.frontendmentor.io/profile/denn-c)

## Agradecimientos

Mis agradecimiento a los creadores de contenido de la comunidad de YouTube de indole educativo gracias a ellos fue posible la resolución de este desafió
