import "./Jobs.css"
const foodExpress = require("../../utils/FoodExpres.jpg")
const dogs = require("../../utils/PiDogs.png")
const nutri = require("../../utils/nutrilife.png")
const Jobs = () => {
    return(
        <><h2 style={{textAlign: 'center', color: 'white', marginTop: '100px'}}>Mira mis proyectos!</h2>
        <div id="trabajos" className="jobs">
            <div className="eje1">
                <div class="cardjobs">
                    <div class="content">
                        <p class="heading">PI - Dogs</p>
                        <img className="imagenes" src={dogs} alt="piDogs"></img>
                        <p class="para">
                            Proyecto individual de Henry: una SPA, en la cual se utiliza la api de theDogApi. Trabaje tanto en el front como en el back utilizando las tencologias mencionadas, tiene filtro, ordenamiento y la posibilidad de crear tu propio perro

                        </p>
                        <button class="btn"> <a href="https://github.com/Axel3890/PI-Dogss" target="blank">Ver repositorio</a></button>
                    </div>
                </div>
            </div>

            <div className="eje1">
                <div class="cardjobs">
                    <div class="content">
                        <p class="heading">Food Expres </p>
                        <img className="imagenes" src={foodExpress} alt="FoodExpress"></img>
                        <p class="para">
                        Creamos una experiencia de compra online desde cero por parte del usuario. Desarrollamos una página web utilizando tecnologías como React, Redux, JavaScript, Bootstrap y gestionamos la base de datos con PostgreSQL y Sequelize. 🌐

                        </p>
                        <div className="buttons">
                        <button class="btn"><a href="https://github.com/borkoloco/FoodExpress-Back" target="blank">Ver Repositorio</a></button>
                        <button class="btn"><a href="https://foodexpress-alpha.vercel.app/" target="blank">Ver pagina</a></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="eje1">
                <div class="cardjobs">
                    <div class="content">
                        <p class="heading">Nutri Life </p>
                        <img className="imagenes" src={nutri} alt="Nutri Life"></img>
                        <p class="para">
                        Página web de recetas. Es una herramienta completa diseñada para simplificar tu vida. descubre platos deliciosos que se ajusten perfectamente a tus necesidades calóricas diarias.
                        Frontend y Backend: React, HTML, CSS, Node.js, Express, Sequelize, PostgreSQL, y Firebase
                        </p>
                        <div className="buttons">
                        <button class="btn"><a href="https://github.com/Axel3890/nutrilife-front" target="blank">Repositorio Front</a></button>
                        <button class="btn"><a href="hhttps://github.com/Axel3890/nutri-life-back" target="blank">Repositorio back</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div></>
    )
}


export default Jobs;