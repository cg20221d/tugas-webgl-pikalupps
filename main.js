function main() {
  /** @type {HTMLCanvasElement} */
  var kanvas = document.getElementById("kanvas")
	var gl = kanvas.getContext("webgl")

  // untuk menyimpan array
	var vertices = [
    //angka 3
		-0.9, 0.3,
    -0.9, 0.6,
    -0.85, 0.7,
    -0.55, 0.7,
    -0.5, 0.6,
    -0.5, 0.1,
    -0.53, 0,
    -0.5, -0.1,
    -0.5, -0.6,
    -0.55, -0.7,
    -0.85, -0.7,
    -0.9, -0.6,
    -0.9, -0.3,
    -0.8, -0.3,
    -0.8, -0.45,
    -0.6, -0.45,
    -0.6, -0.1,
    -0.75, -0.1,
    -0.75, 0.1,
    -0.6, 0.1,
    -0.6, 0.45,
    -0.8, 0.45,
    -0.8, 0.3,
    //angka 2
    -0.45, 0.3,
    -0.45, 0.6,
    -0.4, 0.7,
    -0.1, 0.7,
    -0.05, 0.6,
    -0.05, 0.1,
    -0.35, -0.45,
    -0.05, -0.45,
    -0.05, -0.7,
    -0.45, -0.7,
    -0.45, -0.35,
    -0.15, 0.25,
    -0.15, 0.45,
    -0.35, 0.45,
    -0.35, 0.3,
    //huruf M
    //1
    0,0.7,
    0.15, 0.7,
    0.15, 0.5,
    0, 0.5,
    //2
    0.025, 0.7,
    0.125, 0.7,
    0.125, -0.7,
    0.025, -0.7,
    //3
    0, -0.7,
    0.15, -0.7,
    0.15, -0.5,
    0, -0.5,
    //4
    0.15, 0.7,
    0.225, 0.1,
    0.225, -0.5,
    0.025, 0.7,
    //5
    0.300, 0.7,
    0.225, 0.1,
    0.225, -0.5,
    0.425, 0.7,
    //6
    0.3,0.7,
    0.45, 0.7,
    0.45, 0.5,
    0.3, 0.5,
    //7
    0.325, 0.7,
    0.425, 0.7,
    0.425, -0.7,
    0.325, -0.7,
    //8
    0.3, -0.7,
    0.45, -0.7,
    0.45, -0.5,
    0.3, -0.5,
	]

  var buffer = gl.createBuffer()
	gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW)
  
  // vertex shader
  var vertexShaderCode = `
  attribute vec2 aPosition;
	void main() {
		float x = aPosition.x;
		float y = aPosition.y;
		gl_PointSize = 50.0;

		gl_Position = vec4(x, y, 0.0, 1.0);
  }`
  var vertexShaderObject = gl.createShader(gl.VERTEX_SHADER)
  gl.shaderSource(vertexShaderObject, vertexShaderCode)
  gl.compileShader(vertexShaderObject)

  // fragment shader
  var fragmentShaderCode = `
  precision mediump float;
	void main() {
		float r = 0.46;
		float g = 0.90;
		float b = 0.85;
		gl_FragColor = vec4(r, g, b, 1.0);
  }`
  var fragmentShaderObject = gl.createShader(gl.FRAGMENT_SHADER)
  gl.shaderSource(fragmentShaderObject, fragmentShaderCode)
  gl.compileShader(fragmentShaderObject)

  // use
  var shaderProgram = gl.createProgram()
  gl.attachShader(shaderProgram, vertexShaderObject)
  gl.attachShader(shaderProgram, fragmentShaderObject)
  gl.linkProgram(shaderProgram)
  gl.useProgram(shaderProgram)

  // mengajari GPU cara mengoleksi nilai posisi dari ARRAY_BUFFER
	var aPosition = gl.getAttribLocation(shaderProgram, "aPosition")
	gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0)
	gl.enableVertexAttribArray(aPosition)

  gl.clearColor(0.02,0.27,0.37, 1.0)
  gl.clear(gl.COLOR_BUFFER_BIT)

  gl.drawArrays(gl.LINE_LOOP, 0, 23)
  gl.drawArrays(gl.LINE_LOOP, 23, 15)

  gl.drawArrays(gl.TRIANGLE_FAN, 38, 4)
  gl.drawArrays(gl.TRIANGLE_FAN, 42, 4)
  gl.drawArrays(gl.TRIANGLE_FAN, 46, 4)
  gl.drawArrays(gl.TRIANGLE_FAN, 50, 4)
  gl.drawArrays(gl.TRIANGLE_FAN, 54, 4)
  gl.drawArrays(gl.TRIANGLE_FAN, 58, 4)
  gl.drawArrays(gl.TRIANGLE_FAN, 62, 4)
  gl.drawArrays(gl.TRIANGLE_FAN, 66, 4)
}