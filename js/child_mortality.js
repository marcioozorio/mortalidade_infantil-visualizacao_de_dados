      var playAnimation = true;
      var countryIndex = 0;
      var continentSelected = '';


      /** Function to select a single country data */
      function onchangeselect() {
        countryIndex = this.selectedIndex;

        if (this.selectedIndex != 0) {
          graphCountry(continentSelected, this[this.selectedIndex].value);
        } else {
          graphCountry(continentSelected, null);
        }
      }



      /** 
       * Function for creating the CONTINENT chart
       */       
      function graphContinent() {

        continentSelected = '';
        countryIndex = 0;

        d3.selectAll("h1#title")._groups[0][0].textContent = "Child Mortality - Rate of deaths by Continent";

        d3.select("svg").remove();
        d3.select("svg2").remove();
        d3.select("foreignObject").remove();

        d3.selectAll("div#resume").style("display", "block");

        var svg = dimple.newSvg("#chartContainer", 1000, 600);

        d3.csv("/data/MORT_200_final.csv", function(data) {
          var series,
            // Set a background and foreground chart
            charts = [
              new dimple.chart(svg, null),
              new dimple.chart(svg, data)
            ],
            lastDate = null,
            owners = dimple.getUniqueValues(data, "Continent");

          // Define 2 nearly identical charts.  It's essential
          // for this that the max and minimum values are fixed
          // and unmoving otherwise the background chart will get
          // out of sync with the foreground the background chart's
          // axes are hidden and it's colors are faded.  Both have
          // their borders set to white, which looks better on this chart
          charts.forEach(function(chart, i) {
            var x, y, z;
            x = chart.addMeasureAxis("x", "Year");

            //Change year format 
            x.tickFormat = '#';
            x.ticks = 16;

            x.addOrderRule("Year");
            x.overrideMin = 2000;
            x.overrideMax = 2017;

            x.hidden = (i === 0);
            y = chart.addMeasureAxis("y", "Deaths per 1000");
            debugger;
            y.tickFormat = ".1f";
            y.overrideMax = 16;
            y.ticks = 10;
            y.title = "Deaths per 1000 live births (0-27 days)";

            y.hidden = (i === 0);
            z = chart.addMeasureAxis("z", "Deaths per 1000");
            z.overrideMax = 16;
            z.tickFormat = ".1f";
            z.title = "Deaths per 1000 live births (0-27 days)";

            // Ensure the same colors for every owner in both charts
            // differing by opacity
            owners.forEach(function(owner, k) {
              chart.assignColor(
                owner,
                charts[0].defaultColors[k].fill,
                "gray", (i === 0 ? 0.3 : 1));
            }, this);
          }, this);



          // Define a storyboard on the main chart, this will iterate
          // all dates and redraw for each, the callback will build the
          // the background chart
          charts[1].setStoryboard("Year", function(d) {

            this.frameDuration = 1500;
            d3.selectAll(".dimple-storyboard-label").style("font-size", "13px");
            d3.selectAll(".dimple-storyboard-label").style("font-weight", "bold");
            d3.selectAll(".dimple-custom-axis-title").style("font-weight", "bold");

            // Use the last date variable to manage the previous tick's data
            if (lastDate !== null) {
              // Pull the previous data
              var lastData = dimple.filterData(data, "Year", lastDate);
              // Add a series to the background chart to display old position
              var lastSeries = charts[0].addSeries(["Continent"], dimple.plot.bubble);

              // Average suits these measures better
              lastSeries.aggregate = dimple.aggregateMethod.avg;

              // Give each series its own data at different periods
              lastSeries.data = lastData;

              lastSeries.x.fontSize = "12px";
              lastSeries.y.fontSize = "12px";



              lastSeries.addEventHandler("click", function(e) {
                continentSelected = e.seriesValue[0];
                graphCountry(e.seriesValue[0]);
              });

              lastSeries.addEventHandler("mouseout", function(e) {


                if (playAnimation) {
                  charts[1].storyboard.startAnimation();
                }
              });



              // Draw the background chart
              charts[0].draw();


              // Add mouseover event to show informations ans pause animation (Graph background)
              lastSeries.shapes.on("mouseover", function(e) {

                // Identifying the country
                var vcountry;

                if (this.id.search("africa") != -1) {
                  vcountry = "africa";
                } else if (this.id.search("asia") != -1) {
                  vcountry = "asia";
                } else if (this.id.search("oceania") != -1) {
                  vcountry = "oceania";
                } else if (this.id.search("south-america") != -1) {
                  vcountry = "south-america-";
                } else if (this.id.search("north-america") != -1) {
                  vcountry = "north-america";
                } else if (this.id.search("europe") != -1) {
                  vcountry = "europe";
                }

                // Disable tootip when the legend is hidden
                if (this.classList.contains("dimple-" + vcountry) == true) {
                  if (d3.selectAll("rect.dimple-" + vcountry).style("opacity") == 1) {
                    dimple._showPointTooltip(e, this, charts[0], series);
                  }
                } else {
                  dimple._showPointTooltip(e, this, charts[0], series);
                }

                charts[1].storyboard.pauseAnimation();
              });


              // Reduce all opacity and remove once opacity drops below 5%
              d3.selectAll(".historic")
                .each(function() {
                  var shape = d3.select(this),
                    opacity = shape.style("opacity") - 0.02;

                  shape.style("opacity", opacity);
                });
            }
            lastDate = d;


            if (d == 2017) {
              playAnimation = false;
              charts[1].storyboard.stopAnimation();
            } else {
              playAnimation = true;
            }
          });


          // Add the primary series to the main chart
          series = charts[1].addSeries(["Continent"], dimple.plot.bubble);

          series.aggregate = dimple.aggregateMethod.avg;

          // Add legend (heigth, y, width, x)
          myLegend = charts[1].addLegend(140, 20, 460, 20, "right");


          // Add click event to open Coutry Graphic
          series.addEventHandler("click", function(e) {
            continentSelected = e.seriesValue[0];

            graphCountry(e.seriesValue[0]);

            console.log(e.seriesValue);
          });


          series.x.fontSize = "12px";
          series.y.fontSize = "12px";


          // Add mouseout event to continue animation
          series.addEventHandler("mouseout", function(e) {

            if (playAnimation) {
              charts[1].storyboard.startAnimation();
            }

            // The information legend box is not hidden after showed. 
            // hide manually:
            svg.select(".dimple-tooltip").remove();
            svg.select(".dimple-custom-tooltip-box").remove();
            svg.select(".dimple-custom-tooltip-label").remove();
            svg.select(".dimple-line-marker-circle").remove();
            svg.select(".dimple-custom-line-marker-circle").remove();
            svg.select(".dimple-tooltip-dropline").remove();
            svg.selectAll(".dimple-custom-tooltip-dropline").remove();
            svg.selectAll(".dimple-custom-tooltip-label").remove();
            // the command above not work so good:
            for (var i = 0; i < svg.selectAll(".dimple-custom-tooltip-dropline").length; ++i) {
              svg.selectAll(".dimple-custom-tooltip-dropline")[0].remove();
            }
            svg.selectAll(".dimple-hover-text").remove();

          });


          svg.append("text")
            .attr("x", 875)
            .attr("y", function(d, i) {
              return (charts[1]._yPixels() + 20 + i * 25) - 30;
            })
            //desired font style                    
            .style("text-anchor", "end")
            //desired font-size
            .style("font-size", "13px")
            .style("font-family", "sans-serif")
            //desired font-color    
            .style("fill", "black")
            .style("pointer-events", "none")
            .text("Click on the continent bubble to see country data"); //the text to be displayed, taken from .data()           



          // Draw the main chart
          charts[1].draw();


          series.shapes.on("mouseover", function(e) {
            // Identifying the country
            var vcountry;

            if (this.id.search("africa") != -1) {
              vcountry = "africa";
            } else if (this.id.search("asia") != -1) {
              vcountry = "asia";
            } else if (this.id.search("oceania") != -1) {
              vcountry = "oceania";
            } else if (this.id.search("south-america") != -1) {
              vcountry = "south-america-";
            } else if (this.id.search("north-america") != -1) {
              vcountry = "north-america";
            } else if (this.id.search("europe") != -1) {
              vcountry = "europe";
            }

            // Disable tootip when the legend is hidden
            if (this.classList.contains("dimple-" + vcountry) == true) {
              if (d3.selectAll("rect.dimple-" + vcountry).style("opacity") == 1) {
                dimple._showPointTooltip(e, this, charts[0], series);
              }
            } else {
              dimple._showPointTooltip(e, this, charts[0], series);
            }

            //dimple._showPointTooltip(e, this, charts[1], series);
            charts[1].storyboard.pauseAnimation();
          });

          // Add some border weight to the main series so it separates a bit from
          // the former period shadows
          d3.selectAll("circle").style("stroke-width", 1);




          charts[1].legends = [];

          svg.selectAll("title_text")
            .data(["Click on the legend box to show/hide continents:"])
            .enter()
            .append("text")
            .attr("id", "legend_text")
            .attr("x", myLegend.x + 95)
            .attr("y", myLegend.y - 12)
            .style("font-family", "sans-serif")
            .style("font-size", "10px")
            .style("color", "Black")
            .text(function(d) {
              return d;
            });


          // Get a unique list of Owner values to use when filtering
          var filterValues = dimple.getUniqueValues(data, "Continent");
          // Get all the rectangles from our now orphaned legend
          myLegend.shapes.selectAll("rect")
            // Add a click event to each rectangle
            .on("click", function(e) {

              if (playAnimation == false) {

                var vdimple = 'circle.' + this.classList[2];

                if (d3.selectAll(vdimple).style("display") != "none") {
                  d3.select(this).style("opacity", 0.2);

                  d3.selectAll(vdimple)
                    .transition()
                    .duration(800)
                    .style("display", "none");
                } else {
                  d3.selectAll(vdimple)
                    .transition()
                    .duration(800)
                    .style("display", "inline");

                  d3.select(this).style("opacity", 1);
                }
              } else {
                alert("Wait for the animation to finish to filter the continent");
              }

            });

        });

        d3.selectAll("div#footer").style("display", "block");      
      }





      /** 
       * Function for creating the COUNTRY chart
       * @param {string} vcontinent - The name of the continent to selection
       * @param {string} vcountry - The name of the country to selection
       */   
      function graphCountry(vcontinent, vcountry) {

        console.log(vcontinent);

        d3.selectAll("h1#title")._groups[0][0].textContent = "Child Mortality - Rate of deaths (Continent:" + vcontinent + ")";

        d3.select("svg").remove();
        d3.selectAll("div#resume").style("display", "none");
        d3.selectAll("div#footer").style("display", "none");

        var svg = dimple.newSvg("#chartContainer", 1000, 600);


        d3.csv("/data/MORT_200_final.csv", function(data) {

          // Filter only Periodo 0-27 days
          data = dimple.filterData(data, "Period", [
            "0-27 days"
          ]);

          // Filter continent
          if (vcontinent != null) {
            data = dimple.filterData(data, "Continent", [vcontinent]);
          }

          var countries = dimple.getUniqueValues(data, "Country");
          countries.splice(0, 0, "ALL");

          // Filter country
          if (vcountry != null) {
            data = dimple.filterData(data, "Country", [vcountry]);
          }

          var series,

            // Set a background and foreground chart
            charts = [
              new dimple.chart(svg, null),
              new dimple.chart(svg, data)
            ],
            lastDate = null,
            owners = dimple.getUniqueValues(data, "Country");

          var x, y, z;
          x = charts[1].addMeasureAxis("x", "Year");

          // Change year format 
          x.tickFormat = '#';
          x.ticks = 20;

          x.addOrderRule("Year");

          x.overrideMin = 2000;
          x.overrideMax = 2017;

          y = charts[1].addMeasureAxis("y", "Deaths per 1000");

          y.tickFormat = ".1f";
          y.overrideMax = 20;
          y.ticks = 10;
          y.title = "Deaths per 1000 live births (0-27 days)";


          z = charts[1].addMeasureAxis("z", "Deaths per 1000");
          z.overrideMax = 20;


          series = charts[1].addSeries(["Year", "Country"], dimple.plot.line, [x, y]);

          series.x.fontSize = "12px";
          series.y.fontSize = "12px";

          series.interpolation = "cardinal";
          series.aggregate = dimple.aggregateMethod.avg;


          svg.append("text")
            .attr("x", 875)
            .attr("y", function(d, i) {
              return (charts[1]._yPixels() + 20 + i * 25) - 30;
            })
            .style("text-anchor", "end")
            //desired font-size
            .style("font-size", "13px")
            .style("font-family", "sans-serif")
            //desired font-color    
            .style("fill", "black")
            .style("pointer-events", "none")
            .text("Move mouse over line to highlight the country line"); //the text to be displayed, taken from .data()    


          // Filter country
          if (vcountry != null) {

            svg.selectAll(".dimple-hover-text")
              .data([vcountry])
              .enter()
              .append("text")
              .attr("class", "dimple-hover-text")
              // Set the x and y positions of your tooltip 
              .attr("x", 850)
              .attr("y", function(d, i) {
                return (charts[1]._yPixels() + 20 + i * 25) + 3;
              })
              .style("text-anchor", "end")
              //desired font-size
              .style("font-size", "30px")
              //desired font-color    
              .style("fill", "rgb(107, 148, 177)")
              .style("pointer-events", "none")
              .text(function(d) {
                return d;
              }); //the text to be displayed, taken from .data()               
          }

          charts[1].draw();


          // change style of components (x/y axis and circle point)
          d3.selectAll(".dimple-custom-axis-title").style("font-weight", "bold");
          d3.selectAll("circle").style("stroke-width", 1);
          d3.selectAll("circle").attr("r", 2);
          d3.selectAll("circle").style("opacity", .3);
          d3.selectAll("circle").style("fill-opacity", .7);


          // Add mouseover event - to highlight the line and show country
          series.shapes.on("mouseover", function(e) {

            if (this.classList.contains("dimple-line") == true) {
              //d3.select(this).style("stroke-width", 5);       
              d3.selectAll(".dimple-line").style("opacity", 0.3);
              d3.select(this).style("opacity", 1);
              d3.select(this).style("stroke-width", 3);
              d3.selectAll("circle").style("opacity", 0);

              svg.selectAll(".dimple-hover-text")
                .data([e.data[0].aggField[1]])
                .enter()
                .append("text")
                .attr("class", "dimple-hover-text")
                // Set the x and y positions of your tooltip 
                .attr("x", 850)
                .attr("y", function(d, i) {
                  return (charts[1]._yPixels() + 20 + i * 25) + 3;
                })
                //desired font style                    
                .style("text-anchor", "end")
                //desired font-size
                .style("font-size", "30px")
                //desired font-color    
                .style("fill", e.color.fill)
                //.style("fill", "#ffccb6")          
                .style("pointer-events", "none")
                .text(function(d) {
                  return d;
                }); //the text to be displayed, taken from .data()                       
            }


            dimple._showPointTooltip(e, this, charts[1], series);
          });


          // Add mouseleav event - After highlight line, the information box is become visible
          series.shapes.on("mouseleave", function(e) {
            svg.select(".dimple-tooltip").remove();
            svg.select(".dimple-custom-tooltip-box").remove();
            svg.select(".dimple-custom-tooltip-label").remove();
            svg.select(".dimple-line-marker-circle").remove();
            svg.select(".dimple-custom-line-marker-circle").remove();
            svg.select(".dimple-tooltip-dropline").remove();
            svg.select(".dimple-custom-tooltip-dropline").remove();
            if (this.classList.contains("dimple-line") == true) {
              d3.selectAll(".dimple-line").style("opacity", 1);
              d3.select(this).style("stroke-width", 2)
            }
            svg.selectAll(".dimple-hover-text").remove();

            d3.selectAll("circle").style("opacity", .3);
          });


          // Add mouseout event - After highlight line, the information box is become visible           
          series.shapes.on("mouseout", function(e) {
            svg.select(".dimple-tooltip").remove();
            svg.select(".dimple-custom-tooltip-box").remove();
            svg.select(".dimple-custom-tooltip-label").remove();
            svg.select(".dimple-line-marker-circle").remove();
            svg.select(".dimple-custom-line-marker-circle").remove();
            svg.select(".dimple-tooltip-dropline").remove();
            svg.select(".dimple-custom-tooltip-dropline").remove();
            d3.selectAll("circle").style("opacity", .3);
          });


          // Add return option to Continent Graphic
          var ns = 'http://www.w3.org/2000/svg';
          var svg2 = document.querySelector('svg');

          var foreignObject = document.createElementNS(ns, 'foreignObject');
          foreignObject.setAttribute('height', 25);
          foreignObject.setAttribute('width', 300);

          var div = document.createElement('div');
          div.innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="javascript:location.reload();">Return to Continent Graph</a>';

          foreignObject.appendChild(div);
          svg2.appendChild(foreignObject); //svg is an already created svg element containing a d3 chart
          d3.selectAll("input").style("background-color", "#f44336");
          d3.selectAll("a").style("font-family", "sans-serif");
          d3.selectAll("a").style("font-size", "13  px");



          // Country choice option
          var svg3 = document.querySelector('svg');

          var select = d3.select('svg')
            .append('select')
            .attr('class', 'select');

          var options = select
            .selectAll('option')
            .data(countries).enter()
            .append('option')
            .text(function(d) {
              return d;
            });


          var foreignObject2 = document.createElementNS(ns, 'foreignObject');
          foreignObject2.setAttribute('id', "fo2");
          foreignObject2.setAttribute('height', 25);
          foreignObject2.setAttribute('width', 500);
          foreignObject2.setAttribute('y', 0);
          foreignObject2.setAttribute('x', 350);

          var div2 = document.createElement('div');
          div2.setAttribute('id', "div2");
          div2.innerHTML = "<text style='font-family', 'sans-serif'>Countries: </text>" + d3.selectAll("select")._groups[0][0].outerHTML;

          foreignObject2.appendChild(div2);
          svg3.appendChild(foreignObject2); //svg is an already created svg element containing a d3 chart


          if (countryIndex != 0) {
            d3.selectAll(".select")._groups[0][1].selectedIndex = countryIndex;
          }

          document.getElementsByClassName("select")[0].addEventListener("change", onchangeselect);
          document.getElementsByClassName("select")[1].addEventListener("change", onchangeselect);
          document.getElementsByClassName("select")[1].focus();

        });
      };



      /** Disable web browser option back */
      history.pushState(null, null, location.href);
      window.onpopstate = function() {
        history.go(1);
      };

      /** Call function graphContinent */
      graphContinent();