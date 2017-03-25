var About = React.createClass({
  render: function(){
    return (
 

        <div>
        <header id="myCarousel" className="carousel slide">

            <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
                <li data-target="#myCarousel" data-slide-to="3"></li>

            </ol>


            <div className="carousel-inner">
                <div className="item active">

                    <div className="fill" style="background-image:url('./images/animal.jpg');" /></div>
                    <div className="carousel-caption">
                        <h1>3D Animal</h1>
                    </div>
                </div>
                <div className="item">

                    <div className="fill" style="background-image:url('./images/roundel.jpg');" />
                    </div>
                    <div className="carousel-caption">
                        <h1>Target (Roundel)</h1>
                    </div>
                </div>
                <div className="item">

                    <div className="fill" style="background-image:url('./images/face.jpg');" /></div>
                    <div className="carousel-caption">
                        <h1>Paper Face (Animal)</h1>
                    </div>
                </div>
                <div className="item">

                    <div className="fill" style="background-image:url('./images/indoor.jpg');" /></div>
                    <div className="carousel-caption">
                        <h1>Indoor Range</h1>
                    </div>
                </div>
            </div>

            <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                <span className="icon-prev"></span>
            </a>
            <a className="right carousel-control" href="#myCarousel" data-slide="next">
                <span className="icon-next"></span>
            </a>

        </header>
        </div>

    );
  }
});