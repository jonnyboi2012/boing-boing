function openGame(url) {
    const win = window.open("about:blank", "_blank");

    win.document.write(`
        <html>
        <head>
            <title>Game</title>
            <style>
                body {
                    margin: 0;
                    background: black;
                    overflow: hidden;
                }
                #topbar {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    background: rgba(20,20,20,0.85);
                    padding: 10px;
                    display: flex;
                    z-index: 9999;
                    backdrop-filter: blur(6px);
                }
                button {
                    background: #333;
                    border: none;
                    color: white;
                    padding: 8px 14px;
                    border-radius: 8px;
                    cursor: pointer;
                    font-size: 15px;
                }
                iframe {
                    position: absolute;
                    top: 50px;
                    left: 0;
                    width: 100%;
                    height: calc(100% - 50px);
                    border: none;
                }
            </style>
        </head>
        <body>
            <div id="topbar">
                <button onclick="window.close()">Close</button>
            </div>

            <iframe src="${url}"></iframe>
        </body>
        </html>
    `);
}
