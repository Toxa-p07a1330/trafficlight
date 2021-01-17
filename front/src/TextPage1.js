import Switches from "./Switches";
import React from "react";
import Content from "./Content";
import Menu from "./Menu";
function TextPage1() {
    let style = {
        width: "100%",
        align: "center",
        height: "100vh"
    }
    return (
        <div style={style}>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>

            <div id="my_pdf_viewer">
                <div id="canvas_container">
                    <canvas id="pdf_renderer"></canvas>
                    <div id="navigation_controls">
                        <button id="go_previous">Previous</button>
                        <input id="current_page" value="1" type="number"/>
                        <button id="go_next">Next</button>
                    </div>
                    <div id="zoom_controls">
                        <button id="zoom_in">+</button>
                        <button id="zoom_out">-</button>
                    </div>
                    <script src="//cdnjs.cloudflare.com//ajax//libs//pdf.js//2.0.943//pdf.min.js"/>

                </div>
            </div>
        </div>
    );
}

export default TextPage1
