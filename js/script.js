var sheffieldVid = document.getElementById('sheffield');

// init controller
	var controller = new ScrollMagic.Controller();

	// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#sheffield", duration: 200})
					.addTo(controller)
					.addIndicators() // add indicators (requires plugin)

					.on("enter", function () {
            sheffieldVid.play();
            }
					})

          .on("leave", function () {
            sheffieldVid.pause();
            }
          })
