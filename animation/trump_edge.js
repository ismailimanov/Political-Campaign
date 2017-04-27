/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'open-sans, sans-serif': '<script src=\"http://use.edgefonts.net/open-sans:n7,i7,n8,i8,i4,n3,i3,n4,n6,i6:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'bg',
                            type: 'image',
                            rect: ['0px', '0px', '300px', '300px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bg.jpg",'0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 1, 0, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['15px', '26px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\"><span style=\"font-family: open-sans, sans-serif; color: rgb(255, 255, 255); font-size: 30px; font-weight: 700;\">COLUMBUS, OHIO</span></p>",
                            font: ['open-sans, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "nowrap"],
                            textShadow: ["rgba(0,0,0,0.65098)", 0, 0, 3],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,1.00)", 1, 1, 0]
                        },
                        {
                            id: 'trump',
                            type: 'image',
                            rect: ['47px', '92px', '207px', '208px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"trump.png",'0px','0px']
                        },
                        {
                            id: 'RoundRect',
                            type: 'rect',
                            rect: ['69px', '240px', '162px', '41px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(0,198,63,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['95px', '248px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​READ MORE</p>",
                            align: "left",
                            font: ['open-sans, sans-serif', [19, "px"], "rgba(255,255,255,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '300px', '300px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 5000,
                    autoPlay: true,
                    data: [
                        [
                            "eid4",
                            "opacity",
                            0,
                            5000,
                            "linear",
                            "${trump}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid2",
                            "filter.grayscale",
                            0,
                            5000,
                            "linear",
                            "${bg}",
                            '1',
                            '0'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("trump_edgeActions.js");
})("EDGE-647549");
