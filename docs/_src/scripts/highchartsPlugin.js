const highChartConfigs = {
    overridesHistory: {
        "title": {
            "align": "left",
            "verticalAlign": "top",
            "text": "",
            "useHTML": true,
            "style": {
                "font-size": "17px"
            },
            "margin": 10
        },
        "series": [
            {
                "name": "Overrides",
                "type": "areaspline",
                "color": "#472FAE",
                "fillColor": {
                    "linearGradient": {
                        "x1": 0,
                        "x2": 0,
                        "y1": 0,
                        "y2": 1
                    },
                    "stops": [
                        [
                            0,
                            "#472FAE"
                        ],
                        [
                            0.5,
                            "#6A5DFF"
                        ],
                        [
                            1,
                            "#21DFB2"
                        ]
                    ]
                },
                "label": {
                    "enabled": false
                },
                "lineWidth": 0,
                "states": {
                    "hover": {
                        "lineWidth": 0
                    }
                },
                "marker": {
                    "enabled": false
                }
            }
        ]
    },
    ratio: {
        "title": {
            "align": "center",
            "verticalAlign": "middle",
            "text": "Användningsgrad",
            "useHTML": true,
            "style": {
                "font-size": "42px"
            },
            "y": 30
        },
        "plotOptions": {
            "pie": {
                "dataLabels": {
                    "enabled": false
                }
            }
        },
        "series": [
            {
                "name": "Antal",
                "type": "pie",
                "color": "#472FAE",
                "size": "100%",
                "innerSize": "86%",
                "label": {
                    "inside": true,
                    "enabled": true
                },
                "lineWidth": 0,
                "states": {
                    "hover": {
                        "lineWidth": 0
                    }
                },
                "marker": {
                    "enabled": false
                }
            }
        ]
    },
    usageCountAll: {
        "title": {
            "text": ""
        },
        "plotOptions": {
            "bar": {
                "borderRadius": 20,
                "dataLabels": {
                    "align": "left",
                    "enabled": true,
                    "format": "{point.name}, {point.y} st",
                    "color": "#222",
                    "inside": true,
                    "padding": 20,
                    "style": {
                        "fontSize": 13,
                        "fontWeight": 400
                    }
                }
            }
        },
        "series": [
            {
                "type": "bar",
                "color": "#E5F8F2",
                "label": {
                    "inside": true,
                    "enabled": true
                },
                "lineWidth": 0,
                "states": {
                    "hover": {
                        "enabled": false
                    }
                },
                "marker": {
                    "enabled": false
                }
            }
        ]
    },
    usageCountTop: {
        "title": {
            "text": ""
        },
        "plotOptions": {
            "bar": {
                "borderRadius": 20,
                "dataLabels": {
                    "align": "left",
                    "enabled": true,
                    "format": "{point.name}, {y} st",
                    "color": "#222",
                    "inside": true,
                    "padding": 20,
                    "style": {
                        "fontSize": 13,
                        "fontWeight": 400
                    }
                }
            }
        },
        "series": [
            {
                "type": "bar",
                "color": "#E5F8F2",
                "label": {
                    "inside": true,
                    "enabled": true
                },
                "lineWidth": 0,
                "states": {
                    "hover": {
                        "enabled": false
                    }
                },
                "marker": {
                    "enabled": false
                }
            }
        ]
    }
}

function highcharts(hook) {
    hook.doneEach(function() {
        const baseChartConfig = {
            title: {
                style: {
                    color: '#12cbb5',
                    fontSize: '28px',
                    fontWeight: 'bold',
                },
            },
            colors: ['#03FAA7', '#EC178A', '#8919F9'],
            time: {
                useUTC: false,
            },
            credits: {
                enabled: false,
            },
            legend: {
                enabled: false,
            },
            xAxis: {
                type: 'datetime',
                tickWidth: 0,
                lineWidth: 0,
                tickInterval: 1000 * 60 * 60 * 24,
                dateTimeLabelFormats: {
                    millisecond: '%H:%M:%S.%L',
                    second: '%H:%M:%S',
                    minute: '%H:%M',
                    hour: '%H:%M',
                    day: '%d/%m',
                    week: '%e %b',
                    month: '%b %y',
                    year: '%Y',
                },
                labels: {
                    style: {
                        fontSize: '14px',
                    },
                },
            },
            yAxis: {
                title: {
                    text: null,
                },
                gridLineWidth: 1,
                gridLineDashStyle: 'Dash',
                gridLineColor: '#dedede',
                labels: {
                    x: 5,
                    style: {
                        fontSize: '14px',
                    },
                },
                showEmpty: false,
                opposite: true,
            },
            chart: {
                style: {
                    fontFamily: 'Roboto, Arial, sans-serif',
                    color: '#222222',
                },
                spacing: [0, 0, 0, 0],
                marginTop: 0,
            },
            tooltip: {
                backgroundColor: '#fff',
                xDateFormat: '%Y-%m-%d %H:%M',
                hideDelay: 100,
                useHTML: true,
                shared: true,
                borderWidth: 0,
                shadow: true,
                outside: false,
                shape: 'square',
                style: {
                    fontSize: '12px',
                },
                headerFormat: '<span>{point.key}</span><br/>',
            },
            series: [],
        };

        document.querySelectorAll('.highcharts').forEach((highchartsContainer, i) => {
            highchartsContainer.id = `highchartsContainer-${i}`;

            const dataType = highchartsContainer.getAttribute('data-type');
            const chartConfig = _.merge(_.cloneDeep(baseChartConfig), highChartConfigs[dataType]);

            const dataUrl = highchartsContainer.getAttribute('data-url');

            fetch(dataUrl)
                .then((response) => response.json())
                .then((responseAsJson) => {
                    if (dataType === 'overridesHistory') {
                        chartConfig.series[0].data = responseAsJson;
                        chartConfig.chart.marginTop = 50;
                        if (chartConfig.series[0].type === 'areaspline') {
                            const minDataValue = Math.min(...chartConfig.series[0].data.map((p) => p.y));
                            const min = minDataValue - Math.floor(minDataValue * 0.05);
                            chartConfig.yAxis.min = min;
                        }

                        const lastRun = responseAsJson[responseAsJson.length - 1];
                        const created = formatMillis(lastRun.latestRun.created);
                        chartConfig.tooltip.pointFormat =
                            '{series.name}: <b>{point.y}</b><br/>PWA: <b>{point.latestRun.pwaHash}</b><br/>Script: <b>{point.latestRun.scriptHash}</b><br/>';
                        chartConfig.title.text += `${lastRun.y} <span class="muted"> (${created})</span>`;

                        chartConfig.tooltip.positioner = function(labelWidth, labelHeight, point) {
                            const labelWidthFix = point.plotX > labelWidth ? labelWidth : 0;
                            return { x: point.plotX - labelWidthFix, y: point.plotY + labelHeight + 20 };
                        };
                    } else if (dataType === 'ratio') {
                        chartConfig.title.text =
                            ((responseAsJson.ratioComplib + responseAsJson.ratioAssetslib) * 100)
                                .toFixed(1)
                                .toString()
                                .replace('.', ',') + '%';
                        chartConfig.series[0].data = [
                            {
                                name: 'Component library',
                                y: responseAsJson.complibSelectorCount,
                            },
                            {
                                name: 'Gaia',
                                y: responseAsJson.assetslibSelectorCount,
                            },
                            {
                                name: 'PWA',
                                y: responseAsJson.pwaSelectorCount,
                            },
                        ];

                        chartConfig.tooltip.pointFormat = '<b>{point.y}</b>';

                        chartConfig.tooltip.positioner = function(labelWidth, labelHeight, point) {
                            const titleAlignOptions = this.chart.title.alignOptions;
                            return {
                                x: this.chart.chartWidth / 2 - labelWidth / 2,
                                y: 100,
                            };
                        };
                        chartConfig.tooltip.shadow = false;
                        chartConfig.tooltip.style.textAlign = 'center';
                    } else if (dataType === 'usageCountTop') {

                        const concatResponses = [...responseAsJson.complibBySelector, ...responseAsJson.assetslibBySelector];

                        chartConfig.tooltip.enabled = false;
                        chartConfig.yAxis.labels.enabled = false;
                        chartConfig.xAxis.labels.enabled = false;

                        chartConfig.series[0].data = getSortedResultList(concatResponses).slice(0, 5).map((obj) => {
                            return { name: obj.selector, y: obj.count };
                        });

                    } else if (dataType === 'usageCountAll') {
                        const concatResponses = [...responseAsJson.complibBySelector, ...responseAsJson.assetslibBySelector];

                        chartConfig.tooltip.enabled = false;
                        chartConfig.yAxis.labels.enabled = false;
                        chartConfig.xAxis.labels.enabled = false;

                        chartConfig.series[0].data = getSortedResultList(concatResponses).map((obj) => {
                            return { name: obj.selector, y: obj.count };
                        });
                    }
                    Highcharts.chart(highchartsContainer.id, chartConfig);
                });
        });
    });
}
function getSortedResultList(resultMap) {
    return resultMap.sort((a, b) => b.count - a.count);
}

function formatMillis(millis) {
    const d = new Date(millis);
    return `${d.getDate()}/${d.getMonth() + 1} ${d.getFullYear()}`;
}
