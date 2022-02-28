function ejecutar(){
	
	color_fondo=document.getElementById("m_colores").value;
	color_texto=document.getElementById("t_colores").value;

	/*if (color_fondo==rojo) {
			document.f_colores.res.style.backgroundcolor="red";
	}*/
	document.f_colores.res.style.background=color_fondo;
	document.f_colores.res.style.color=color_texto;
}

