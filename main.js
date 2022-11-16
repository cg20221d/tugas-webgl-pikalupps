const main = () =>{
  const canvas = document.querySelector('#kanvas');
  const gl = canvas.getContext('webgl');

  var vertices3 = [
    -0.95,  0.30,  0.25,    0.7,  0.3,  0.7, 
    -0.95,  0.60,  0.25,    0.7,  0.3,  0.7, 
    -0.90,  0.70,  0.25,    0.7,  0.3,  0.7, 
    -0.60,  0.70,  0.25,    0.7,  0.3,  0.7, 
    -0.55,  0.60,  0.25,    0.7,  0.3,  0.7, 
    -0.55,  0.10,  0.25,    0.7,  0.3,  0.7, 
    -0.58,  0.00,  0.25,    0.7,  0.3,  0.7, 
    -0.55, -0.10,  0.25,    0.7,  0.3,  0.7, 
    -0.55, -0.60,  0.25,    0.7,  0.3,  0.7, 
    -0.60, -0.70,  0.25,    0.7,  0.3,  0.7, 
    -0.90, -0.70,  0.25,    0.7,  0.3,  0.7, 
    -0.95, -0.60,  0.25,    0.7,  0.3,  0.7, 
    -0.95, -0.30,  0.25,    0.7,  0.3,  0.7, 
    -0.85, -0.30,  0.25,    0.7,  0.3,  0.7, 
    -0.85, -0.45,  0.25,    0.7,  0.3,  0.7, 
    -0.65, -0.45,  0.25,    0.7,  0.3,  0.7, 
    -0.65, -0.10,  0.25,    0.7,  0.3,  0.7, 
    -0.80, -0.10,  0.25,    0.7,  0.3,  0.7, 
    -0.80,  0.10,  0.25,    0.7,  0.3,  0.7, 
    -0.65,  0.10,  0.25,    0.7,  0.3,  0.7, 
    -0.65,  0.45,  0.25,    0.7,  0.3,  0.7, 
    -0.85,  0.45,  0.25,    0.7,  0.3,  0.7, 
    -0.85,  0.30,  0.25,    0.7,  0.3,  0.7,
    
    -0.95,  0.30,  -0.25,    0.7,  0.3,  0.7,
    -0.95,  0.60,  -0.25,    0.7,  0.3,  0.7,
    -0.90,  0.70,  -0.25,    0.7,  0.3,  0.7, 
    -0.60,  0.70,  -0.25,    0.7,  0.3,  0.7, 
    -0.55,  0.60,  -0.25,    0.7,  0.3,  0.7, 
    -0.55,  0.10,  -0.25,    0.7,  0.3,  0.7, 
    -0.58,  0.00,  -0.25,    0.7,  0.3,  0.7, 
    -0.55, -0.10,  -0.25,    0.7,  0.3,  0.7, 
    -0.55, -0.60,  -0.25,    0.7,  0.3,  0.7, 
    -0.60, -0.70,  -0.25,    0.7,  0.3,  0.7, 
    -0.90, -0.70,  -0.25,    0.7,  0.3,  0.7, 
    -0.95, -0.60,  -0.25,    0.7,  0.3,  0.7, 
    -0.95, -0.30,  -0.25,    0.7,  0.3,  0.7, 
    -0.85, -0.30,  -0.25,    0.7,  0.3,  0.7, 
    -0.85, -0.45,  -0.25,    0.7,  0.3,  0.7, 
    -0.65, -0.45,  -0.25,    0.7,  0.3,  0.7, 
    -0.65, -0.10,  -0.25,    0.7,  0.3,  0.7, 
    -0.80, -0.10,  -0.25,    0.7,  0.3,  0.7, 
    -0.80,  0.10,  -0.25,    0.7,  0.3,  0.7, 
    -0.65,  0.10,  -0.25,    0.7,  0.3,  0.7, 
    -0.65,  0.45,  -0.25,    0.7,  0.3,  0.7, 
    -0.85,  0.45,  -0.25,    0.7,  0.3,  0.7, 
    -0.85,  0.30,  -0.25,    0.7,  0.3,  0.7, 
  ];

  var indices3 = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 
    10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
    30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
    40, 41, 42, 43, 44, 45
  ];
  
  var vertices2 = [
    -0.50,  0.30,  0.25,    0.7,  0.3,  0.7, 
    -0.50,  0.60,  0.25,    0.7,  0.3,  0.7,
    -0.45,  0.70,  0.25,    0.7,  0.3,  0.7,
    -0.15,  0.70,  0.25,    0.7,  0.3,  0.7,
    -0.10,  0.60,  0.25,    0.7,  0.3,  0.7,
    -0.10,  0.10,  0.25,    0.7,  0.3,  0.7,
    -0.40, -0.45,  0.25,    0.7,  0.3,  0.7,
    -0.10, -0.45,  0.25,    0.7,  0.3,  0.7,
    -0.10, -0.70,  0.25,    0.7,  0.3,  0.7,
    -0.50, -0.70,  0.25,    0.7,  0.3,  0.7,
    -0.50, -0.35,  0.25,    0.7,  0.3,  0.7,
    -0.20,  0.25,  0.25,    0.7,  0.3,  0.7,
    -0.20,  0.45,  0.25,    0.7,  0.3,  0.7,
    -0.40,  0.45,  0.25,    0.7,  0.3,  0.7,
    -0.40,  0.30,  0.25,    0.7,  0.3,  0.7,

    -0.50,  0.30,  0,    0.7,  0.3,  0.7, 
    -0.50,  0.60,  0,    0.7,  0.3,  0.7,
    -0.45,  0.70,  0,    0.7,  0.3,  0.7,
    -0.15,  0.70,  0,    0.7,  0.3,  0.7,
    -0.10,  0.60,  0,    0.7,  0.3,  0.7,
    -0.10,  0.10,  0,    0.7,  0.3,  0.7,
    -0.40, -0.45,  0,    0.7,  0.3,  0.7,
    -0.10, -0.45,  0,    0.7,  0.3,  0.7,
    -0.10, -0.70,  0,    0.7,  0.3,  0.7,
    -0.50, -0.70,  0,    0.7,  0.3,  0.7,
    -0.50, -0.35,  0,    0.7,  0.3,  0.7,
    -0.20,  0.25,  0,    0.7,  0.3,  0.7,
    -0.20,  0.45,  0,    0.7,  0.3,  0.7,
    -0.40,  0.45,  0,    0.7,  0.3,  0.7,
    -0.40,  0.30,  0,    0.7,  0.3,  0.7,
  ];
  
  var indices2 = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29
  ]; 
  
  var verticesM = [
    //1
    0.000,  0.7,  0.25,    0.2,  0.5,  0.7,
    0.150,  0.7,  0.25,    0.2,  0.5,  0.7,
    0.150,  0.5,  0.25,    0.2,  0.5,  0.7,
    0.000,  0.5,  0.25,    0.2,  0.5,  0.7,
    //2
    0.025,  0.7,  0.25,    0.2,  0.5,  0.7,
    0.125,  0.7,  0.25,    0.2,  0.5,  0.7,
    0.125, -0.7,  0.25,    0.2,  0.5,  0.7,
    0.025, -0.7,  0.25,    0.2,  0.5,  0.7,
    //3
    0.000, -0.7,  0.25,    0.2,  0.5,  0.7,
    0.150, -0.7,  0.25,    0.2,  0.5,  0.7,
    0.150, -0.5,  0.25,    0.2,  0.5,  0.7,
    0.000, -0.5,  0.25,    0.2,  0.5,  0.7,
    //4
    0.150,  0.7,  0.25,    0.2,  0.5,  0.7,
    0.225,  0.1,  0.25,    0.2,  0.5,  0.7,
    0.225, -0.5,  0.25,    0.2,  0.5,  0.7,
    0.025,  0.7,  0.25,    0.2,  0.5,  0.7,
    //5
    0.300,  0.7,  0.25,    0.2,  0.5,  0.7,
    0.225,  0.1,  0.25,    0.2,  0.5,  0.7,
    0.225, -0.5,  0.25,    0.2,  0.5,  0.7,
    0.425,  0.7,  0.25,    0.2,  0.5,  0.7,
    //6
    0.300,  0.7,  0.25,    0.2,  0.5,  0.7,
    0.450,  0.7,  0.25,    0.2,  0.5,  0.7,
    0.450,  0.5,  0.25,    0.2,  0.5,  0.7,
    0.300,  0.5,  0.25,    0.2,  0.5,  0.7,
    //7
    0.325,  0.7,  0.25,    0.2,  0.5,  0.7,
    0.425,  0.7,  0.25,    0.2,  0.5,  0.7,
    0.425, -0.7,  0.25,    0.2,  0.5,  0.7,
    0.325, -0.7,  0.25,    0.2,  0.5,  0.7,
    //8
    0.300, -0.7,  0.25,    0.2,  0.5,  0.7,
    0.450, -0.7,  0.25,    0.2,  0.5,  0.7,
    0.450, -0.5,  0.25,    0.2,  0.5,  0.7,
    0.300, -0.5,  0.25,    0.2,  0.5,  0.7,
  ];
  
  var indicesM = [
    0,  1,  2,     0,  2,  3,
    4,  5,  6,     4,  6,  7,   
    8,  9,  10,    8,  10, 11,  
    12, 13, 14,    12, 14, 15, 
    16, 17, 18,    16, 18, 19,  
    20, 21, 22,    20, 22, 23,
    24, 25, 26,    24, 26, 27,
    28, 29, 30,    28, 30, 31   
  ];
  
  var verticesA = [
    //1
    0.500, -0.7,  0.25,    0.2,  0.5,  0.7,
    0.650, -0.7,  0.25,    0.2,  0.5,  0.7,
    0.650, -0.5,  0.25,    0.2,  0.5,  0.7,
    0.500, -0.5,  0.25,    0.2,  0.5,  0.7,
    //2
    0.800, -0.7,  0.25,    0.2,  0.5,  0.7,
    0.950, -0.7,  0.25,    0.2,  0.5,  0.7,
    0.950, -0.5,  0.25,    0.2,  0.5,  0.7,
    0.800, -0.5,  0.25,    0.2,  0.5,  0.7,
    //3
    0.600, -0.2,  0.25,    0.2,  0.5,  0.7,
    0.600,  0.0,  0.25,    0.2,  0.5,  0.7,
    0.850,  0.0,  0.25,    0.2,  0.5,  0.7,
    0.850, -0.2,  0.25,    0.2,  0.5,  0.7,
    //4
    0.675,  0.7,  0.25,    0.2,  0.5,  0.7,
    0.500, -0.7,  0.25,    0.2,  0.5,  0.7,
    0.625, -0.5,  0.25,    0.2,  0.5,  0.7,
    0.775,  0.7,  0.25,    0.2,  0.5,  0.7,
    //5
    0.675,  0.7,  0.25,    0.2,  0.5,  0.7,
    0.850, -0.7,  0.25,    0.2,  0.5,  0.7,
    0.925, -0.5,  0.25,    0.2,  0.5,  0.7,
    0.775,  0.7,  0.25,    0.2,  0.5,  0.7
  ];

  var indicesA = [
    0,  1,  2,     0,  2,  3,
    4,  5,  6,     4,  6,  7,   
    8,  9,  10,    8,  10, 11,
    12, 13, 14,    12, 14, 15, 
    16, 17, 18,    16, 18, 19
  ];

  const objects = [
    {
      vertices: vertices3,
      indices: indices3,
      length: indices3.length,
      type: gl.LINE_LOOP,
    },
    {
      vertices: vertices2,
      indices : indices2,
      length: indices2.length,
      type: gl.LINE_LOOP
    },
    {
      vertices: verticesM,
      indices: indicesM,
      length: indicesM.length,
      type: gl.TRIANGLES,
    },
    {
      vertices: verticesA,
      indices: indicesA,
      length: indicesA.length,
      type: gl.TRIANGLES,
    },
  ]

  // vertex shader
  const vertexShaderCode = 
  `
  attribute vec3 aPosition;
  attribute vec3 aColor;
  uniform mat4 uModel;
  uniform mat4 uView;
  uniform mat4 uProjection;
  varying vec3 vColor;
  void main() {
    gl_Position = uProjection * uView * uModel * vec4(aPosition, 1.0);
    vColor = aColor;
  }`

  const vertexShaderObject = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vertexShaderObject, vertexShaderCode);
  gl.compileShader(vertexShaderObject); //sampai sini sudah menjadi .o

  // fragmen shader
  const fragmenShaderCode = `
  precision mediump float;
  varying vec3 vColor;
  void main(){
    gl_FragColor = vec4(vColor, 1.0);
  }`

  const fragmenShaaderObject = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragmenShaaderObject, fragmenShaderCode);
  gl.compileShader(fragmenShaaderObject); //sampai sini sudah menjadi .o

  // shader program
  const shaderProgram = gl.createProgram(); //(.exe)
  gl.attachShader(shaderProgram, vertexShaderObject);
  gl.attachShader(shaderProgram, fragmenShaaderObject);
  gl.linkProgram(shaderProgram);
  gl.useProgram(shaderProgram);

  // varoaible lokal
  var rotateX = 0;
  var rotateY = 0;
  var canvasWidth = 12
  var horizontalSpeed = 0.132;
  var horizontalDelta = 0.0;
  var verticalDelta = 0.0;
  var scaleDelta = 0.0;
  var scaleSpeed = 0.05;

  // View
  var cameraX = 0.0;
  var cameraZ = 7.5;
  var view = glMatrix.mat4.create();

  glMatrix.mat4.lookAt(
    view,
    [cameraX, 0.0, cameraZ],
    [cameraX, 0.0, 0],
    [0.0, 1.0, 0.0]
  );

  var perspective = glMatrix.mat4.create();
  glMatrix.mat4.perspective(perspective, Math.PI/2.4, 1.0, 0.5, 50.0);
  
  const draw = (vertices, indices, start=0, end, type=gl.LINE_LOOP) =>{ 
    const buffer = gl.createBuffer();
    const indexBuffer = gl.createBuffer();

    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);
    
    const aPosition = gl.getAttribLocation(shaderProgram, 'aPosition');
    const aColor = gl.getAttribLocation(shaderProgram, 'aColor');

    gl.vertexAttribPointer(aPosition, 3, gl.FLOAT, false, 
      6 * Float32Array.BYTES_PER_ELEMENT, 
      0 * Float32Array.BYTES_PER_ELEMENT
    );

    gl.enableVertexAttribArray(aPosition);
    
    gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, 
      6 * Float32Array.BYTES_PER_ELEMENT, 
      3 * Float32Array.BYTES_PER_ELEMENT 
      );
    gl.enableVertexAttribArray(aColor);
    
    gl.drawElements(type, indices.length, gl.UNSIGNED_SHORT, 0);
  }

  const animate3 = () =>{
    var model = glMatrix.mat4.create();

    if (horizontalDelta >= (canvasWidth/2) || horizontalDelta <= (-canvasWidth/2+1)) {
      horizontalSpeed = horizontalSpeed * -1;
    }

    horizontalDelta += horizontalSpeed;

    glMatrix.mat4.translate(model, model, [horizontalDelta, verticalDelta, 0.0]);
    
    var uModel = gl.getUniformLocation(shaderProgram, "uModel");
    var uView = gl.getUniformLocation(shaderProgram, "uView");
    var uProjection = gl.getUniformLocation(shaderProgram, "uProjection");

    gl.uniformMatrix4fv(uModel,false, model);
    gl.uniformMatrix4fv(uView, false, view);
    gl.uniformMatrix4fv(uProjection, false, perspective);

    draw(objects[0].vertices, objects[0].indices, 0, objects[0].length, objects[0].type);
  }
  
  const animate2 = () =>{
    var model = glMatrix.mat4.create();

    if (scaleDelta >= 2 || scaleDelta <= -0.5) {
      scaleSpeed = scaleSpeed * -1;
    }

    scaleDelta += scaleSpeed;

    glMatrix.mat4.translate(model, model, [0, 0, scaleDelta]);
    
    var uModel = gl.getUniformLocation(shaderProgram, "uModel");
    var uView = gl.getUniformLocation(shaderProgram, "uView");
    var uProjection = gl.getUniformLocation(shaderProgram, "uProjection"); 

    gl.uniformMatrix4fv(uModel,false, model);
    gl.uniformMatrix4fv(uView, false, view);
    gl.uniformMatrix4fv(uProjection, false, perspective);

    draw(objects[1].vertices, objects[1].indices, 0, objects[1].length, objects[1].type);
  }

  const animateM = () =>{
    var model = glMatrix.mat4.create();

    glMatrix.mat4.rotateY(
      model, model, rotateY
    );

    var uModel = gl.getUniformLocation(shaderProgram, "uModel");
    var uView = gl.getUniformLocation(shaderProgram, "uView");
    var uProjection = gl.getUniformLocation(shaderProgram, "uProjection"); 

    gl.uniformMatrix4fv(uModel,false, model);
    gl.uniformMatrix4fv(uView, false, view);
    gl.uniformMatrix4fv(uProjection, false, perspective);

    draw(objects[2].vertices, objects[2].indices, 0, objects[2].length, objects[2].type);
  }

  const animateA = () =>{
    var model = glMatrix.mat4.create();

    glMatrix.mat4.rotateX(
      model, model, rotateX
    );

    var uModel = gl.getUniformLocation(shaderProgram, "uModel");
    var uView = gl.getUniformLocation(shaderProgram, "uView");
    var uProjection = gl.getUniformLocation(shaderProgram, "uProjection");

    gl.uniformMatrix4fv(uModel,false, model);
    gl.uniformMatrix4fv(uView, false, view);
    gl.uniformMatrix4fv(uProjection, false, perspective);

    draw(objects[3].vertices, objects[3].indices, 0, objects[3].length, objects[3].type);
  }
  
  function onKeydown(event) {
    if (event.keyCode == 65 || event.keyCode == 37) { // a / arrow kiri
      rotateY -= 0.2;
    } else if (event.keyCode == 68 || event.keyCode == 39) { // d / arrow kanan
      rotateY += 0.2;
    }

    if (event.keyCode == 87 || event.keyCode == 38) { // w / arrow atas
      rotateX -= 0.2;
    } else if (event.keyCode == 83 || event.keyCode == 40) { // s / arrow bawah
      rotateX += 0.2;
    }
  }
  document.addEventListener("keydown", onKeydown);

  const render = () => {  
    gl.clearColor(0.02, 0.27, 0.37, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);  

    animate3();
    animate2();
    animateM();
    animateA();
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}