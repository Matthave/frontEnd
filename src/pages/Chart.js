import React from 'react'

class Chart extends React.Component {


    componentDidMount() {
        this.canvas = document.querySelector(`#${this.props.chartID}`);
        this.ctx = this.canvas.getContext('2d');
        this.width = this.props.canvasW;
        this.height = this.props.canvasW;
        this.fullCircle = 1;
        this.percent = 0;

        //Setting Of Arc
        this.howPercentOnCircle = 360;
        this.howPercentNumber = 'Passion';
        this.baseLine = this.props.baseLine;
        this.angleLine = this.props.angleLine;
        this.appendix = this.props.appendix;
        this.fontColor = '#fff';
        this.fontSize = this.props.fontSize;
        this.fontFamily = 'arial';

        //Gradients Color
        this.barOneGradientOne = '#eee'
        this.barOneGradientTwo = '#fff'
        this.barTwoGradientOne = '#555'
        this.barTwoGradientTwo = '#000'

        this.run()
    }

    init() {
        console.log(this.baseLine)
        console.log(this.angleLine)
        console.log(this.appendix)
        console.log(this.width)
        this.canvas.width = this.width;
        this.canvas.height = this.height;

        this.ctx.fillStyle = 'transparent';
        this.ctx.fillRect(0, 0, this.width, this.height);
    }

    drawArc() {
        // this.ctx.beginPath();
        // this.ctx.lineWidth = this.widthOfFirstCircle;
        // const gradient = this.ctx.createLinearGradient(0, 0, this.width / 2, this.height / 2)
        // gradient.addColorStop(0, this.barOneGradientOne);
        // gradient.addColorStop(1, this.barOneGradientTwo);
        // this.ctx.strokeStyle = gradient;
        // this.ctx.arc(this.width / 2, this.height / 2, this.radiusCircles, 0, Math.PI / 180 * 360);
        // this.ctx.stroke();

        // this.ctx.beginPath();
        // this.ctx.lineWidth = this.widthOffSecondCircle;
        // this.ctx.lineCap = 'square'
        // const gradient2 = this.ctx.createLinearGradient(0, 0, this.width / 2, this.height / 2)
        // gradient2.addColorStop(0, this.barTwoGradientOne);
        // gradient2.addColorStop(1, this.barTwoGradientTwo);
        // this.ctx.strokeStyle = gradient2;
        // this.ctx.arc(this.width / 2, this.height / 2, this.radiusCircles, 0, Math.PI / 180 * this.fullCircle);
        // this.ctx.stroke();

        this.ctx.save();
        this.ctx.fillStyle = '#fff';
        this.ctx.beginPath();
        this.ctx.translate(this.width / 2, this.width / 2);
        this.ctx.moveTo(0, 0 - this.baseLine);

        for (let i = 0; i < 5; i++) {
            this.ctx.rotate((Math.PI / 180) * 60);
            if (i === 2) {
                this.ctx.lineTo(0, - this.appendix)
            }
            if (i === 0) {
                this.ctx.lineTo(0, - this.angleLine)
            }
            if (i === 4) {
                this.ctx.lineTo(0, - this.angleLine)
            }

            this.ctx.lineTo(0, 0 - this.baseLine)

            if (i === 2) {
                this.ctx.lineTo(0, - this.appendix)
            }
            if (i === 0) {
                this.ctx.lineTo(0, - this.angleLine)
            }
            if (i === 4) {
                this.ctx.lineTo(0, - this.angleLine)
            }
        }
        this.ctx.fill();
        this.ctx.restore();

        /////////////////////////////////////
        this.ctx.save();
        this.ctx.fillStyle = '#000';
        this.ctx.beginPath();
        this.ctx.translate(this.width / 2, this.width / 2);
        this.ctx.moveTo(0, 0 - (this.baseLine - 5));

        for (let i = 0; i < 5; i++) {
            this.ctx.rotate((Math.PI / 180) * 60);
            if (i === 2) {
                this.ctx.lineTo(0, - (this.appendix - 25))
            }
            if (i === 0) {
                this.ctx.lineTo(0, - (this.angleLine - 5))
            }
            if (i === 4) {
                this.ctx.lineTo(0, - (this.angleLine - 5))
            }
            this.ctx.lineTo(0, 0 - (this.baseLine - 5))


            if (i === 2) {
                this.ctx.lineTo(0, - (this.appendix - 25))
            }
            if (i === 0) {
                this.ctx.lineTo(0, - (this.angleLine - 5))
            }
            if (i === 4) {
                this.ctx.lineTo(0, - (this.angleLine - 5))
            }
        }
        this.ctx.fill();
        this.ctx.restore();
    }

    // countPercent() {
    //     const floorPercent = Math.floor(this.percent)
    //     this.ctx.fillStyle = this.fontColor;
    //     this.ctx.font = ` ${this.fontSize}px ${this.fontFamily}`;
    //     this.ctx.fillText(`${this.props.textInside}`, (this.width / 2), (this.height / 2));
    //     this.ctx.textAlign = "center";
    //     this.ctx.textBaseline = "middle";


    //     if (this.percent < this.howPercentNumber) this.percent += 0.3
    // }

    clear() {
        this.ctx.fillStyle = 'rgba(0,0,0,1)';
        this.ctx.fillRect(0, 0, this.width, this.height)
    }


    drawCircle() {
        setInterval(() => {
            if (this.fullCircle < this.howPercentOnCircle) {
                this.clear()
                this.drawArc();
            } else {
                return
            }
        }, 100);
    }

    run() {
        this.init();
        this.drawCircle()
    }

    render() {
        return (
            <canvas id={`${this.props.chartID}`} className={this.props.visibility ? 'canvas canvas--canvVisibility' : 'canvas'}></canvas>
        )
    }
}
export default Chart