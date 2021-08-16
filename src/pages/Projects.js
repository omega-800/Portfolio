import React from 'react';
import ImageBox from '../components/ImageBox';
import './Projects.css';

function Projects(){
    return(
        <div className="projects">
            <div className="projects_about section">
                <h2>Lorem Ipsum</h2>
            </div>
            <div className="projects_react section">
                <h2>React</h2>
                <ImageBox
                    title="Shirt Shop"
                    image=""
                />
                <ImageBox
                    title="SchoolStuff"
                    image=""
                />
            </div>
            <div className="projects_html section">
                <h2>HTML</h2>
                <ImageBox
                    title="Immobilien"
                    image="content/projekte/html_dad.png"
                />
                <ImageBox
                    title="Jukebox"
                    image="content/projekte/html_jukebox.png"
                />
                <ImageBox
                    title="RusFrauenTreff"
                    image="content/projekte/html_rus.png"
                />
                <ImageBox
                    title="Drugpedia"
                    image="content/projekte/html_drugpedia.png"
                />
                <ImageBox
                    title="Avocado"
                    image="content/projekte/html_avocado.png"
                />
                <ImageBox
                    title="Vallora"
                    image="content/projekte/html_vallora.png"
                />
            </div>
            <div className="projects_glassfish section">
                <h2>Glassfish</h2>
                <ImageBox
                    title="Books"
                    image="content/projekte/glassfish_books.png"
                />
                <ImageBox
                    title="Books2"
                    image="content/projekte/glassfish_books2.png"
                />
                <ImageBox
                    title="Books3"
                    image="content/projekte/glassfish_books3.png"
                />
            </div>
            <div className="projects_php section">
                <h2>PHP</h2>
                <ImageBox
                    title="Curriculum Vitae 1.0"
                    image=""
                />
                <ImageBox
                    title="Karten"
                    image="content/projekte/php_karten.png"
                />
                <ImageBox
                    title="Galerie"
                    image="content/projekte/php_galerie.png"
                />
                <ImageBox
                    title="Formulare"
                    image="content/projekte/php_formulare.png"
                />
                <ImageBox
                    title="Formulare2"
                    image="content/projekte/php_formulare2.png"
                />
            </div>
            <div className="projects_python section">
                <h2>Python</h2>
                <ImageBox
                    title="Automation"
                    image=""
                />
            </div>
            <div className="projects_cs section">
                <h2>CSharp</h2>
                <ImageBox
                    title="Rogue Dungeon"
                    image="content/projekte/cSharp_dungeon.png"
                />
                <ImageBox
                    title="Rocket"
                    image="content/projekte/cSharp_rocket.png"
                />
            </div>
            <div className="projects_java section">
                <h2>Java</h2>
                <ImageBox
                    title="UNO"
                    image="content/projekte/java_uno.png"
                />
                <ImageBox
                    title="Klassen"
                    image="content/projekte/java_klassen.png"
                />
                <ImageBox
                    title="Klassen2"
                    image="content/projekte/java_klassen2.png"
                />
                <ImageBox
                    title="Swing"
                    image="content/projekte/java_swing.png"
                />
                <ImageBox
                    title="Sort"
                    image="content/projekte/java_sort.png"
                />
                <ImageBox
                    title="Converter"
                    image="content/projekte/java_konverter.png"
                />
            </div>
        </div>
    )
}

export default Projects