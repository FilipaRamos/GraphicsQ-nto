/**
* Board Constructor
* Constructs a board
* @constructor
*/
function Board(scene) {
    
    this.celulas = [];
    this.floor = [];
    this.board = [];
    this.scene = scene;
    
    this.initFloor();
    
    this.textura = new CGFtexture(this.scene,"texture/wood_board.jpg");
    this.textura1 = new CGFtexture(this.scene,"texture/wood_board_highlighted.jpg");

}
;

Board.prototype.constructor = Board;


Board.prototype.initFloor = function() {
    
    var row = [];

    for (var i = 0; i < 11; i++) {
        for (var j = 0; j < 11; j++) {
            var piece = new Cube(this.scene,false,false);
            row[j] = piece;
        }
        this.floor[i] = row;
        row = [];
    }

}

Board.prototype.initCelulas = function() {
    var row = [];
    
    for (i = 0; i < 11; i++) {
        for (j = 0; j < 11; j++) {
            var celula = new Celula(this.scene,this.board[i][j],false,false);
            row[j] = celula;
        }
        this.celulas[i] = row;
        row = [];
    }

}

/**
 * draw the vehicle
 * @constructor
 */
Board.prototype.display = function() 
{
    var i;
    var j;
    var k=0;
    
    this.scene.pushMatrix();
    
    for (i = 0; i < 11; i++) {
        for (j = 0; j < 11; j++) {
            this.scene.translate(1.2, 0, 0);
            if(this.floor[i][j].selected)
                this.textura1.bind();
            else this.textura.bind();
            this.scene.registerForPick(k, this.floor[i][j]);
            this.floor[i][j].display();
            k++;
        
        }
        this.scene.translate(-11 * 1.2, 0, 1.2);
    }
    
    this.scene.translate(0, 1, -11 * 1.2);
    
    k=500;

    if (this.celulas[0] !== undefined) {
        for (i = 0; i < 11; i++) {
            for (j = 0; j < 11; j++) {
                this.scene.translate(1.2, 0, 0);
                this.scene.registerForPick(k, this.celulas[i][j]);
                if (this.celulas[i][j].primitive !== undefined) {
                    this.celulas[i][j].primitive.display();
                }
                k++;
            }

            this.scene.translate(-11 * 1.2, 0, 1.2);
        }
    }
    
    
    this.scene.popMatrix();

}
;
