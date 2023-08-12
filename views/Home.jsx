const React = require("react");
const Def = require("./Default");

function Home() {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="https://images.unsplash.com/photo-1531988042231-d39a9cc12a9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" alt="books stacked on top of each other" />
                    <div>
                        Photo by <a href="https://unsplash.com/@florenciaviadana">Florencia Viadana</a> on <a href="https://unsplash.com">Unsplash</a>
                    </div>
                </div>
            </main>
        </Def>
    );
}

module.exports = Home;