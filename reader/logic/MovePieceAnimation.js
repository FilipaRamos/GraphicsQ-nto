/**
* Constructor for the MovePieceAnimation
* @constructor
*/
function MovePieceAnimation(scene, posInit, posFinal, initTime) {
    
    this.posFinal = posFinal;
    this.posInit = posInit;
    this.initTime = initTime ;
    
    this.vecMovimento = [posFinal[0] - posInit[0] , posFinal[1]  - posInit[1]];
    //[xf-xi, yf- yi]
    this.maxHight = 2;
    
    this.totalTime = 5;
    this.t0;
    
    this.totalTime /= 1000;
    this.scene = scene;
    
    this.done = false;

}

MovePieceAnimation.prototype.constructor = MovePieceAnimation;

/**
* Update the animation
* @method
*/
MovePieceAnimation.prototype.update = function(currentTime) {
    
    var time = (currentTime/1000 - this.initTime);
    
    var t = time / this.totalTime;
    
      if (t >= 0 && t < 1) {
         
        var des = -4 * this.maxHight * t * t + 4 * this.maxHight * t;
        
        this.scene.translate(this.posInit[0] * 1.2 + this.vecMovimento[0] * 1.2 * t, des + 0.5 , this.posInit[1] *1.2 + this.vecMovimento[1] * 1.2 * t);
    
   } 
    else {
        var des = -4 * this.maxHight + 4 * this.maxHight;
        
        this.scene.translate( this.posInit[0] + this.vecMovimento[0] , des  , this.posFinal[1]);
        
        this.done = true;

        this.scene.setPickEnabled(true);
    
    }

}
