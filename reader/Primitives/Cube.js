function Cube(scene, type, highted, selected) {
        CGFobject.call(this, scene);
          this.highted = highted;
          this.selected = selected;	 
	 
    this.initBuffers();
};

Cube.prototype = Object.create(CGFobject.prototype);
Cube.prototype.constructor=Cube;


Cube.prototype.initBuffers = function () {
        this.vertices = [
/*
        //back face
            -0.5, -0.5, -0.5, //0
            0.5, -0.5, -0.5,  //1
            -0.5, 0.5, -0.5,  //2
            0.5, 0.5, -0.5,   //3  

        //front face
            -0.5,-0.5, 0.5,   //4
            0.5, -0.5, 0.5,   //5
            -0.5, 0.5, 0.5,   //6
            0.5, 0.5, 0.5,    //7     

        //right face
           0.5, -0.5, 0.5,   //8
           0.5, -0.5, -0.5,  //9
           0.5, 0.5, 0.5,   //10
           0.5, 0.5, -0.5,  //11
        
        //left face
         -0.5,-0.5, 0.5,   //12
         -0.5, -0.5, -0.5, //13
         -0.5, 0.5, 0.5,   //14
         -0.5, 0.5, -0.5,  //15

        //up face

            -0.5, 0.5, 0.5,   //16
            0.5, 0.5, 0.5,    //17  
            -0.5, 0.5, -0.5,  //18
            0.5, 0.5, -0.5,   //19 

        //bottom face

            -0.5,-0.5, 0.5,   //20
            0.5, -0.5, 0.5,   //21
            -0.5, -0.5, -0.5, //22
            0.5, -0.5, -0.5,  //23
*/ 
            // Front face
            -0.5, -0.5, 0.5, 
            0.5, -0.5, 0.5, 
            0.5, 0.5, 0.5, 
            -0.5, 0.5, 0.5, 

            // Back face
            -0.5, -0.5, -0.5, 
            -0.5, 0.5, -0.5, 
            0.5, 0.5, -0.5, 
            0.5, -0.5, -0.5, 

            // Top face
            -0.5, 0.5, -0.5, 
            -0.5, 0.5, 0.5, 
            0.5, 0.5, 0.5, 
            0.5, 0.5, -0.5, 

            // Bottom face
            -0.5, -0.5, -0.5, 
            0.5, -0.5, -0.5, 
            0.5, -0.5, 0.5, 
            -0.5, -0.5, 0.5, 

            // Right face
            0.5, -0.5, -0.5, 
            0.5, 0.5, -0.5, 
            0.5, 0.5, 0.5, 
            0.5, -0.5, 0.5, 

            // Left face
            -0.5, -0.5, -0.5, 
            -0.5, -0.5, 0.5, 
            -0.5, 0.5, 0.5, 
            -0.5, 0.5, -0.5
         ];
 
        this.indices = [
           0, 1, 2, 0, 2, 3, // front
            4, 5, 6, 4, 6, 7, // back
            8, 9, 10, 8, 10, 11, // top
            12, 13, 14, 12, 14, 15, // bottom
            16, 17, 18, 16, 18, 19, // right
            20, 21, 22, 20, 22, 23 // left
          ];

          this.normals = [
                0,0,1,
                0,0,1,
                0,0,1,
                0,0,1,
                0,0,-1,
                0,0,-1,
                0,0,-1,
                0,0,-1,
                0,1,0,
                0,1,0,
                0,1,0,
                0,1,0,
                0,-1,0,
                0,-1,0,
                0,-1,0,
                0,-1,0,
                1,0,0,
                1,0,0,
                1,0,0,
                1,0,0,
                -1,0,0,
                -1,0,0,
                -1,0,0,
                -1,0,0
          ]

         this.texCoords = [
                0,1,
                1,1,
                1,0,
                0,0,
                0,1,
                1,1,
                1,0,
                0,0,
                0,1,
                1,1,
                1,0,
                0,0,
                0,1,
                1,1,
                1,0,
                0,0,
                0,1,
                1,1,
                1,0,
                0,0,
                0,1,
                1,1,
                1,0,
                0,0
         ]
               
        this.primitiveType=this.scene.gl.TRIANGLES;
        this.initGLBuffers();
};

/**
* updating texture coordinates
* @constructor
*/
Cube.prototype.updateTextCoords = function(s,t){};